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

    if (isLoading) return

    return (
        <div className='bg-base-100 my-8 md:my-16'>
            <Container>
                <div className="lg:mt-48 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl lg:rounded-2xl px-5 lg:pl-[7%]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                
                        <div
                            className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-0"
                        >
                            {/* Text Content */}
                            <div
                                className='flex items-center w-full lg:w-1/2 py-6 lg:py-10'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="text-center lg:text-left">
                                    <img
                                        src={mdMessage.signature}
                                        alt="signature"
                                        className="w-32 md:w-40 mx-auto lg:mx-0 mb-4 bg-transparent"
                                    />
                                    <h3 className='text-lg md:text-xl font-bold text-white'>{mdMessage.honorific}</h3>
                                    <h2 className='text-second-light text-2xl md:text-4xl font-bold'>{mdMessage.name}</h2>
                                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-3 md:my-5 text-white">
                                        {mdMessage.designation}
                                    </h1>
                                    <p className="py-4 md:py-6 text-white text-sm md:text-base">
                                       {mdMessage.message}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div
                                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <img
                                    src={mdMessage.image}
                                    alt={mdMessage.name}
                                    className="h-[300px] md:h-[500px] lg:h-[700px] -mt-20 lg:-mt-40 rounded-lg lg:rounded-xl object-cover"
                                />
                            </div>
                        </div>
        
                </div>
            </Container>
        </div>
    );
};

export default MDMessage;
