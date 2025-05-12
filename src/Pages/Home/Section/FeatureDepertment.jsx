import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';

const FeatureDepartment = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/feature.json')
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    if (!data) return (
        <div className="text-center py-20">
            <div className="animate-pulse flex flex-col items-center space-y-4">
                <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-12 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
        </div>
    );

    return (
        <div className="py-8 md:py-12">
            <Container>
                <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8 xl:gap-12">
                    {/* Left Image */}
                    <div className="mb-6 lg:mb-0 transform md:rotate-[-10deg] hover:rotate-0 transition-all duration-300">
                        <img
                            src={data.images.left}
                            alt="Farmer 1"
                            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover lg:h-[400px] xl:h-[500px]" />
                    </div>

                    {/* Center Text */}
                    <div className="text-center px-4 sm:px-6 max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[#01312C]">
                        <p className="text-second-deep font-medium text-base sm:text-lg mb-2">{data.tagline}</p>
                        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#01312C] mb-4 whitespace-pre-line">
                            {data.heading}
                        </h2>
                        <p className="font-shadows mb-4 text-sm sm:text-base">{data.description1}</p>
                        <p className="mb-6 sm:mb-10 text-sm sm:text-base">{data.description2}</p>

                        <Button
                            to='/products'
                            text='Explore Our Products'
                            className="text-sm sm:text-base"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="mt-6 lg:mt-0 transform md:rotate-[10deg] hover:rotate-0 transition-all duration-300">
                        <img
                            src={data.images.right}
                            alt="Farmer 2"
                            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover lg:h-[400px] xl:h-[500px]" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FeatureDepartment;