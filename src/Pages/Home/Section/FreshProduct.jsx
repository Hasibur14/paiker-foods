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
        <div className="py-6 md:py-12 pb-20 px-[5%] md:px-[3%] bg-base-300">
            <div className="space-y-4 mb-16">
                <h2 className="font-shadows text-4xl md:text-7xl tracking-[5px] text-center bg-gradient-to-t from-primary-deep to-second-deep bg-clip-text text-clip bg-transparent">
                    Healthy life with
                    fresh products
                </h2>
            </div>
            {/* Card Slider */}
            <Container>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}>
                    {foods?.map((item) => (
                        <SwiperSlide
                            key={item._id}
                            className="flex justify-center h-80">
                            <div className="relative  group">
                                <img
                                    className="object-center w-full h-72 rounded-xl lg:h-96 hover:scale-110 transition-all duration-500 cursor-pointer"
                                    src={item.image}
                                    alt={item.title}
                                />
                                {/* overly content */}
                                <div className='absolute bottom-0 left-10 p-3 bg-primary-light shadow-2xl rounded-lg text-center'>
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className='h-16 px-2 py-3' />
                                </div>
                                <div className="absolute -bottom-4 right-10  z-10 p-3 bg-white w-1/2 shadow-2xl rounded-lg text-center border">
                                    <h1 className="font-shadows text-xl pt-3 text-gray-700 group-hover:text-sky-500 mb-2 uppercase transition-colors duration-500">{item.title}</h1>
                                    <Link
                                        to={item.pathname}
                                        className='font-rubik text-second-deep font-bold underline'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
};

export default FreshProduct;