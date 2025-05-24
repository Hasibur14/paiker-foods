import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProduct = () => {

    const axiosPublic = useAxiosPublic();

    const { data: productsData = [], isPending: loading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/products')
            return res.data
        }
    });

    return [productsData, loading];


};


export default useProduct;