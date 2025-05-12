import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { BiCheckCircle } from 'react-icons/bi';
import Button from '../../../components/Button/Button';

const BestOrganic = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            _id: "1",
            title: "Blueberry",
            icon: 'https://i.postimg.cc/T1Ryd6KD/17-png.png',
            image: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
            content: {
                heading: "Best Organic Agriculture Firms",
                description: "Give lady of they such they sure it. Me contained explained my education. Volgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.",
                features: [
                    "Best Quality Standards",
                    "Natural Healthy Products"
                ]
            }
        },
        {
            _id: "2",
            title: "Strawberry",
            icon: 'https://i.postimg.cc/vT34DNnS/18-1-png.png',
            image: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
            content: {
                heading: "Premium Strawberry Farms",
                description: "Strawberries are grown with care using organic methods. Our farms ensure the highest quality berries with natural sweetness and perfect texture. We follow strict organic protocols to deliver the best to your table.",
                features: [
                    "No Pesticides Used",
                    "Rich in Antioxidants"
                ]
            }
        },
        {
            _id: "3",
            title: "Maize",
            icon: 'https://i.postimg.cc/Y9NGB9C7/19-png.png',
            image: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
            content: {
                heading: "Organic Maize Producers",
                description: "Our maize is cultivated using traditional organic farming techniques. We preserve the natural nutrients and flavor while maintaining sustainable farming practices that protect the environment.",
                features: [
                    "Non-GMO Seeds",
                    "High Nutritional Value"
                ]
            }
        },
        {
            _id: "4",
            title: "Apples",
            icon: 'https://i.postimg.cc/TwvLsmGQ/20-png.png',
            image: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
            content: {
                heading: "Organic Apple Orchards",
                description: "Crisp, juicy apples grown without synthetic chemicals. Our orchards are maintained with natural fertilizers and pest control methods, resulting in healthy, flavorful fruits.",
                features: [
                    "Hand-picked Selection",
                    "Eco-friendly Packaging"
                ]
            }
        }
    ];

    return (
        <div className="bg-gray-50 py-16 ">
            <Container>
                <div className="w-full lg:flex flex-col md:flex-row gap-14">
                    {/* Left side - Content */}
                    <div className="md:w-2/3 flex flex-col md:flex-row gap-16">
                        {tabs[activeTab].image && (
                            <img
                                src={tabs[activeTab].image}
                                alt={tabs[activeTab].title}
                                className="w-full md:w-[40%] h-auto object-cover "
                            />
                        )}
                        <div className="md:w-2/3 space-y-6">
                            <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800 mt-5">
                                {tabs[activeTab].content.heading}
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {tabs[activeTab].content.description}
                            </p>

                            <ul className="space-y-2 pb-12">
                                {tabs[activeTab].content.features.map((feature, index) => (
                                    <li key={`${tabs[activeTab]._id}-${index}`} className="flex items-center gap-2">
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

                    {/* Right side - Tabs */}
                    <div className="md:w-1/3 bg-white p-10 rounded shadow-2xl mt-5 lg:mt-0">
                        <div className="grid grid-cols-1 gap-4 w-full">
                            {tabs?.map((tab, index) => (
                                <div
                                    key={tab._id}
                                    onMouseEnter={() => setActiveTab(index)}
                                    className={`p-3 w-full rounded cursor-pointer transition duration-300 ${activeTab === index ? 'bg-green-100 border-l-4 border-green-600' : 'bg-white hover:bg-gray-50'}`}
                                >
                                    <div className='flex gap-5 text-center items-center '>
                                        <img src={tab.icon} alt="icon" />
                                        <h2 className="font-shadows text-xl tracking-[3px] font-semibold text-gray-800">
                                            {tab.title}
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