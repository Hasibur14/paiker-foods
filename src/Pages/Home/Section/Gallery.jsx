import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Nature Retreat',
      description: 'Serene landscapes that calm the mind and soothe the soul.',
    },
    {
      id: 2,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Urban Lights',
      description: 'The vibrant energy of city life after dark.',
    },
    {
      id: 3,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Modern Design',
      description: 'Clean lines and innovative architectural solutions.',
    },
    {
      id: 4,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Culinary Arts',
      description: 'Exquisite dishes that delight all senses.',
    },
    {
      id: 5,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Wanderlust',
      description: 'Discover the world through breathtaking destinations.',
    },
    {
      id: 6,
      imageUrl: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
      title: 'Wanderlust',
      description: 'Discover the world through breathtaking destinations.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-[10%]">
        <div className="text-center mb-12">
            <h4 className='font-shadows text-primary-light'>Awesome Gallery</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                index === 1 ? 'lg:row-span-2 lg:col-span-2' : ''
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-primary-deep p-5 bg-opacity-30">
                  <h3 className="text-xl text-second-light mb-2">{item.title}</h3>
                  <p className="text-gray-200 font-shadows">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View Full Gallery
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;