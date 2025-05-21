import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const Blogs = () => {

    const axiosPublic = useAxiosPublic();


    // Fetch blogs from API
    const { data: blogsData = [], isLoading } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs');
            return res.data;
        }
    });

    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle="Blogs"
                title="Our Blogs" />
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-2 pb-16">
                    {blogsData?.map((item, index) => (
                        <div key={item._id} className="bg-white shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                            <div className="relative overflow-hidden group">
                                <img
                                    className="w-full h-[230px] object-cover transition-all duration-300 ease-out group-hover:scale-110"
                                    src={item.image}
                                    alt={item.description}
                                />
                                <p className="absolute bottom-0 left-0 bg-second-light text-black text-4xl font-bold px-8 py-4 w-[106px]">
                                    0{index + 1}
                                </p>
                            </div>
                            <p className="w-[106px] bg-primary-light text-white text-center text-md font-normal px-2 py-1">
                                {item.date}
                            </p>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={`/blog-details/${item._id}`}
                                        className="inline-flex items-center text-primary-light font-medium hover:text-green-500 transition-colors font-poppins hover:underline"
                                    >
                                        Read More
                                        <FaArrowRightLong className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Blogs;