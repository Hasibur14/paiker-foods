import React from 'react';
import icon from '../../../assets/contact/getTauch-1.png';
import Container from '../../../components/Container/Container';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';




const ProvidingProduct = () => {
    const axiosPublic = useAxiosPublic();

    const { data: providingProductData = [], isLoading } = useQuery({
        queryKey: ["ProvidingProduct"],
        queryFn: async () => {
            const res = await axiosPublic.get("/providing-product");
            return res.data[0];
        },
    });

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="py-8 md:py-12 lg:py-16">
            <Container>

                {/* Content section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 ">
                    <div className='lg:w-1/2'>
                        <img
                            src={icon}
                            alt='icon'
                            className="w-12 h-auto"
                        />

                        {/* Thank you message */}
                        <h2 className="mt-4 mb-6 text-sm font-semibold text-primary-light md:text-base">
                            {providingProductData.title}
                        </h2>
                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl ">
                            {providingProductData.heading}
                        </h2>

                    </div>

                    {/* Paragraphs - Right Column (50%) */}
                    <div className="space-y-4 text-gray-600 md:text-base lg:w-1/2 lg:text-justify">
                        {providingProductData.descriptions?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProvidingProduct;