import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import banner from "../../assets/hero/banner1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {

    const [isBlogs, setIsBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setIsBlogs(data))
    }, [])




    return (
        <div>
            <BannerTitle bannerImg={banner} subTitle="Blogs" title="Our Blogs" />

            <Container>
                {/* <h2 className='text-rose-600 animate-pulse text-center'>Comming...</h2> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-2">
                    {isBlogs?.map((item) => (
                        <div key={item._id} className="bg-white shadow-sm">
                            <div className="relative overflow-hidden group">
                                <img
                                    className="w-full h-[230px] object-cover transition-all duration-300 ease-out group-hover:scale-110"
                                    src={item.image}
                                    alt="img"
                                />

                                <p className="absolute bottom-0 left-0 bg-second-light text-black text-4xl font-bold px-8 py-4 ">
                                    {item.number}
                                </p>
                            </div>

                            <p className="w-[98px] bg-primary-light text-white text-center text-md font-normal px-2 py-1 ">
                                {item.date}
                            </p>
                            <div className="flex items-center space-x-2 mt-6">
                                <h2 className="text-lg font-medium font-outfit text-gray-500 hover:text-primary-light">
                                    {item.name}
                                </h2>
                                <span className="text-xl font-bold leading-none mt-1 mx-4">
                                    ·
                                </span>
                                <p className="text-xl text-gray-500 hover:text-primary-light font-outfit">
                                    {item.comments}
                                </p>
                            </div>

                            <p className="mt-2 text-2xl tracking-wide font-bold font-outfit">{item.description}</p>
                            <Link to={`/blog-details/${item.id}`} state={{ blog: item }} element className="mt-4 text-lg uppercase font-semibold flex items-center gap-2 mb-3 hover:text-primary-light">
                                Continue Reading
                                <FaArrowRightLong />
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Blogs;
