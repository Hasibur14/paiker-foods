import React from 'react';
import BestBuildBrands from '../../../components/BestBuildBrands/BestBuildBrands';



const buildBestData = {
    title: "Built the best agriculture market",
    description:
        "Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.",
    linkText: "DISCOVER MORE",
    imageUrl:
        "https://res.cloudinary.com/dh34eqbhu/image/upload/v1746350833/8af2784290ac9e0b2e90166ea6d007ee4b3dce95_iyds75.png",
};

const BuildBest = () => {
    const { title, description, linkText, imageUrl } = buildBestData;

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-3/5 bg-[#e0e5e3] z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-2/5 bg-white z-0"></div>

            <div className="relative z-10 py-20 px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <div className="bg-primary-light text-white p-8 lg:px-16 lg:py-20 lg:ml-[14%] rounded shadow-md space-y-8">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h2>
                        <p className="text-md mb-6">{description}</p>
                        <a href="#" className="underline font-semibold text-sm">
                            {linkText}
                        </a>
                    </div>

                    <div className="w-full flex flex-col space-y-5 lg:space-y-0">
                        <div className="flex justify-end">
                            <img
                                src={imageUrl}
                                alt="Vegetables Basket"
                                className="w-full max-w-sm mt-5"
                            />
                        </div>
                        <div>
                            <BestBuildBrands />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildBest;
