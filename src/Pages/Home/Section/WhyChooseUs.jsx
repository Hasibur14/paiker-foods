import React from 'react';
import CountUp from 'react-countup';
import { BiCheckCircle } from 'react-icons/bi';

const WhyChooseUs = () => {

    const chooseUsData = {
        heading: 'Growing crops and raising livestock.',
        image: 'https://res.cloudinary.com/dh34eqbhu/image/upload/v1746264661/wnselevi9tahsnhhponq.jpg',
        stats: [
            {
                value: '38 K',
                label: 'Trusted Customers'
            },
            {
                value: '28 M',
                label: 'Growth Tonns of Harvest'
            }
        ],

        features: [
            {
                title: 'Always Fresh',
                description:
                    'Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her reprehenderit quaerat deleniti eaque similique id.'
            },
            {
                title: 'All organic',
                description:
                    'Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported.'
            },
            {
                title: 'Eco friendly',
                description:
                    'Montinued at up to zealously necessary breakfas is motionless she end literature. Gay direction neglected but supported yet her.'
            }
        ]
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white pb-4">
            {/* Left Side */}
            <div className="bg-gradient-to-tl from-[#3c8f51] to-primary-deep  text-white px-[7%] md:px-[12%] py-10  flex flex-col justify-center">
                {chooseUsData.features.map((item, index) => (
                    <div key={index} className="mb-6 flex items-start gap-3 ">
                        <span> <BiCheckCircle className="text-green-400 mt-1 text-2xl" /></span>
                        <div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm mt-1">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Side */}
            <div className="bg-white pt-[12%] ml-[12%] flex flex-col justify-center">
                <p className="font-shadows text-green-600 font-medium text-xl">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 max-w-md">
                    {chooseUsData.heading}
                </h2>

                <div className="md:flex justify-between">
                    <div className="items-center gap-12">
                        {chooseUsData.stats.map((stat, idx) => (
                            <div key={idx} className="items-center gap-4">
                                {idx > 0 && <div className="border-b-2 border-gray-600 h-5 w-32 mb-3"></div>}
                                <div>
                                    <h3 className="text-4xl font-bold text-second-deep">
                                        <CountUp start={0} end={parseFloat(stat.value)} duration={3} delay={0.5} />
                                        <span>{stat.value.replace(/[0-9.]/g, '')}</span>+
                                    </h3>
                                    <p className="text-gray-700 mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="mt-4 flex justify-end">
                        <img
                            src={chooseUsData.image}
                            alt="Tractor"
                            className="w-full max-w-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
