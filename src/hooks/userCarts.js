import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const userCarts = () => {
    const instance = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: carts = [], isLoading, error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const { data } = await instance.get(`/carts?email=${user?.email}`)
            return data;
        }
    })
    return { carts, isLoading, error, refetch }
};

export default userCarts;