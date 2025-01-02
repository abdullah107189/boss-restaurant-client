import { MdDeleteForever } from "react-icons/md";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import userCarts from "../../../hooks/userCarts";

const MyCarts = () => {
    const { carts } = userCarts()
    const totalPrice = carts.reduce((total, order) => total + order.price, 0).toFixed(2);

    return (

        <div className="">
            <SectionHeader subTitle={"My Cart"} title={"Wanna add more"}></SectionHeader>
            <div className="">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between mb-4">
                        <h2 className="md:text-lg font-semibold">TOTAL ORDERS: {carts.length}</h2>
                        <h2 className="md:text-lg font-semibold">TOTAL PRICE: ${totalPrice}</h2>
                        <button className="bg-[#D1A054] text-white font-bold py-2 px-4 rounded">
                            PAY
                        </button>
                    </div>

                    <div className=" overflow-x-auto">
                        <table className="w-full table ">
                            <thead className="bg-[#D1A054] text-white">
                                <tr>
                                    <th className=" py-2"></th>
                                    <th className="text-center py-2">ITEM IMAGE</th>
                                    <th className=" py-2">ITEM NAME</th>
                                    <th className=" py-2 ">PRICE</th>
                                    <th className="text-center py-2">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carts.map((order, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-2j font-bold">
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
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                                                <MdDeleteForever />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCarts;