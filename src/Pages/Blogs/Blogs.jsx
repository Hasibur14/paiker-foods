import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {


    const [isBlogs, setIsBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('./blogs.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setIsBlogs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-center text-red-500 py-8">{error}</div>;

    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle="Blogs"
                title="Our Blogs" />
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mb-2 pb-16">
                    {isBlogs.map((item) => (
                        <div key={item._id} className="bg-white shadow hover:shadow-lg transition-shadow duration-300">
                            <div className="relative overflow-hidden group">
                                <img
                                    className="w-full h-[230px] object-cover transition-all duration-300 ease-out group-hover:scale-110"
                                    src={item.image}
                                    alt={item.description}
                                />
                                <p className="absolute bottom-0 left-0 bg-second-light text-black text-4xl font-bold px-8 py-4 w-[106px]">
                                    {item.number}
                                </p>
                            </div>
                            <p className="w-[106px] bg-primary-light text-white text-center text-md font-normal px-2 py-1">
                                {item.date}
                            </p>
                            <div className="mx-4">

                                <div className="flex items-center space-x-2 mt-6">
                                    <h2 className="text-sm font-medium font-outfit text-gray-500 hover:text-primary-light">
                                        {item.name}
                                    </h2>
                                    <span className="text-sm font-bold leading-none mt-1 mx-4">·</span>
                                    <p className="text-sm text-gray-500 hover:text-primary-light font-outfit">
                                        {item.comments}
                                    </p>
                                </div>

                                <p className="mt-2 text-xl tracking-wide font-bold font-outfit line-clamp-2">
                                    {item.title}
                                </p>
                                <Link
                                    to={`/blog-details/${item._id}`}
                                    className="mt-4 text-sm uppercase font-semibold flex items-center gap-2 mb-3 hover:text-primary-light hover:underline"
                                >
                                    Continue Reading
                                    <FaArrowRightLong />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Blogs;