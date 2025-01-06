import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const axiosPublic = useAxiosPublic()
    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/menus')
            return data
        }
    })
    return { menu, isLoading, refetch }
};

export default useMenu;