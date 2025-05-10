import { useState, useEffect } from 'react';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png';
import { Maximize2, X, ArrowRight } from "lucide-react";

const OurBusiness = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const [zoomedImg, setZoomedImg] = useState(null);

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

    return (
        <div className="bg-gray-100 p-4 md:p-8 overflow-x-hidden">
            <BannerTitle
                bannerImg={banner}
                subTitle="our business"
                title="Our Business"
            />

            <div className="flex flex-col md:flex-row gap-8 max-w-full mx-auto overflow-x-hidden">
                {/* SideNavBar inlined */}
                <div className="md:w-[400px] flex-shrink-0">
                    <div className="w-full max-w-xl bg-gray-50 p-6 rounded-lg shadow-sm">
                        <nav className="flex flex-col">
                            {categoriesData.map((categoryData) => (
                                <button
                                    key={categoryData.category}
                                    onClick={() => setActiveCategory(categoryData.category)}
                                    className={`flex items-center justify-between py-4 px-5 transition-colors w-full text-left ${activeCategory === categoryData.category
                                        ? 'bg-[#34A853] text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className="font-medium">{categoryData.category}</span>
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-8">
                    {/* FeaturedProduct inlined */}
                    {activeCategoryData?.featuredProduct && (
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="flex flex-col">
                                <div className="w-full relative h-60 md:h-auto">
                                    <img
                                        src={activeCategoryData.featuredProduct.img}
                                        alt={activeCategoryData.featuredProduct.title}
                                        className="object-cover w-full h-80"
                                    />
                                </div>
                                <div className="md:w-2/3 p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{activeCategoryData.featuredProduct.title}</h2>
                                    <p className="text-gray-600">{activeCategoryData.featuredProduct.des}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Product List */}
                    {activeCategoryData?.productList && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Product List</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {activeCategoryData.productList.map((product) => {
                                    const isExpanded = expandedDescriptions[product.id];
                                    const words = product.des.split(" ");
                                    const shouldTruncate = words.length > 10;
                                    const shortText = words.slice(0, 10).join(" ") + "...";
                                    const displayText = shouldTruncate && !isExpanded
                                        ? shortText
                                        : product.des;

                                    return (
                                        <div key={product.id} className="max-w-lg h-[450px]">
                                            <div className="h-full bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
                                                {/* Top image section */}
                                                <div className="relative">
                                                    <img
                                                        src={product.img || "/placeholder.svg"}
                                                        alt={product.title}
                                                        className="w-full h-[280px] object-cover"
                                                    />
                                                    <button
                                                        className="absolute top-4 right-4 p-2 bg-gray-700/40 backdrop-blur-sm rounded-lg"
                                                        onClick={() => setZoomedImg(product.img || "/placeholder.svg")}
                                                    >
                                                        <Maximize2 className="h-5 w-5 text-white" />
                                                    </button>
                                                </div>

                                                {/* Fullscreen Image Overlay */}
                                                {zoomedImg && (
                                                    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                                                        <div className="relative w-full max-w-5xl px-4">
                                                            <button
                                                                onClick={() => setZoomedImg(null)}
                                                                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-2 rounded-full shadow-lg z-50"
                                                            >
                                                                <X className="w-5 h-5 text-black" />
                                                            </button>
                                                            <img
                                                                src={zoomedImg}
                                                                alt="Zoomed"
                                                                className="w-full max-h-[70vh] object-contain rounded-2xl"
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Content section */}
                                                <div className="p-6 pt-4 bg-white rounded-t-3xl -mt-5 flex flex-col justify-between flex-1">
                                                    <div>
                                                        <h3 className="text-[24px] text-[#04000B] font-bold leading-tight mt-1">
                                                            {product.title}
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                                                        <p className={`text-gray-700 mb-6 text-base leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                                                            {displayText}
                                                            {shouldTruncate && (
                                                                <button
                                                                    onClick={() => toggleDescription(product.id)}
                                                                    className="text-[#34A853] text-sm underline ml-1"
                                                                >
                                                                    {isExpanded ? "See less" : "See more"}
                                                                </button>
                                                            )}
                                                        </p>
                                                    </div>
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
        </div>
    );
};

export default OurBusiness;


