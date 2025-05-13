import React from 'react';

const Gallery = () => {
    // Furniture items with different placeholder images
    const furnitureItems = [
        {
            id: 1,
            size: 'tall',
            imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=1200&auto=format&fit=crop',
            alt: 'Bookshelf with decorative items'
        },
        {
            id: 2,
            size: 'large',
            imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=900&auto=format&fit=crop',
            alt: 'Modern workspace with laptop and vintage radio'
        },
        {
            id: 3,
            size: 'medium',
            imageUrl: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&auto=format&fit=crop',
            alt: 'Dining area with table and chairs'
        },
        {
            id: 4,
            size: 'medium',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Bedroom with upholstered headboard'
        },
        {
            id: 5,
            size: 'large',
            imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&auto=format&fit=crop',
            alt: 'Rustic kitchen bar with wooden countertop'
        },
        {
            id: 6,
            size: 'small',
            imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=750&auto=format&fit=crop',
            alt: 'Vintage armchair with leather upholstery'
        },
        {
            id: 7,
            size: 'small',
            imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=750&auto=format&fit=crop',
            alt: 'Side tables with decorative items'
        },
        {
            id: 8,
            size: 'small',
            imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=500&auto=format&fit=crop',
            alt: 'Minimalist wall decor'
        },
        {
            id: 9,
            size: 'small',
            imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=500&auto=format&fit=crop',
            alt: 'Kitchen shelving with geometric pattern'
        },
        {
            id: 10,
            size: 'medium',
            imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&auto=format&fit=crop',
            alt: 'Living room with modern furniture'
        },
        {
            id: 11,
            size: 'small',
            imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&h=500&auto=format&fit=crop',
            alt: 'Coffee table with books'
        }
    ];

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
                        <div className="aspect-w-1 aspect-h-2 h-full overflow-hidden rounded-md">
                            <img
                                src={furnitureItems[0].imageUrl}
                                alt={furnitureItems[0].alt}
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
                                    src={furnitureItems[1].imageUrl}
                                    alt={furnitureItems[1].alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Two small items (id:6 and id:7) */}
                        <div className="md:col-span-3 group">
                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-md">
                                <img
                                    src={furnitureItems[5].imageUrl}
                                    alt={furnitureItems[5].alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3 group">
                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-md">
                                <img
                                    src={furnitureItems[6].imageUrl}
                                    alt={furnitureItems[6].alt}
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
                                    src={furnitureItems[2].imageUrl}
                                    alt={furnitureItems[2].alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Bedroom + Wall decor (id:4 & id:8) */}
                        <div className="md:col-span-2 grid grid-cols-1 gap-4">
                            <div className="group">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[3].imageUrl}
                                        alt={furnitureItems[3].alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[7].imageUrl}
                                        alt={furnitureItems[7].alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Kitchen bar + Shelf (id:5 & id:9) */}
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-6 gap-4">
                            <div className="md:col-span-4 group">
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[4].imageUrl}
                                        alt={furnitureItems[4].alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[8].imageUrl}
                                        alt={furnitureItems[8].alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional row to fill empty space (id:10 & id:11) */}
                        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[9].imageUrl}
                                        alt={furnitureItems[9].alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 group">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                                    <img
                                        src={furnitureItems[10].imageUrl}
                                        alt={furnitureItems[10].alt}
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