import { useState } from 'react';
import Container from '../../../components/Container/Container';
import { BiCheckCircle } from 'react-icons/bi';
import Button from '../../../components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const BestOrganic = () => {

    const [activeTab, setActiveTab] = useState(0);
    const axiosPublic = useAxiosPublic()


    // Fetch data using react-query
    const { data: foodCategories = [], isLoading } = useQuery({
        queryKey: ['food-category'],
        queryFn: async () => {
            const res = await axiosPublic.get("/food-category");
            return res.data;
        }
    });

    if (isLoading) return
    return (
        <div className="bg-gray-50 py-16 ">
            <Container>
                <div className="w-full lg:flex flex-col md:flex-row gap-14">
                    {/* Left side - Content */}
                    <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-16">
                        {foodCategories[activeTab].image && (
                            <img
                                src={foodCategories[activeTab].image}
                                alt={foodCategories[activeTab].title}
                                className="w-full md:w-[40%] h-auto object-cover hover:scale-105 transition-all duration-1000 hover:rounded"
                            />
                        )}
                        <div className="md:w-2/3 space-y-6">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800 mt-5">
                                {foodCategories[activeTab].title}
                            </h1>
                            <p className="text-gray-600 mb-6 text-justify">
                                {foodCategories[activeTab].description}
                            </p>

                            <ul className="space-y-2 pb-12">
                                {foodCategories[activeTab].features.map((feature, index) => (
                                    <li key={`${foodCategories[activeTab]._id}-${index}`} className="flex items-center gap-2">
                                        <span> <BiCheckCircle className="text-primary-light 1 text-xl" /></span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                to="/"
                                text="Discover More"
                                className="mt-10"
                            />
                        </div>
                    </div>

                    {/* Right side - foodCategories */}
                    <div className="lg:w-1/3 bg-white p-10 rounded shadow-2xl mt-5 lg:mt-0">
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {foodCategories?.map((tab, index) => (
                                <div
                                    key={tab._id}
                                    onMouseEnter={() => setActiveTab(index)}
                                    className={`p-3 w-full rounded cursor-pointer transition duration-300 ${activeTab === index ? 'bg-green-100 border-l-4 border-green-600' : 'bg-white hover:bg-gray-50'}`}
                                >
                                    <div className='flex gap-5 text-center items-center '>
                                        <img
                                            src={tab.icon}
                                            alt="icon" />
                                        <h2 className="font-shadows text-xl tracking-[3px] font-semibold text-gray-800">
                                            {tab.food}
                                        </h2>
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

export default BestOrganic;