import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { TiStarHalf } from "react-icons/ti";

const Products = () => {
    const [activeTab, setActiveTab] = useState("All");

    const FilterProducts = [
        { id: 1, name: "Agricultural Products" },
        { id: 2, name: "Organic Products" },
        { id: 3, name: "Dariy Productions" },
        { id: 4, name: "Sweet Exotic fruits" },
        { id: 5, name: "Fresh Vegetables" },
    ];

    const BrandLogo = [
        {
            id: 1,
            img: "https://i.postimg.cc/cHKPbM2j/07aa1b75e382ba71b602481c259741fdd994b301.png",
        },
        {
            id: 2,
            img: "https://i.postimg.cc/xjNcKwxG/23f2ed0fe203219a38d9106970973fc76e599db6.png",
        },
        {
            id: 3,
            img: "https://i.postimg.cc/jdVCvMmp/8618d875a393f56249f9170218fe9bace5a54474.png",
        },
        {
            id: 4,
            img: "https://i.postimg.cc/Dwn03825/3ca82a2f16c19eb318ce1892bbecf72dd8c83ae9.png",
        },
        {
            id: 5,
            img: "https://i.postimg.cc/Wz0NQPCQ/c404c11df2cac635e26e1979da7e1395831a97c8.png",
        },
        {
            id: 6,
            img: "https://i.postimg.cc/7YMP9wgz/ad5dee151ba1b146baa0006759ea9f0cd41bf231.png",
        },
    ];

    const ProductCard = [
        {
            id: 1,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A staple food crop grown in flooded fields, essential in the diets of billions worldwide, especially in Asia.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "best seller",
        },
        {
            id: 2,
            name: "Wheat",
            subtitle: "Agricultural",
            description:
                " A cereal grain used to produce flour for bread, pasta, and other foods; widely grown in temperate regions.",
            img: "https://i.postimg.cc/XvJ4858G/d438fac10a18636a26f8f3558201faa82d55cad5.jpg",
            type: "new products",
        },
        {
            id: 3,
            name: "Corn (Maize)",
            subtitle: "Agricultural",
            description:
                "A versatile crop used for human consumption, animal feed, and biofuel production.",
            img: "https://i.postimg.cc/50Q1cMDf/f4366b42a556696e69292d13de12d3f94c2dfc44.jpg",
            type: "best seller",
        },
        {
            id: 4,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A staple food crop grown in flooded fields, essential in the diets of billions worldwide, especially in Asia.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "",
        },
        {
            id: 5,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                " A cereal grain used to produce flour for bread, pasta, and other foods; widely grown in temperate regions.",
            img: "https://i.postimg.cc/XvJ4858G/d438fac10a18636a26f8f3558201faa82d55cad5.jpg",
            type: "best seller",
        },
        {
            id: 6,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A versatile crop used for human consumption, animal feed, and biofuel production.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "best seller",
        },
        {
            id: 7,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A staple food crop grown in flooded fields, essential in the diets of billions worldwide, especially in Asia.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "new products",
        },
        {
            id: 8,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                " A cereal grain used to produce flour for bread, pasta, and other foods; widely grown in temperate regions.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "new products",
        },
        {
            id: 9,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A versatile crop used for human consumption, animal feed, and biofuel production.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "new products",
        },
    ];

    const filteredProducts =
        activeTab === "All"
            ? ProductCard
            : ProductCard.filter(
                (product) => product.type === activeTab.toLowerCase()
            );

    return (
        <div>
            <BannerTitle bannerImg={banner} subTitle="Products" title="Products" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-[#F8F8F8] h-auto md:h-[50%] lg:h-[28%] md:pb-10">
                        <div className="flex flex-col gap-4 py-6 md:py-8 lg:my-10">
                            {FilterProducts.map((item) => (
                                <Link
                                    key={item.id}
                                    className="flex items-center justify-between px-4 py-3 mx-2 md:mx-4 hover:bg-primary-light hover:text-white transition-all duration-300"
                                >
                                    <h3 className="text-base md:text-lg font-semibold font-outfit">
                                        {item.name}
                                    </h3>
                                    <FaArrowRight className="text-sm md:text-base" />
                                </Link>
                            ))}
                        </div>

                        <div className="relative w-full h-[400px] flex items-center justify-center text-white lg:mt-[248%]">
                            <img
                                src="https://i.postimg.cc/FzXdfG4X/7111db1edda88be8d90b2c36f835e12dc6d871d3.jpg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

                            <div className="relative z-20 text-center px-4 max-w-md">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-outfit">
                                    Need Help?
                                </h2>
                                <p className="text-sm md:text-base mb-4 mt-8 font-outfit font-light">
                                    Speak with a human to Ning out a form? call corporate office
                                    and we will you With a team member help.
                                </p>
                                <p className="text-lg md:text-xl font-bold mb-1 font-outfit">
                                    +(012) 6679545
                                </p>
                                <p className="mb-4 font-outfit">info@paikerfoods.com</p>
                                <button className="bg-second-light hover:bg-second-deep text-black font-semibold py-2 px-6 rounded-full font-outfit">
                                    CONTACT US
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-3">
                        {/* Tabs */}
                        <div className="flex gap-2 mb-6 font-outfit font-bold bg-[#eaf4ed] py-2 ">
                            {["All", "Best Seller", "New Products"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded border transition duration-300 flex-shrink-0 ${activeTab === tab
                                            ? "bg-white text-primary-light border-b-2 border-primary-light shadow-lg mx-2"
                                            : "bg-white text-black mx-2"
                                        } transition duration-300 shadow-sm`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Product Cards */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredProducts.map((item) => (
                                <Link
                                    to={`/product-details/${item.id}`}
                                    key={item.id}
                                    className="w-full"
                                >
                                    <img
                                        className="rounded-t-lg w-full h-60 object-cover"
                                        src={item.img}
                                        alt={item.name}
                                    />
                                    <div className="bg-white rounded-xl shadow-md p-2">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex text-second-light">
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStar />
                                                <TiStarHalf />
                                            </div>
                                            <div className="bg-[#eaf4ed] rounded-full p-2">
                                                <IoShareSocialOutline className="text-primary-light" />
                                            </div>
                                        </div>
                                        <h2 className="font-outfit text-xl font-medium">
                                            {item.name}
                                        </h2>
                                        <p className="font-outfit text-sm mt-1 font-medium text-[#444444]">
                                            {item.subtitle}
                                        </p>
                                        <p className="font-outfit text-sm mt-3 font-light text-[#444444]">
                                            {item.description}
                                        </p>
                                        <div className="bg-second-light hover:bg-second-deep mt-4 rounded py-2 text-center">
                                            <button className="font-outfit text-white">
                                                Contact to buy
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            {/* brand logos */}

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full my-10">
                {BrandLogo.map((item) => (
                    <div key={item.id} className="flex items-center justify-center p-4">
                        <img
                            src={item.img}
                            alt="Brand Logo"
                            className="w-full max-w-[140px] h-16 object-contain opacity-70"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
