import React from 'react';

const Gallery = () => {
    // Furniture items
    const furnitureItems = [
        {
            id: 1,
            size: 'tall',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Bookshelf with decorative items'
        },
        {
            id: 2,
            size: 'large',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Modern workspace with laptop and vintage radio'
        },
        {
            id: 3,
            size: 'medium',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
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
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Rustic kitchen bar with wooden countertop'
        },
        {
            id: 6,
            size: 'small',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Vintage armchair with leather upholstery'
        },
        {
            id: 7,
            size: 'small',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Side tables with decorative items'
        },
        {
            id: 8,
            size: 'small',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Minimalist wall decor'
        },
        {
            id: 9,
            size: 'small',
            imageUrl: 'https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg',
            alt: 'Kitchen shelving with geometric pattern'
        }
    ];

    return (
        <div className="w-full bg-white">
            {/* Heading */}
            <div className="w-full text-center py-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">#FuniroFurniture</h1>
            </div>

            {/* Grid layout */}
            <div className=" px-4">
                <div className="grid grid-cols-12 gap-4">
                    {/* Left - tall image (id:1) */}
                    <div className="col-span-12 md:col-span-1 h-full">
                        <img
                            src={furnitureItems[0].imageUrl}
                            alt={furnitureItems[0].alt}
                            className="h-full w-full object-cover rounded-md"
                        />
                    </div>

                    {/* Middle section */}
                    <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-6 gap-4">
                        {/* Large workspace (id:2) */}
                        <div className="col-span-1 md:col-span-6">
                            <img
                                src={furnitureItems[1].imageUrl}
                                alt={furnitureItems[1].alt}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        {/* Two small items (id:6 and id:7) */}
                        <div className="col-span-1 md:col-span-3">
                            <img
                                src={furnitureItems[5].imageUrl}
                                alt={furnitureItems[5].alt}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <img
                                src={furnitureItems[6].imageUrl}
                                alt={furnitureItems[6].alt}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="col-span-12 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Dining area (id:3) */}
                        <div className="col-span-1 md:col-span-2">
                            <img
                                src={furnitureItems[2].imageUrl}
                                alt={furnitureItems[2].alt}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Bedroom + Wall decor (id:4 & id:8) */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-4">
                            <div>
                                <img
                                    src={furnitureItems[3].imageUrl}
                                    alt={furnitureItems[3].alt}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <img
                                    src={furnitureItems[7].imageUrl}
                                    alt={furnitureItems[7].alt}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>

                        {/* Kitchen bar + Shelf (id:5 & id:9) */}
                        <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-6 gap-4">
                            <div className="col-span-1 md:col-span-4">
                                <img
                                    src={furnitureItems[4].imageUrl}
                                    alt={furnitureItems[4].alt}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <img
                                    src={furnitureItems[8].imageUrl}
                                    alt={furnitureItems[8].alt}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
