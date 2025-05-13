import React, { useState } from 'react';
import { FaShare, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from '../../../components/Button/Button';

const OurTeam = () => {

    const [hoveredCard, setHoveredCard] = useState(null);

    const farmers = [
        {
            _id: 1,
            name: 'Kevin Martin',
            image: 'https://i.postimg.cc/mZdtPfYy/IMG-20240714-031040-049-removebg-preview-1-3.png',
            specialty: 'Farmer of cherry'
        },
        {
            _id: 2,
            name: 'Sarah Albert',
            image: 'https://i.postimg.cc/kX6fJvPs/file.png',
            specialty: 'Farmer of potato'
        },
        {
            _id: 3,
            name: 'John Doe',
            image: 'https://i.postimg.cc/sf0TC0q1/IMG-20240714-031040-049-removebg-preview-1-1.png',
            specialty: 'Farmer of wheat'
        },
        {
            _id: 4,
            name: 'Jane Smith',
            image: 'https://i.postimg.cc/yYphZgsd/1af2086220affecd5f498aeca93f64918a91bf86.jpg',
            specialty: 'Farmer of corn'
        },
    ];

    const handleShareHover = (id) => {
        setHoveredCard(id);
    };

    const handleShareLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="py-12 lg:py-16 bg-base-100">
            <Container>
                <div className='flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12'>
                    {/* Left Content - Adjusted width for better responsiveness */}
                    <div className='w-full lg:w-[40%] xl:w-[35%] space-y-5'>
                        <h4 className='font-shadows text-xl text-primary-light'>Our Team</h4>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Meet our professional Team Members</h2>
                        <p className='text-gray-600 pb-7'>Our dedicated team of agricultural experts brings years of experience to ensure the best quality products.</p>
                        <Button
                            text='Meet All Team Members'
                        />
                    </div>

                    {/* Right Slider - Adjusted width and breakpoints */}
                    <div className='w-full lg:w-[60%] xl:w-[65%]'>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 25
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1280: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30
                                },
                                1536: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation
                            pagination={{ clickable: true }}
                            className="team-swiper"
                        >
                            {farmers.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <div
                                        className="relative group h-full"
                                        onMouseEnter={() => handleShareHover(item._id)}
                                        onMouseLeave={handleShareLeave}
                                    >
                                        <div className="overflow-hidden shadow-lg h-full">
                                            <img
                                                className="w-full h-96 lg:h-[350px] xl:h-[370px] transition-transform duration-500 group-hover:scale-105 object-cover"
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                        {/* Card Info */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 text-center transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                                            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                            <p className="text-primary-deep">{item.specialty}</p>
                                        </div>

                                        {/* Social Icons (appear on hover) */}
                                        {hoveredCard === item._id && (
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300">
                                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-light text-second-deep hover:text-white">
                                                    <FaFacebook size={16} />
                                                </button>
                                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-light text-second-deep hover:text-white">
                                                    <FaTwitter size={16} />
                                                </button>
                                                <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-light text-second-deep hover:text-white">
                                                    <FaLinkedin size={16} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                .team-swiper {
                    padding-bottom: 40px;
                }
                .team-swiper .swiper-pagination-bullet {
                    background: #ccc;
                    opacity: 2;
                }
                .team-swiper .swiper-pagination-bullet-active {
                    background: #05B689;
                }
                .team-swiper .swiper-button-next,
                .team-swiper .swiper-button-prev {
                    color: #05B689;
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .team-swiper .swiper-button-next::after,
                .team-swiper .swiper-button-prev::after {
                    font-size: 18px;
                }
            `}</style>
        </div>
    );
};

export default OurTeam;