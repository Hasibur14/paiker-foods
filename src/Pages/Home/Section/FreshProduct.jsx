import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';

const FreshProduct = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('/freshProduct.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className="relative pt-16 pb-24">
            {/* Top half background */}
            <div className="absolute top-0 left-0 w-full h-4/6 bg-[#E9F1EE] -z-10"></div>

            {/* Bottom half background */}
            <div className="absolute bottom-0 left-0 w-full h-2/6 bg-white -z-10"></div>

            <Container>
                <div className="space-y-4 mb-16 relative z-10">
                    <h2 className="font-shadows text-4xl md:text-7xl tracking-[5px] leading-10 text-center font-semibold">
                        <span className='text-transparent bg-gradient-to-tl from-primary-deep via-second-deep to-primary-light bg-clip-text'>  Healthy Life With</span>
                        <br />
                        <span className='text-transparent bg-gradient-to-t from-primary-deep via-primary-base to-second-light bg-clip-text'>Fresh Products</span>
                    </h2>
                </div>

                {foods?.length > 0 && (
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1580: { slidesPerView: 4 },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}>
                        {foods?.map((item) => (
                            <SwiperSlide
                                key={item._id}
                                className="flex justify-center h-80 pb-10">
                                <div className="relative group overflow-visible">
                                    <img
                                        className="object-center w-full h-72 object-cover rounded-xl lg:h-96 hover:scale-105 transition-all duration-500 cursor-pointer"
                                        src={item.image}
                                        alt={item.title}
                                    />

                                    <div className='absolute -bottom-6 left-5 z-10 p-3 bg-primary-light  shadow-xl rounded-lg text-center '>
                                        <img
                                            src={item.icon}
                                            alt="icon"
                                            className='h-[68px] w-14 px-2 py-3' />
                                    </div>
                                    <div className="absolute -bottom-6 right-5 z-10 px-3 py-4 bg-white w-[60%] shadow-xl rounded-lg text-center ">
                                        <h1 className="font-shadows text-xl  text-gray-900 group-hover:text-sky-500 mb-2 uppercase transition-colors duration-500">
                                            {item.title}
                                        </h1>
                                        <Link
                                            to={`/product-details/${item._id}`}
                                            className='font-rubik text-second-deep hover:text-orange-400  underline'>
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </Container>
        </div>
    );
};

export default FreshProduct;