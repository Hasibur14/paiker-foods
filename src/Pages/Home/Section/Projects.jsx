import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const [showAll, setShowAll] = useState(false);

  // Fetch data from the backend
  const { data: projectData = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axiosPublic.get("/projects");
      return res.data;
    },
  });

  const visibleProjects = showAll ? projectData : projectData.slice(0, 5);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h4 className='font-shadows text-primary-light text-xl'>Awesome Gallery</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Explore Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects?.map((item, index) => (
            <div
              key={item._id}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl h-[450px] ${index === 1 ? 'lg:col-span-2' : ''}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 w-4/5 transition-transform duration-500 bg-primary-base p-5 bg-opacity-40">
                  <h3 className="text-xl text-second-light mb-2">{item.title}</h3>
                  <p className="text-gray-200 font-shadows">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projectData?.length > 5 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-primary-light text-primary-light hover:bg-primary-light hover:text-white rounded-md transition-colors duration-300"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;