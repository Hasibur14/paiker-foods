import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Gallery = () => {
    const axiosPublic = useAxiosPublic();

    const { data: galleryData = [], isLoading, isError } = useQuery({
        queryKey: ['gallery'],
        queryFn: async () => {
            const res = await axiosPublic.get('/gallery');
            return res.data;
        },
    });

    if (isLoading) return <div className="w-full h-screen flex items-center justify-center">Loading gallery...</div>;
    if (isError) return <div className="w-full h-screen flex items-center justify-center">Error loading gallery</div>;
    if (galleryData.length === 0) return <div className="w-full h-screen flex items-center justify-center">No gallery images found</div>;

    // Safe access to gallery data with fallbacks
    const getImage = (index, fallback = 'https://via.placeholder.com/300x300?text=Image+Coming+Soon') => {
        return galleryData[index] || { imageUrl: fallback, alt: 'Placeholder image' };
    };

    return (
        <div className="w-full bg-white pb-16">
            <div className="w-full text-center py-8">
                <h4 className='text-xl font-shadows text-primary-light'>Discover the Art Behind Every Frame</h4>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our Gallery</h1>
            </div>

            {/* Grid layout */}
            <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left - tall image (id:1) */}
                    <div className="md:col-span-2 h-full group">
                        <div className="h-full overflow-hidden rounded-md">
                            <img
                                src={getImage(0).imageUrl}
                                alt={getImage(0).alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Middle section - enlarged */}
                    <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-6 gap-4">
                        {/* Large workspace (id:2) - now bigger */}
                        <div className="md:col-span-6 group">
                            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
                                <img
                                    src={getImage(1).imageUrl}
                                    alt={getImage(1).alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Two small items (id:6 and _id:7) */}
                        <div className="md:col-span-3 group">
                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-md">
                                <img
                                    src={getImage(5).imageUrl}
                                    alt={getImage(5).alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3 group">
                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-md">
                                <img
                                    src={getImage(6).imageUrl}
                                    alt={getImage(6).alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right section - now fully populated */}
                    <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Dining area (id:3) */}
                        <div className="md:col-span-2 group">
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                                <img
                                    src={getImage(2).imageUrl}
                                    alt={getImage(2).alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Bedroom + Wall decor (id:4 & _id:8) */}
                        <div className="md:col-span-2 grid grid-cols-1 gap-4">
                            <div className="group">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(3).imageUrl}
                                        alt={getImage(3).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(7).imageUrl}
                                        alt={getImage(7).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Kitchen bar + Shelf (id:5 & _id:9) */}
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-6 gap-4">
                            <div className="md:col-span-4 group">
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(4).imageUrl}
                                        alt={getImage(4).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(8).imageUrl}
                                        alt={getImage(8).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional row to fill empty space (id:10 & _id:11) */}
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(9).imageUrl}
                                        alt={getImage(9).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={getImage(10).imageUrl}
                                        alt={getImage(10).alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;