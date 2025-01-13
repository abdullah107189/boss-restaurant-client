
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: paymentHistory = [], isLoading } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: (async () => {
            const { data } = await axiosSecure.get(`/payments-history/${user?.email}`)
            return data
        })
    })

    console.log(paymentHistory);
    return (
        <div>
            <SectionHeader title={'Payment History'} subTitle={'Payment history checkbox'}></SectionHeader>
            <h1>history length : {paymentHistory.length}</h1>
            <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex justify-between mb-4 font-serif">
                    <h2 className="md:text-lg font-semibold uppercase">TOTAL Payment: {paymentHistory.length}</h2>
                    <button className="bg-[#D1A054] text-white font-bold py-2 px-4 rounded">
                        PAY
                    </button>
                </div>

                <div className=" overflow-x-auto rounded-t-lg">
                    <table className="w-full table">
                        <thead className="bg-[#D1A054] text-white  ">
                            <tr className="4">
                                <th className=" md:py-6 py-4"></th>
                                <th className="py-2">EMAIL</th>
                                <th className="py-2">TRANSACTION ID</th>
                                <th className="py-2 ">TOTAL PRICE</th>
                                <th className="py-2 ">STATUS</th>
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
                                    {paymentHistory.map((item, index) => (
                                        <tr key={index} className="">
                                            <td className="py-2 font-bold">
                                                {index + 1}
                                            </td>
                                            <td className="py-2 ">{item?.email}</td>
                                            <td className="py-2">{item.transactionId}</td>
                                            <td className="py-2">$ {item.price}</td>
                                            <td className=" badge p-4 bg-blue-200/50 text-blue-400 font-bold pt-3 mt-1 ">{item.status}</td>

                                        </tr>
                                    ))}
                                </tbody>
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;