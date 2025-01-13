import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCarts from "../../../../hooks/useCarts";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const CheckoutForm = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { carts, refetch } = useCarts()
    const totalPrice = carts.reduce((total, item) => total + item.price, 0)
    const navigate = useNavigate()
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [totalPrice, axiosSecure])

    const handleSubmit = async e => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setPaymentError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),//utc date convert to do. use moment js
                    cartIds: carts.map(item => item._id),
                    menuIds: carts.map(item => item.menuId),
                    status: 'pending'
                }
                const { data } = await axiosSecure.post('/payments', payment)
                if (data.paymentResult.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    refetch()
                    navigate('/dashboard/payment-history')
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="borderWithButton border mt-3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {paymentError && <p className="text-red-400">{paymentError}</p>}
                {transactionId && <p className="text-green-400">{transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;