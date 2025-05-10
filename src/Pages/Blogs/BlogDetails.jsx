import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import banner from "../../assets/hero/banner1.png";
import { FaRegClock, FaRegComment, FaShareAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const BlogDetails = () => {
    const blog = useLoaderData();

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center py-20 max-w-md mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
                    <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center px-6 py-3 bg-primary-light text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        <IoMdArrowRoundBack className="mr-2" />
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 pb-10">
            <BannerTitle
                bannerImg={banner}
                subTitle="Blog Details"
                title={blog.title}
            />

            <Container>
                <div className="max-w-5xl mx-auto my-12 lg:my-16">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center text-gray-600 hover:text-primary-light transition-colors"
                        >
                            <IoMdArrowRoundBack className="mr-2" />
                            Back to all articles
                        </Link>
                    </div>

                    {/* Main Blog Content */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        {/* Featured Image */}
                        <div className="relative h-80 md:h-96 lg:h-[500px]">
                            <img
                                className="w-full h-full object-cover"
                                src={blog.image}
                                alt={blog.title}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h1 className="text-3xl md:text-4xl font-bold text-white">{blog.title}</h1>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-8 lg:p-12">
                            {/* Meta Information */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center text-gray-500">
                                        <FaRegClock className="mr-2" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <FaRegComment className="mr-2" />
                                        <span>{blog.comments}</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="p-2 text-gray-500 hover:text-primary-light rounded-full hover:bg-gray-100">
                                        <FaShareAlt />
                                    </button>
                                </div>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center mb-8">
                                <div className="mr-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                                        {blog.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-800">{blog.name}</h4>
                                    <p className="text-sm text-gray-500">{blog.role}</p>
                                </div>
                            </div>

                            {/* Article Content */}
                            <article className="prose prose-lg max-w-none">
                                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                    {blog.description}
                                </p>

                                {blog.content.map((paragraph, index) => (
                                    <p key={index} className="text-gray-600 leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </article>

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                        Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-primary-light hover:text-white transition-colors"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* You would map through related articles here */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <span className="text-sm text-primary-light font-medium">Interior Design</span>
                                    <h4 className="text-xl font-bold text-gray-800 mt-2 mb-3">10 Ways to Refresh Your Living Room</h4>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>Jul 28, 2023</span>
                                        <span className="mx-2">•</span>
                                        <span>5 min read</span>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat for other related articles */}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;