import React from 'react';
import img1 from '../../../assets/home/buildBest-1.png';
import img2 from '../../../assets/home/buildBest-2.png';
import img3 from '../../../assets/home/buildBest-3.png';

const BuildBest = () => {
    return (
        <div className="relative">
            {/* Top half background */}
            <div className="absolute top-0 left-0 w-full h-3/5 bg-[#e0e5e3] z-0"></div>

            {/* Bottom half background */}
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-white z-0"></div>

            {/* Content container */}
            <div className="relative z-10 py-20 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left Content Box */}
                    <div className="bg-primary-light text-white  p-8 lg:px-16 lg:py-20  lg:ml-[14%] rounded  shadow-md">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                            Built the best <br /> agriculture market
                        </h2>
                        <p className="text-sm mb-6">
                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.
                            Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you
                            instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.
                        </p>
                        <a href="#" className="underline font-semibold text-sm">
                            DISCOVER MORE
                        </a>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full flex flex-col space-y-5 lg:space-y-0 ">
                        <div className='flex justify-end'>
                            <img
                                src='https://res.cloudinary.com/dh34eqbhu/image/upload/v1746350833/8af2784290ac9e0b2e90166ea6d007ee4b3dce95_iyds75.png'
                                alt="Vegetables Basket"
                                className="w-full max-w-sm mt-5" />
                        </div>

                        {/* Logos under the image */}
                        <div className="flex gap-8 lg:gap-24 lg:ml-[10%]">
                            <img src={img1} alt="Farmers Logo" className="w-20" />
                            <img src={img2} alt="Farm Logo" className="w-20" />
                            <img src={img3} alt="Barn Logo" className="w-20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildBest;