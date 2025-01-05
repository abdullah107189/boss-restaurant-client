import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
const AllUsers = () => {
    const instance = useAxiosSecure()
    const { data: allUser = [], isLoading, refetch } = useQuery({
        queryKey: ['allUsers',],
        queryFn: async () => {
            const { data } = await instance.get('/users')
            return data;
        }
    })

    // change role 
    const handleRoleChange = async (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Give the Admin Role!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Give Admin"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await instance.patch(`/user/admin/${user?._id}`)
                console.log(data);
                if (data) {
                    toast.success('Success Added Admin Role')
                }
                refetch()
            }
        });
    }

    // delete user
    const handleDelete = (user) => {
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
                instance.delete(`/users/${user?._id}`)
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
            <SectionHeader subTitle={"All User"} title={"Manage All User"}></SectionHeader>
            <div className="">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between mb-4 font-serif">
                        <h2 className="md:text-lg font-semibold uppercase">TOTAL Users: {allUser.length}</h2>
                        <button className="bg-[#D1A054] text-white font-bold py-2 px-4 rounded">
                            PAY
                        </button>
                    </div>

                    <div className=" overflow-x-auto rounded-t-lg">
                        <table className="w-full table">
                            <thead className="bg-[#D1A054] text-white  ">
                                <tr className="4">
                                    <th className=" md:py-6 py-4"></th>
                                    <th className="py-2">Name</th>
                                    <th className="py-2">EMAIL</th>
                                    <th className="py-2 ">ROLE</th>
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
                                        {allUser.map((user, index) => (
                                            <tr key={index} className="">
                                                <td className="py-2 font-bold">
                                                    {index + 1}
                                                </td>
                                                <td className="py-2 ">{user?.name}</td>
                                                <td className="py-2">{user.email}</td>
                                                <td className="py-2">
                                                    {user?.role === "admin" ?
                                                        'admin' :
                                                        <button onClick={() => handleRoleChange(user)} className="">
                                                            <FaUsers className="w-10 h-10 bg-[#D1A054] text-white p-1 rounded" />
                                                        </button>
                                                    }
                                                </td>

                                                <td className="text-center py-2">
                                                    <button onClick={() => handleDelete(user)} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded">
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

export default AllUsers;