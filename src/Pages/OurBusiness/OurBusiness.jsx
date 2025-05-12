import { useState, useEffect } from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png';
import { FaArrowRight } from 'react-icons/fa6';
import { CiMaximize2 } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import Container from '../../components/Container/Container';
import OurBusinessModal from '../../components/Modal/OurBusinessModal';

const OurBusiness = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [zoomedImg, setZoomedImg] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/ourBusiness.json')
            .then((res) => res.json())
            .then((data) => {
                setCategoriesData(data);
                if (data.length > 0) {
                    setActiveCategory(data[0].category);
                }
            })
            .catch((err) => console.error('Failed to load categories:', err));
    }, []);

    const activeCategoryData = categoriesData.find(
        (cat) => cat.category === activeCategory
    );

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
                        <div className="flex flex-col gap-4 p-4 lg:p-6">
                            {categoriesData.map((categoryData) => (
                                <button
                                    key={categoryData._id}
                                    onClick={() => setActiveCategory(categoryData.category)}
                                    className={`flex items-center justify-between px-4 py-3 rounded  transition-colors ${
                                        activeCategory === categoryData.category
                                            ? 'bg-primary-light text-white'
                                            : 'bg-white hover:bg-primary-light hover:text-white'
                                    }`}
                                >
                                    <h3 className="text-base font-semibold">{categoryData.category}</h3>
                                    <FaArrowRight />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 space-y-8">
                        {/* Category Info */}
                        {activeCategoryData && (
                            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="">
                                    <div className="w-full relative">
                                        <img
                                            src={activeCategoryData.img}
                                            alt={activeCategoryData.title}
                                            className="w-full h-64 lg:h-[420px] object-cover"
                                        />
                                        <h2 className="absolute top-[40%] left-[40%] text-3xl lg:text-6xl font-bold text-white mb-3 font-poppins text-center backdrop-blur p-3">
                                            {activeCategoryData.category}
                                        </h2>
                                    </div>
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                                            {activeCategoryData.title}
                                        </h2>
                                        <p className="text-gray-600 ">
                                            {activeCategoryData.des}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Product List */}
                        {activeCategoryData?.productList && (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 font-poppins">Product List</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {activeCategoryData.productList.map((product) => {
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
                                                            <p className="text-sm text-white badge badge-info">
                                                                {activeCategoryData.category}
                                                            </p>
                                                        </div>
                                                        <p className="text-gray-600 mb-4  flex-1">
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
                                                            className="w-full mt-4 bg-second-light hover:bg-second-deep text-black hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
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
                        )}
                    </div>
                </div>
            </Container>

            {/* Image Zoom Modal */}
            {zoomedImg && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
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