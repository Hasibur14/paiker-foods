import React, { useState } from "react";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import Container from "../../components/Container/Container";
import { FaArrowRight } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoMdClose, IoMdStar } from "react-icons/io";
import { TiStarHalf } from "react-icons/ti";
import Brands from "../../components/Brands/Brands";
import BuyProductModal from "../../components/Modal/BuyProductModal";
import { CiMaximize2 } from "react-icons/ci";
import useProductCategory from "../../hooks/useProductCategory";
import useProduct from "../../hooks/useProduct";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Products = () => {
    const [activeTab, setActiveTab] = useState("All Products");
    const [activeFilterTab, setActiveFilterTab] = useState("All Products");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomedImg, setZoomedImg] = useState(null);
    const [productCategory] = useProductCategory();
    const [productsData, loading] = useProduct();

    // Filter products based on category filter tab
    const categoryFilteredProducts = activeFilterTab === "All Products"
        ? productsData
        : productsData.filter(product => product.category === activeFilterTab);

    // Further filter products based on the active tab (All Products, Best Seller, New Products)
    const filteredProducts = activeTab === "All Products"
        ? categoryFilteredProducts
        : categoryFilteredProducts.filter(product =>
            product.filterType?.toLowerCase().includes(activeTab.toLowerCase().split(' ')[0])
        );

    const handleBuyClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSubmitOrder = (formData) => {
        console.log("Order submitted:", formData);
        alert(`Order submitted successfully for ${formData.quantity} ${formData.productName}`);
        handleCloseModal();
    };

    if (loading) return <LoadingSpinner />

    return (
        <div className="overflow-x-hidden">
            <BannerTitle
                bannerImg={banner}
                subTitle="Products"
                title="Our Products" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 flex flex-col">
                        {/* Categories Section */}
                        <div className="flex flex-col gap-5 p-6 py-5 bg-stone-100 shadow-lg border rounded">
                            <button
                                onClick={() => setActiveFilterTab("All Products")}
                                className={`flex items-center justify-between px-4 py-3 rounded font-outfit transition-colors ${activeFilterTab === "All Products"
                                    ? "bg-primary-light text-white"
                                    : "bg-white hover:bg-primary-light hover:text-white"
                                    }`}
                            >
                                <h3 className="text-base font-semibold">All Categories</h3>
                                <FaArrowRight />
                            </button>
                            {productCategory?.map((item) => (
                                <button
                                    key={item._id}  // Changed from item.id to item._id
                                    onClick={() => setActiveFilterTab(item.category)}
                                    className={`flex items-center justify-between px-4 py-3 rounded font-outfit transition-colors ${activeFilterTab === item.category  // Changed from item.name to item.category
                                        ? "bg-primary-light text-white"
                                        : "bg-white hover:bg-primary-light hover:text-white"
                                        }`}
                                >
                                    <h3 className="text-base font-semibold">{item.category}</h3>
                                    <FaArrowRight />
                                </button>
                            ))}
                        </div>

                        {/* Contact Info - Sticky Bottom */}
                        <div className="sticky bottom-0 mt-auto pt-6">
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[300px] rounded-lg overflow-hidden">
                                <img
                                    src="https://i.postimg.cc/FzXdfG4X/7111db1edda88be8d90b2c36f835e12dc6d871d3.jpg"
                                    alt="Help Background"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50" />
                                <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center text-white">
                                    <h2 className="text-2xl font-bold mb-2 font-outfit">Need Help?</h2>
                                    <p className="text-sm mb-4 font-outfit">
                                        Speak with a human to fill out a form? Call our office and we will connect you with a team member.
                                    </p>
                                    <p className="text-lg font-bold mb-1 font-outfit">+(012) 6679545</p>
                                    <p className="mb-4 font-outfit">info@paikerfoods.com</p>
                                    <button className="bg-second-light hover:bg-second-deep text-black font-semibold py-2 px-6 rounded-full font-outfit transition-colors">
                                        CONTACT US
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-2 mb-6 font-outfit bg-[#eaf4ed] p-2 rounded-lg">
                            {["All Products", "Best Seller", "New Products"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg border transition-all flex-shrink-0 ${activeTab === tab
                                        ? "bg-white text-primary-light border-primary-light shadow-md"
                                        : "bg-white text-gray-700 hover:text-primary-light"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Product Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item) => (
                                    <div key={item._id} className="w-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border">
                                        <div className="relative h-48 md:h-56 w-full overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                src={item.image}
                                                alt={item.productName}
                                                loading="lazy"
                                            />
                                            <button
                                                onClick={() => setZoomedImg(item.image)}
                                                className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-black/50 transition-colors"
                                            >
                                                <CiMaximize2 className="h-5 w-5 text-white" />
                                            </button>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex text-second-light text-sm md:text-base">
                                                    {[...Array(5)].map((_, i) => (
                                                        i < Math.floor(Number(item.rating)) ? (
                                                            <IoMdStar key={i} />
                                                        ) : i === Math.floor(Number(item.rating)) && Number(item.rating) % 1 !== 0 ? (
                                                            <TiStarHalf key={i} />
                                                        ) : null
                                                    ))}
                                                </div>
                                                <button className="bg-green-100 text-green-600 text-sm rounded-full px-2 py-0.5 transition-colors">
                                                    {item.category}
                                                </button>
                                            </div>
                                            <h2 className="font-outfit text-lg md:text-xl font-semibold line-clamp-1">
                                                {item.productName}
                                            </h2>
                                            <p className="font-outfit text-sm text-gray-500 mt-2 line-clamp-2">
                                                {item.description}
                                            </p>
                                            <button
                                                onClick={() => handleBuyClick(item)}
                                                className="w-full font-poppins mt-4 bg-gradient-to-tl from-second-light to-second-deep  font-semibold py-2 px-4 rounded-lg transition-all duration-700 hover:scale-[1.03] hover:shadow-lg hover:brightness-110"
                                            >
                                                Contact to buy
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-10">
                                    <p className="text-gray-500">No products found matching your criteria</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Image Zoom Modal */}
            {zoomedImg && (
                <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">
                    <div className="relative max-w-6xl w-full">
                        <button
                            onClick={() => setZoomedImg(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300"
                        >
                            <IoMdClose className="h-8 w-8" />
                        </button>
                        <img
                            src={zoomedImg}
                            alt="Zoomed"
                            className="w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && selectedProduct && (
                <BuyProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitOrder}
                />
            )}

            {/* Brand logos */}
            <div className="mt-10 md:mt-16">
                <Brands />
            </div>
        </div>
    );
};

export default Products;