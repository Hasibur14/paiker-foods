import React from 'react';
import { FaLeaf, FaTractor, FaFlask, FaLightbulb, FaTint } from 'react-icons/fa';
import bg from '../../../assets/About/FreshnessCommitment.png'
import Container from '../../../components/Container/Container';

const FreshnessCommitment = () => {
    const features = [
        { icon: <FaLeaf size={40} />, label: 'Minimal Chemicals Used' },
        { icon: <FaTractor size={40} />, label: 'Minimal Chemicals Used' },
        { icon: <FaFlask size={40} />, label: 'Minimal Chemicals Used' },
        { icon: <FaLightbulb size={40} />, label: 'Minimal Chemicals Used' },
        { icon: <FaTint size={40} />, label: 'Minimal Chemicals Used' },
    ];

    return (
        <div className="w-full text-center relative">
            <Container>
                <div className="py-16 bg-white">
                    <h2 className="font-shadows text-4xl md:text-6xl lg:text-7xl tracking-[5px] leading-10 text-center text-transparent bg-gradient-to-t from-primary-deep to-second-deep  bg-clip-text">
                        Committed to Freshness!
                    </h2>
                    <p className="text-gray-700 mb-12 text-sm md:text-lg mt-5">
                        We believe that to have good health, clean and healthy food sources are the key
                    </p>

                    {/* Icons */}
                    <div className="flex flex-wrap justify-center items-center gap-8 px-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 text-green-900"
                            >
                                <div className="border-2 border-green-900 rounded-full p-4">
                                    {feature.icon}
                                </div>
                                <p className="text-sm font-medium">{feature.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            {/* Background field image at the bottom */}
            <div className="">
                <img
                    src={bg}
                    alt="Field background"
                    className="w-full object-cover h-40"
                />
            </div>
        </div>
    );
};

export default FreshnessCommitment;
