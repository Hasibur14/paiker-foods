import React from 'react';
import Container from '../../../components/Container/Container';
import { AiFillProduct } from 'react-icons/ai';
import { FaHotTubPerson } from 'react-icons/fa6';
import CountUp from 'react-countup';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const Info = () => {
    const axiosPublic = useAxiosPublic()

    const { data: aboutInfoData = [], isLoading } = useQuery({
        queryKey: ["aboutUs"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-info");
            return res.data[0];
        },
    });

    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Container>
                <div className='md:flex gap-16 justify-between w-full space-y-7 lg:space-y-0'>
                    <h2 className='text-xl md:text-2xl w-full lg:w-1/2'>
                        {aboutInfoData.description}
                    </h2>
                    <div className='flex justify-between md:w-1/2 gap-4'>
                        {aboutInfoData.stats?.map((stat, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                {index % 2 === 0 ? (
                                    <AiFillProduct className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />
                                ) : (
                                    <FaHotTubPerson className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />
                                )}
                                <div>
                                    <h4 className="font-semibold">{stat.title}</h4>
                                    <h2 className='text-2xl lg:text-5xl font-bold'>
                                        <span className='bg-gradient-to-t from-second-light to-second-deep text-transparent bg-clip-text'>
                                            <CountUp start={0} end={stat.count} duration={3} delay={0.5} /> +
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='border-b-2 border-dashed my-20'></div>
            </Container>
        </div>
    );
};

export default Info;