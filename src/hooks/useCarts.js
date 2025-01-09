import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { data: carts = [], isLoading, error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/carts?email=${user?.email}`)
            return data;
        }, enabled: !!user?.email

    })
    return { carts, isLoading, error, refetch }
};

export default useCarts;