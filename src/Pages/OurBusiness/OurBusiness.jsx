import { useState, useEffect } from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png';
import { FaArrowRight } from 'react-icons/fa6';
import { CiMaximize2 } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import Container from '../../components/Container/Container';
import OurBusinessModal from '../../components/Modal/OurBusinessModal';
import useProduct from '../../hooks/useProduct';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const OurBusiness = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    const [activeBusinessType, setActiveBusinessType] = useState('All');
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [zoomedImg, setZoomedImg] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productsData, loading] = useProduct();

    // Get all unique business types from products
    const allBusinessTypes = ['All', ...new Set(
        productsData.flatMap(product => product.businessType)
    )];

    // Filter products based on selected business type
    const filteredProducts = activeBusinessType === 'All'
        ? productsData
        : productsData.filter(product =>
            product.businessType.includes(activeBusinessType)
        );

    // Get unique categories from filtered products
    const filteredCategories = [...new Set(
        filteredProducts.map(product => product.category)
    )];

    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

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
        alert(`Order submitted successfully for ${formData.quantity} units of ${formData.productName}`);
        handleCloseModal();
    };

    if (loading) return <LoadingSpinner />

    return (
        <div className="overflow-x-hidden">
            <BannerTitle
                bannerImg={banner}
                subTitle="our business"
                title="Our Business"
            />

            <Container>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pb-16">
                    {/* Sidebar */}
                    <div className="lg:w-[350px] flex-shrink-0 bg-[#F8F8F8] shadow-lg">
                        {/* Business Type Filter */}
                        <div className="p-4 border-b">
                            <h3 className="text-lg font-semibold mb-3">Business Type</h3>
                            <div className="flex flex-col gap-4">
                                {allBusinessTypes.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setActiveBusinessType(type);
                                            setActiveCategory(null);
                                        }}
                                        className={`flex items-center justify-between px-4 py-3 rounded transition-colors font-bold ${activeBusinessType === type
                                                ? 'bg-primary-light text-white'
                                                : 'bg-white hover:bg-primary-light hover:text-white'
                                            }`}
                                    >
                                        {type}
                                        <FaArrowRight />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="p-4">
                            <h3 className="text-lg font-semibold my-5">Categories</h3>
                            <div className="flex gap-5">
                                {filteredCategories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className='bg-fuchsia-100 hover:bg-violet-600 text-purple-500 hover:text-white px-3 py-1 text-[12px] font-semibold font-poppins rounded-full'
                                    >
                                        {category}

                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-8">
                        {/* Category Info */}
                        {activeCategory && (
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="">
                                    <div className="w-full relative">
                                        <img
                                            src={filteredProducts.find(p => p.category === activeCategory)?.image}
                                            alt={activeCategory}
                                            className="w-full h-64 lg:h-[420px] object-cover"
                                        />
                                        <h2 className="absolute top-[40%] left-[40%] text-3xl lg:text-6xl font-bold text-white mb-3 font-poppins text-center backdrop-blur p-3">
                                            {activeCategory}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Product List */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 font-poppins">
                                {activeBusinessType === 'All'
                                    ? 'All Products'
                                    : `${activeBusinessType} Products`}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-16 md:gap-10 2xl:gap-6">
                                {filteredProducts
                                    .filter(product =>
                                        !activeCategory || product.category === activeCategory
                                    )
                                    .map((product) => {
                                        const isExpanded = expandedDescriptions[product._id];
                                        const displayText = isExpanded
                                            ? product.description
                                            : `${product.description.split(' ').slice(0, 10).join(' ')}...`;

                                        return (
                                            <div key={product._id} className="h-full">
                                                <div className="h-full bg-white rounded-2xl shadow-lg border overflow-hidden flex flex-col">
                                                    {/* Image with zoom button */}
                                                    <div className="relative h-48 w-full overflow-hidden">
                                                        <img
                                                            src={product.image}
                                                            alt={product.productName}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <button
                                                            onClick={() => setZoomedImg(product.image)}
                                                            className="absolute top-3 right-3 p-2 bg-black/30 backdrop-blur-sm rounded-lg hover:bg-black/50 transition-colors"
                                                        >
                                                            <CiMaximize2 className="h-5 w-5 text-white" />
                                                        </button>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-5 flex flex-col flex-1">
                                                        <div className="mb-2 flex gap-2 justify-between">
                                                            <h3 className="text-xl font-bold text-gray-800 font-poppins">
                                                                {product.productName}
                                                            </h3>
                                                            <div className="flex gap-1">
                                                                {product.businessType.map(type => (
                                                                    <span key={type} className="text-xs text-white badge badge-info">
                                                                        {type}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <p className="text-gray-600 mb-4 flex-1">
                                                            {displayText}
                                                            {product.description.split(' ').length > 10 && (
                                                                <button
                                                                    onClick={() => toggleDescription(product._id)}
                                                                    className="text-primary-light hover:text-second-deep ml-1 font-medium text-sm"
                                                                >
                                                                    {isExpanded ? 'Show less' : 'Show more'}
                                                                </button>
                                                            )}
                                                        </p>
                                                        <button
                                                            onClick={() => handleBuyClick(product)}
                                                            className="w-full mt-4 bg-gradient-to-tr from-second-light to-second-deep text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:from-second-deep hover:to-second-light"
                                                        >
                                                            Contact to buy
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
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

            {/* Buy Modal */}
            {isModalOpen && selectedProduct && (
                <OurBusinessModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitOrder}
                />
            )}
        </div>
    );
};

export default OurBusiness;