import { MdDeleteForever } from "react-icons/md";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useCarts from "../../../hooks/useCarts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCarts = () => {
    const { carts, isLoading, refetch } = useCarts()
    const axiosSecure = useAxiosSecure()
    const totalPrice = carts.reduce((total, order) => total + order.price, 0).toFixed(2);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    });
            }
        });
    }
    return (
        <div className="">
            <SectionHeader subTitle={"My Cart"} title={"Wanna add more"}></SectionHeader>
            <div className="">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between mb-4 font-serif">
                        <h2 className="md:text-lg font-semibold">TOTAL ORDERS: {carts.length}</h2>
                        <h2 className="md:text-lg font-semibold">TOTAL PRICE: ${totalPrice}</h2>
                        {
                            carts.length === 0 ?
                                <button disabled={true} className="bg-[#D1A054] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded">
                                    PAY
                                </button>
                                :
                                <Link to={'/dashboard/payment'}>
                                    <button className="bg-[#D1A054] text-white font-bold py-2 px-4 rounded">
                                        PAY
                                    </button>
                                </Link>
                        }
                    </div>

                    <div className=" overflow-x-auto rounded-t-lg">
                        <table className="w-full table">
                            <thead className="bg-[#D1A054] text-white  ">
                                <tr className="4">
                                    <th className=" md:py-6 py-4"></th>
                                    <th className="text-center py-2">ITEM IMAGE</th>
                                    <th className=" py-2">ITEM NAME</th>
                                    <th className=" py-2 ">PRICE</th>
                                    <th className="text-center py-2">ACTION</th>
                                </tr>
                            </thead>
                            {
                                isLoading ?
                                    <tbody>
                                        <tr className="">
                                            <td className="h-4 skeleton "></td>
                                            <td className="h-4 skeleton "></td>
                                            <td className="h-4 skeleton "></td>
                                            <td className="h-4 skeleton "></td>
                                            <td className="text-center">
                                                <button className="bg-red-300 h-10 w-10 skeleton text-white font-bold py-1 px-2 rounded">
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    :
                                    <tbody>
                                        {carts.map((order, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="py-2 font-bold">
                                                    {index + 1}
                                                </td>
                                                <td className="py-2 flex justify-center">
                                                    <img className="w-20 h-14 rounded-md" src={order.image} alt="" ></img>
                                                </td>
                                                <td className="py-2">{order.name}</td>
                                                <td className="py-2">
                                                    ${order.price.toFixed(1)}
                                                </td>

                                                <td className="text-center py-2">
                                                    <button onClick={() => handleDelete(order?._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                                        <MdDeleteForever />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                            }

                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyCarts;