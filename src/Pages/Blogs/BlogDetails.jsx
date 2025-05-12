import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Container from "../../components/Container/Container";
import banner from "../../assets/hero/banner1.png";
import { FaRegClock, FaShareAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const BlogDetails = () => {

    const blog = useLoaderData();

    const handleShare = () => {
        const currentUrl = window.location.href;
        const title = blog.title;
        const text = blog.description.substring(0, 100) + "...";



        // Native Share API (works on mobile and some desktop browsers)
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
                url: currentUrl,
            })
                .catch(err => console.log('Error sharing:', err));
        }
        // Fallback for browsers that don't support native share
        else {
            // Open a popup with social sharing options
            const shareWindow = window.open(
                '',
                'Share this article',
                'width=600,height=400,menubar=no,toolbar=no'
            );

            // If popup was blocked, fallback to new tab
            if (!shareWindow || shareWindow.closed || typeof shareWindow.closed === 'undefined') {
                window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
                    '_blank'
                );
            } else {
                // Create HTML for the share popup
                shareWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Share this article</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; }
                            .share-option { 
                                display: flex; 
                                align-items: center; 
                                padding: 10px; 
                                margin: 10px 0; 
                                border-radius: 5px; 
                                cursor: pointer;
                                transition: background 0.2s;
                            }
                            .share-option:hover { background: #f0f0f0; }
                            .share-icon { margin-right: 10px; font-size: 24px; }
                            .twitter { color: #1DA1F2; }
                            .facebook { color: #4267B2; }
                            .linkedin { color: #0077b5; }
                            .whatsapp { color: #25D366; }
                            .copy-link { color: #666; }
                        </style>
                    </head>
                    <body>
                        <h2>Share this article</h2>
                        <div class="share-option twitter" onclick="window.open('https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}', '_blank')">
                            <span class="share-icon">𝕏</span>
                            <span>Share on Twitter</span>
                        </div>
                        <div class="share-option facebook" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}', '_blank')">
                            <span class="share-icon">f</span>
                            <span>Share on Facebook</span>
                        </div>
                        <div class="share-option linkedin" onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}', '_blank')">
                            <span class="share-icon">in</span>
                            <span>Share on LinkedIn</span>
                        </div>
                        <div class="share-option whatsapp" onclick="window.open('https://wa.me/?text=${encodeURIComponent(title + ' ' + currentUrl)}', '_blank')">
                            <span class="share-icon">WhatsApp</span>
                            <span>Share via WhatsApp</span>
                        </div>
                        <div class="share-option copy-link" onclick="navigator.clipboard.writeText('${currentUrl}').then(() => alert('Link copied to clipboard!'))">
                            <span class="share-icon">📋</span>
                            <span>Copy link</span>
                        </div>
                    </body>
                    </html>
                `);
                shareWindow.document.close();
            }
        }
    };

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
        <div className="pb-10">
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
                                <div className="flex items-center text-gray-500">
                                    <FaRegClock className="mr-2" />
                                    <span>{blog.readTime}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={handleShare}
                                        className="p-2 text-gray-500 hover:text-primary-light rounded-full bg-gray-100 transition-colors"
                                        aria-label="Share this article"
                                    >
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
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;