import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProductCategory = () => {

    const axiosPublic = useAxiosPublic();

    const { data: productCategory = [], isPending: loading } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await axiosPublic.get('/fresh-products')
            return res.data
        }
    })

    return [productCategory, loading]
};

export default useProductCategory;