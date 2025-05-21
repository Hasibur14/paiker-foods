import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from '../../../components/Button/Button';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const OurTeam = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const axiosPublic = useAxiosPublic();

    const { data: teamData = [], isLoading } = useQuery({
        queryKey: ["ourTeam"],
        queryFn: async () => {
            const res = await axiosPublic.get("/our-teams");
            return res.data;
        },
    });

    const handleShareHover = (id) => {
        setHoveredCard(id);
    };

    const handleShareLeave = () => {
        setHoveredCard(null);
    };

    if (isLoading) return <div>Loading...</div>;

    const SocialMediaButtons = ({ member }) => {
        // Clean WhatsApp number by removing all non-digit characters
        const cleanWhatsapp = member.whatsapp ? member.whatsapp.replace(/\D/g, '') : null;

        return (
            <div className="absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300">
                {/* Facebook */}
                {member.facebook && (
                    <a
                        href={member.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share ${member.name} on Facebook`}
                        className="p-2 bg-white rounded-full shadow-xl hover:bg-[#3b5998] text-second-deep hover:text-white transition-colors duration-200"
                    >
                        <FaFacebook size={16} />
                    </a>
                )}

                {/* LinkedIn */}
                {member.linkedIn && (
                    <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                        className="p-2 bg-white rounded-full  shadow-xl hover:bg-[#0077B5] text-second-deep hover:text-white transition-colors duration-200"
                    >
                        <FaLinkedin size={16} />
                    </a>
                )}

                {/* WhatsApp */}
                {cleanWhatsapp && (
                    <a
                        href={`https://wa.me/${cleanWhatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat with ${member.name} on WhatsApp`}
                        className="p-2 bg-white rounded-full  shadow-xl hover:bg-[#25D366] text-second-deep hover:text-white transition-colors duration-200"
                    >
                        <FaWhatsapp size={16} />
                    </a>
                )}
            </div>
        );
    };

    return (
        <div className="py-12 lg:py-16 bg-base-100">
            <Container>
                <div className='flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-12'>
                    {/* Left Content */}
                    <div className='w-full lg:w-[40%] xl:w-[35%] space-y-5'>
                        <h4 className='font-shadows text-xl text-primary-light'>Our Team</h4>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Meet our professional Team Members</h2>
                        <p className='text-gray-600 pb-7'>Our dedicated team of agricultural experts brings years of experience to ensure the best quality products.</p>
                        <Button text='Meet All Team Members' />
                    </div>

                    {/* Right Slider */}
                    <div className='w-full lg:w-[60%] xl:w-[65%]'>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 25 },
                                1024: { slidesPerView: 2, spaceBetween: 30 },
                                1280: { slidesPerView: 2.5, spaceBetween: 30 },
                                1536: { slidesPerView: 3, spaceBetween: 30 },
                            }}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation
                            pagination={{ clickable: true }}
                            className="team-swiper"
                        >
                            {teamData?.map((member) => (
                                <SwiperSlide key={member._id}>
                                    <div
                                        className="relative group h-full"
                                        onMouseEnter={() => handleShareHover(member._id)}
                                        onMouseLeave={handleShareLeave}
                                    >
                                        <div className="overflow-hidden shadow-lg h-full bg-gray-50">
                                            <img
                                                className="w-full h-96 lg:h-[350px] xl:h-[370px] transition-transform duration-500 group-hover:scale-105 object-cover"
                                                src={member.image}
                                                alt={member.name}
                                            />
                                        </div>

                                        {/* Card Info */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 text-center transform translate-y-0 group-hover:-translate-y-2 transition-all duration-300">
                                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                            <p className="text-primary-deep">{member.designation}</p>
                                            <p className="text-sm text-gray-600">{member.specialty}</p>
                                        </div>

                                        {/* Social Icons (appear on hover) */}
                                        {hoveredCard === member._id && (
                                            <SocialMediaButtons member={member} />
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