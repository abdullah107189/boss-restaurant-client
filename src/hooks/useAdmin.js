import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    const instance = useAxiosSecure()
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const { data } = await instance.get(`/user/admin/${user?.email}`)
            return data?.admin
        }
    })
    return { isAdmin, isAdminLoading };
};

export default useAdmin;