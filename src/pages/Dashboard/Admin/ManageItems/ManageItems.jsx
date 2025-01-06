// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Swal from "sweetalert2";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../../hooks/useMenu";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const ManageItems = () => {
    const { menu, isLoading, refetch } = useMenu()
    const instance = useAxiosSecure()

    const handleDelete = (item) => {
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
                instance.delete(`/menu/${item?._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                position: 'top-right',
                                showConfirmButton: false,
                                timer: 1500,
                                title: "Deleted!",
                                text: `${item?.name} has been deleted.`,
                                icon: "success"
                            })
                        }
                    });
            }
        });
    }
    return (
        <div className="">
            <SectionHeader subTitle={"All User"} title={"Manage All User"}></SectionHeader>
            <div className="">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between mb-4 font-serif">
                        <h2 className="md:text-lg font-semibold uppercase">TOTAL Users: {menu.length}</h2>
                        <button className="bg-[#D1A054] text-white font-bold py-2 px-4 rounded">
                            PAY
                        </button>
                    </div>

                    <div className=" overflow-x-auto rounded-t-lg">
                        <table className="w-full table">
                            <thead className="bg-[#D1A054] text-white  ">
                                <tr className="4">
                                    <th className=" md:py-6 py-4"></th>
                                    <th className="py-2">ITEM IMAGE</th>
                                    <th className="py-2">ITEM NAME</th>
                                    <th className="py-2 ">PRICE</th>
                                    <th className="py-2 ">UPDATE</th>
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
                                        {menu.map((item, index) => (
                                            <tr key={index} className="">
                                                <td className="py-2 font-bold">
                                                    {index + 1}
                                                </td>
                                                <td className="py-2 ">
                                                    <td className="py-2 flex justify-center">
                                                        <img className="w-20 h-14 rounded-md object-contain" src={item?.image} alt={item?.image} ></img>
                                                    </td>
                                                </td>
                                                <td className="py-2">{item?.name}</td>

                                                <td className="py-2">
                                                    {item?.price}
                                                </td>

                                                <td className="text-center py-2">
                                                    <Link to={`/dashboard/updateItem/${item?._id}`} className="bg-[#D1A054] text-white font-bold rounded">
                                                        <HiOutlinePencilSquare className="w-10 h-10 bg-[#D1A054] text-white p-1 rounded-lg" />
                                                    </Link>
                                                </td>
                                                <td className="text-center py-2">
                                                    <button onClick={() => handleDelete(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded">
                                                        <MdDeleteForever className="w-10 h-10 text-white p-1 rounded-lg" />
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

export default ManageItems;