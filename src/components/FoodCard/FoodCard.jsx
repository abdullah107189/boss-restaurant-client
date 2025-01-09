import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCarts from "../../hooks/useCarts";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {

    const { _id, image, name, recipe, price } = item || {}
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { refetch } = useCarts()

    const handleFoodItem = async () => {
        if (user?.email) {
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,
            }
            const { data } = await axiosSecure.post('/carts', cartItem)
            if (data.insertedId) {
                refetch()
                toast.success('product added in the cart')
            }
        }
        else {
            Swal.fire({
                title: "Your are not login!",
                text: "Please login for add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { location }, replace: true })
                }
            });
        }
    }
    return (
        <div className="card card-compact bg-base-100 rounded-xl shadow-xl lg:px-0 px-4">
            <figure >
                <img
                    className="w-full relative"
                    src={image}
                    alt={name} />
                <p className="px-3 py-1 rounded-lg top-4 right-4 absolute bg-gray-800 text-white">${price}</p>
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => { handleFoodItem(item) }} className="card-actions justify-center mt-3">
                    <button className="uppercase font-bold rounded-lg border-0 border-b-4 border-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827] transform duration-300 px-7 py-3 text-[#BB8506]">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;