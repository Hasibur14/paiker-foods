import React, { useState } from 'react';
import { FaShare, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const OurTeam = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const farmers = [
        { id: 1, name: 'Kevin Martin', specialty: 'Farmer of cherry' },
        { id: 2, name: 'Sarah Albert', specialty: 'Farmer of potato' },
        // Add more farmers as needed
    ];

    const handleShareHover = (id) => {
        setHoveredCard(id);
    };

    const handleShareLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className="py-12 bg-base-100">
            <Container>
                <div className='flex justify-between w-full'>
                    <div className='w-1/3 space-y-5 items-center'>
                        <h4 className='font-shadows text-xl text-primary-light'>Our Team</h4>
                        <h2 className='text-5xl font-semibold '>Meet our professional Team Members</h2>
                        <button className='bg-primary-light hover:bg-primary-deep px-5 py-3 rounded text-white'>Meet All Team Member</button>
                    </div>
                    <div className='md:w-1/2 space-y-4 text-gray-600'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {farmers.map((farmer) => (
                                <div
                                    key={farmer.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative"
                                >
                                    {/* Placeholder for farmer image - replace with actual image */}
                                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-500">Farmer Image</span>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{farmer.name}</h3>
                                        <p className="text-green-600 mb-4">{farmer.specialty}</p>

                                        {/* Share button with hover effect */}
                                        <div
                                            className="relative inline-block"
                                            onMouseEnter={() => handleShareHover(farmer.id)}
                                            onMouseLeave={handleShareLeave}
                                        >
                                            <button className="flex items-center text-gray-500 hover:text-green-600 transition-colors">
                                                <FaShare className="mr-1" />
                                                <span>Share</span>
                                            </button>

                                            {/* Social icons that appear on hover */}
                                            {hoveredCard === farmer.id && (
                                                <div className="absolute bottom-full left-0 mb-2 flex space-x-2 bg-white p-2 rounded-md shadow-md">
                                                    <a href="#" className="text-blue-600 hover:text-blue-800">
                                                        <FaFacebook />
                                                    </a>
                                                    <a href="#" className="text-blue-400 hover:text-blue-600">
                                                        <FaTwitter />
                                                    </a>
                                                    <a href="#" className="text-pink-600 hover:text-pink-800">
                                                        <FaInstagram />
                                                    </a>
                                                    <a href="#" className="text-blue-700 hover:text-blue-900">
                                                        <FaLinkedin />
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default OurTeam;