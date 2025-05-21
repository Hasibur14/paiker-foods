import React from "react";
import { Link, useParams } from "react-router-dom";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import banner from "../../assets/hero/banner1.png";
import { FaRegClock, FaShareAlt, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const BlogDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();

    const { data: blog = {}, isLoading } = useQuery({
        queryKey: ['blog', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/blog/${id}`);
            return data;
        },
    });

    const calculateReadTime = (text) => {
        const wordsPerMinute = 200;
        const wordCount = text?.split(/\s+/)?.length || 0;
        return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    };

    const handleShare = (platform) => {
        if (!blog.title) return;

        const currentUrl = window.location.href;
        const text = blog.description?.[0]?.substring(0, 100) || blog.describe?.substring(0, 100) || "";

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(`${blog.title} - ${currentUrl}`)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(currentUrl)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(err => console.error('Failed to copy:', err));
                break;
            default:
                if (navigator.share) {
                    navigator.share({
                        title: blog.title,
                        text: text,
                        url: currentUrl,
                    }).catch(err => console.log('Error sharing:', err));
                }
        }
    };

    if (isLoading) return <LoadingSpinner />;

    if (!blog || !blog._id) {
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

    const readTimeText = [...(blog.description || []), blog.describe || ""].join(" ");
    const readTime = calculateReadTime(readTimeText);

    return (
        <div className="pb-16 bg-gray-50">
            <BannerTitle
                bannerImg={banner}
                subTitle="Blog Details"
                title={blog.title}
            />

            <Container>
                <div className="max-w-4xl mx-auto my-8 lg:my-12">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            to="/blogs"
                            className="inline-flex items-center text-gray-600 hover:text-primary-light transition-colors font-medium"
                        >
                            <IoMdArrowRoundBack className="mr-2" />
                            Back to all articles
                        </Link>
                    </div>

                    {/* Main Blog Content */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Featured Image */}
                        <div className="relative h-64 sm:h-80 md:h-96">
                            <img
                                className="w-full h-full object-cover"
                                src={blog.image}
                                alt={blog.title}
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="container mx-auto">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{blog.title}</h1>
                                    <div className="flex items-center mt-3 text-white/90">
                                        <FaRegClock className="mr-2" />
                                        <span className="text-sm">{readTime} min read • {blog.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-8">
                            {/* Share Buttons */}
                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Share this article
                                </h3>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => handleShare('facebook')}
                                        className="p-3 bg-[#4267B2] text-white rounded-full hover:bg-[#365899] transition-colors"
                                        aria-label="Share on Facebook"
                                    >
                                        <FaFacebook size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleShare('twitter')}
                                        className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1991DB] transition-colors"
                                        aria-label="Share on Twitter"
                                    >
                                        <FaTwitter size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleShare('linkedin')}
                                        className="p-3 bg-[#0077B5] text-white rounded-full hover:bg-[#00669C] transition-colors"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <FaLinkedin size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleShare('whatsapp')}
                                        className="p-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-colors"
                                        aria-label="Share via WhatsApp"
                                    >
                                        <FaWhatsapp size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleShare('copy')}
                                        className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                                        aria-label="Copy link"
                                    >
                                        <FaShareAlt size={16} />
                                    </button>
                                </div>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{blog.title}</h1>
                            {/* Article Content */}
                            <article className="prose prose-lg max-w-none mt-4">
                                {blog.describe && (
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                                        {blog.describe}
                                    </p>
                                )}

                                {blog.description?.map((paragraph, index) => (
                                    <p key={index} className="text-gray-600 leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </article>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                    Tags
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Article", "Blog", "Trends", "View"].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-primary-light hover:text-white transition-colors"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;