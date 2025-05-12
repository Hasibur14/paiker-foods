import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import Container from "../../components/Container/Container";
import { FaArrowRight } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { TiStarHalf } from "react-icons/ti";
import Brands from "../../components/Brands/Brands";
import BuyProductModal from "../../components/Modal/BuyProductModal";


const Products = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [activeFilterTab, setActiveFilterTab] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const FilterProducts = [
        { id: 1, name: "Agricultural Products" },
        { id: 2, name: "Organic Products" },
        { id: 3, name: "Dariy Productions" },
        { id: 4, name: "Sweet Exotic fruits" },
        { id: 5, name: "Fresh Vegetables" },
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
            filterType: "agricultural products",
        },
        {
            id: 2,
            name: "Wheat",
            subtitle: "Agricultural",
            description:
                " A cereal grain used to produce flour for bread, pasta, and other foods; widely grown in temperate regions.",
            img: "https://i.postimg.cc/XvJ4858G/d438fac10a18636a26f8f3558201faa82d55cad5.jpg",
            type: "new products",
            filterType: "organic products",
        },
        {
            id: 3,
            name: "Corn (Maize)",
            subtitle: "Agricultural",
            description:
                "A versatile crop used for human consumption, animal feed, and biofuel production.",
            img: "https://i.postimg.cc/50Q1cMDf/f4366b42a556696e69292d13de12d3f94c2dfc44.jpg",
            type: "best seller",
            filterType: "dariy productions",
        },
        {
            id: 4,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A staple food crop grown in flooded fields, essential in the diets of billions worldwide, especially in Asia.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "best seller",
            filterType: "fresh vegetables",
        },
        {
            id: 5,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                " A cereal grain used to produce flour for bread, pasta, and other foods; widely grown in temperate regions.",
            img: "https://i.postimg.cc/XvJ4858G/d438fac10a18636a26f8f3558201faa82d55cad5.jpg",
            type: "best seller",
            filterType: "sweet exotic fruits",
        },
        {
            id: 6,
            name: "Rice",
            subtitle: "Agricultural",
            description:
                "A versatile crop used for human consumption, animal feed, and biofuel production.",
            img: "https://i.postimg.cc/x8Lz1LrF/5329ab7f912dddd66367575e3087a698a469bac8.jpg",
            type: "best seller",
            filterType: "organic products",
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

    const filteredProducts = ProductCard.filter((product) => {
        const matchesType =
            activeTab === "All" || product.type === activeTab.toLowerCase();
        const matchesFilter =
            activeFilterTab === "All" ||
            product.filterType === activeFilterTab.toLowerCase();
        return matchesType && matchesFilter;
    });

    const handleBuyClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSubmitOrder = (formData) => {
        // Here you would typically send the data to your backend
        console.log("Order submitted:", formData);
        alert(`Order submitted successfully for ${formData.quantity} ${formData.productName}`);
        handleCloseModal();
    };

    return (
        <div>
            <BannerTitle bannerImg={banner} subTitle="Products" title="Products" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Sidebar */}
                    <div className="col-span-1 bg-[#F8F8F8] shadow h-auto md:h-[50%] lg:h-[28%] md:pb-10">
                        <div className="col-span-1 bg-[#F8F8F8]">
                            <div className="flex flex-col gap-4 py-6">
                                <button
                                    onClick={() => setActiveFilterTab("All")}
                                    className={`flex items-center justify-between px-4 py-3 mx-5 font-outfit hover:bg-primary-light hover:text-white ${activeFilterTab === "All" ? "bg-primary-light text-white" : ""
                                        }`}
                                >
                                    <h3 className="text-base font-semibold">All Categories</h3>
                                    <FaArrowRight />
                                </button>
                                {FilterProducts.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveFilterTab(item.name.toLowerCase())}
                                        className={`flex items-center justify-between px-5 py-3 mx-5 font-outfit bg-base-100 hover:bg-primary-light hover:text-white ${activeFilterTab === item.name.toLowerCase()
                                                ? "bg-primary-light text-white"
                                                : ""
                                            }`}
                                    >
                                        <h3 className="text-base font-semibold">{item.name}</h3>
                                        <FaArrowRight />
                                    </button>
                                ))}
                            </div>
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
                                    className={`px-6 py-2 rounded border transition duration-300 flex-shrink-0 hover:text-primary-light ${activeTab === tab
                                            ? "bg-white text-primary-light border-b-2 border-primary-light shadow-lg mx-2"
                                            : "bg-white text-black mx-2"
                                        } transition duration-300 shadow-sm`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Product Cards */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((item) => (
                                <div key={item.id} className="w-full">
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
                                        <div className="bg-second-light hover:bg-second-deep mt-4 rounded py-2 text-center group ">
                                            <button
                                                onClick={() => handleBuyClick(item)}
                                                className="font-poppins group-hover:text-white w-full font-semibold group-transition-all group-duration-500" 
                                            >
                                                Contact to buy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <BuyProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitOrder}
                />
            )}

            {/* brand logos */}
            <Brands />
        </div>
    );
};

export default Products;