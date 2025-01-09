import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        axiosSecure.get(`/payments-history/${user?.email}`)
            .then(res => setPaymentHistory(res.data))
    }, [user?.email, axiosSecure])

    return (
        <div>
            <SectionHeader title={'Payment History'} subTitle={'Payment history checkbox'}></SectionHeader>

        </div>
    );
};

export default PaymentHistory;