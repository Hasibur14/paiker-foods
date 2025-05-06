import React from 'react'
import { useLoaderData } from 'react-router-dom';
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import Container from '../../components/Container/Container';
import banner from '../../assets/hero/banner1.png'

const ProductsDetails = () => {

    const product = useLoaderData();

    return (
        <div className="py-12">
            <BannerTitle
                bannerImg={banner}
                subTitle='Product Details'
                title="Product Details" />
            <Container>
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8">
                            <img
                                className="w-full h-auto object-cover rounded-lg"
                                src={product.image}
                                alt={product.title}
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                {product.category}
                            </div>
                            <h1 className="block mt-2 text-3xl font-bold text-gray-800">
                                {product.title}
                            </h1>
                            <p className="mt-4 text-gray-600">
                                {product.description}
                            </p>
                            <div className="mt-6">
                                <span className="text-2xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                            </div>
                            <div className="mt-8">
                                <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default ProductsDetails