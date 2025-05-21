import React from 'react';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/About/MDmessage.png'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const MDMessage = () => {
    const axiosPublic = useAxiosPublic();

    const { data: mdMessage = [], isLoading } = useQuery({
        queryKey: ["mdMessage"],
        queryFn: async () => {
            const res = await axiosPublic.get("/md-message");
            return res.data[0];
        },
    });

    if (isLoading) return;

    return (
        <div className='bg-base-100 my-8 md:my-16 pb-20'>
            <h2 className="font-shadows text-4xl md:text-6xl lg:text-7xl tracking-[5px] leading-10 text-center text-transparent bg-gradient-to-t from-primary-deep to-second-deep  bg-clip-text">
                {mdMessage.title}
            </h2>
            <Container>
                <div className="mt-32 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl lg:rounded-2xl px-5 lg:pl-[7%] h-full lg:h-[450px]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>

                    <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-0">
                        {/* Text Content */}
                        <div
                            className='flex  w-full lg:w-1/2 py-2 '
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <div className="text-center lg:text-left space-y-4">
                                <img
                                    src={mdMessage.signature}
                                    alt="signature"
                                    className="w-32 md:w-40 mx-auto lg:mx-0 mb-4 bg-transparent"
                                />
                                <h3 className='text-lg md:text-xl font-bold text-white'>{mdMessage.honorific}</h3>
                                <h2 className='text-second-light text-2xl md:text-4xl font-bold'>{mdMessage.name}</h2>
                                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold  text-white">
                                    {mdMessage.designation}
                                </h1>
                                <p className=" text-white text-sm md:text-base">
                                    {mdMessage.message}
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="w-full lg:w-1/2 flex justify-center lg:justify-end h-[400px] md:h-[500px]  lg:h-[600px] z-50"
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <div className="relative bottom-16 w-[300px]  md:w-[350px] lg:w-[400px] h-[400px] md:h-[400px]  lg:h-[550px]">
                                <img
                                    src={mdMessage.image}
                                    alt={mdMessage.name}
                                    className="absolute w-full h-full object-cover rounded-lg lg:rounded-xl border border-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MDMessage;