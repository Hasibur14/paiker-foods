import React from 'react';

const Gallery = () => {
    // Furniture items matching the exact layout of the screenshot
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
            {/* Main heading */}
            <div className="w-full text-center py-8">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">#FuniroFurniture</h1>
            </div>

            {/* Custom image grid layout to match the screenshot exactly */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-4">
                    {/* Left column - bookshelf */}
                    <div className="col-span-12 md:col-span-1 h-full">
                        <div className="h-full">
                            <img
                                src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                alt="Bookshelf with decorative items"
                                className="h-full w-full object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Middle large section */}
                    <div className="col-span-12 md:col-span-7 grid grid-cols-1 md:grid-cols-6 gap-4">
                        {/* Top row - workspace */}
                        <div className="col-span-1 md:col-span-6">
                            <img
                                 src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                alt="Modern workspace with laptop and vintage radio"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Bottom row - two small items */}
                        <div className="col-span-1 md:col-span-3">
                            <img
                                  src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                alt="Vintage armchair with leather upholstery"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <img
                                 src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                alt="Side tables with decorative items"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="col-span-12 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Top row - dining area */}
                        <div className="col-span-1 md:col-span-2">
                            <img
                                  src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                alt="Dining area with table and chairs"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        {/* Top right items */}
                        <div className="col-span-1 md:col-span-2 grid grid-cols-1 gap-4">
                            <div>
                                <img
                                     src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                    alt="Bedroom with upholstered headboard"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                    alt="Minimalist wall decor"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>

                        {/* Bottom row - kitchen area */}
                        <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-6 gap-4">
                            <div className="col-span-1 md:col-span-4">
                                <img
                                     src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                    alt="Rustic kitchen bar with wooden countertop"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <img
                                     src="https://i.postimg.cc/7hp6K3j4/67ed84fc5ba0a58e9455b45870dfc645146f4152.jpg"
                                    alt="Kitchen shelving with geometric pattern"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;