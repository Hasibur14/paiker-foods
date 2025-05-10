import React from "react";
import { useLocation, useParams } from "react-router-dom";
import blogData from "../../../public/blogs";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import banner from "../../assets/hero/banner1.png";

const BlogDetails = () => {
    const { id } = useParams();
    const { state } = useLocation();

    const blog = state?.blog || blogData.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <p className="text-center text-red-600 mt-10 font-bold">
                Blog not found.
            </p>
        );
    }

    return (
        <div className="py-12">
            <BannerTitle
                bannerImg={banner}
                subTitle="Blog Details"
                title="Blog Details"
            />
            <Container>
                <div className="max-w-6xl mx-auto bg-white overflow-hidden">
                    <div className="md:flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-8">
                            <img
                                className="w-full h-auto object-cover rounded-lg"
                                src={blog.image}
                                alt="Img"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-2xl font-medium font-outfit text-gray-500 hover:text-primary-light">
                                {blog.name}
                            </h1>
                            <p className="mt-2 text-2xl tracking-wide font-bold font-outfit">
                                {blog.description}
                            </p>
                            <p className="w-[98px] bg-primary-light text-white text-center text-md font-normal px-2 py-1 mt-2">
                                {blog.date}
                            </p>
                            <p className="text-xl text-gray-500 hover:text-primary-light font-outfit mt-6">
                                {blog.comments}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;
