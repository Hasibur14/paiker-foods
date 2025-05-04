import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeatureDepartment = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/feature.json')
            .then((res) => res.json())
            .then((json) => setData(json));
    }, []);

    if (!data) return <div className="text-center py-20">Loading...</div>;

    return (
        <div className="flex flex-col items-center justify-center px-[10%] py-12  mb-10 lg:flex-row lg:gap-12">
            {/* Left Image */}
            <div className="mb-8 lg:mb-0 transform rotate-[-10deg]">
                <img
                    src={data.images.left}
                    alt="Farmer 1"
                    className="rounded-xl shadow-lg max-w-xs md:max-w-sm h-[500px]" />
            </div>

            {/* Center Text */}
            <div className="text-center max-w-3xl text-[#01312C] text-md">
                <p className="text-yellow-500 font-medium mb-2">{data.tagline}</p>
                <h2 className="font-poppins text-3xl md:text-5xl font-extrabold text-[#01312C] mb-4 whitespace-pre-line">
                    {data.heading}
                </h2>
                <p className="font-shadows mb-4">{data.description1}</p>
                <p className="mb-6">{data.description2}</p>
                <Link to='/products'>
                    <button class="rounded relative inline-flex group items-center justify-center px-3 lg:px-8 py-2 lg:py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-second-light active:shadow-none shadow-lg bg-gradient-to-tr from-second-light to-second-light border-second-deep text-gray-900 font-semibold text-md">
                        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                        <span class="relative uppercase">Explore Our Products</span>
                    </button>
                </Link>
            </div>

            {/* Right Image */}
            <div className="mt-8 lg:mt-0 transform rotate-[10deg]">
                <img
                    src={data.images.right}
                    alt="Farmer 2"
                    className="rounded-xl shadow-lg max-w-xs md:max-w-sm h-[500px]" />
            </div>
        </div>
    );
};

export default FeatureDepartment;
