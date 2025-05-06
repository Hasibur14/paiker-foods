import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { PiDotOutlineThin } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import footerBg from '../../../assets/Footer.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Wholesale & Export", path: "/wholesale-export" },
        { name: "Private Label & Packaging", path: "/private-label" },
        { name: "Contact Us", path: "/contact" },
    ];

    const companyLinks = [
        { name: "Privacy", path: "#" },
        { name: "Terms of Service", path: "#" }
    ];

    const developerLinks = [
        { name: "Public API", path: "#" },
        { name: "Documentation", path: "#" },
        { name: "Guides", path: "#" }
    ];

    const socialLinks = [
        {
            icon: <FaFacebookF className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />,
            url: "https://www.facebook.com/codeinnovior2020",
            label: "Follow us on Facebook"
        },
        {
            icon: <FaLinkedinIn className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />,
            url: "https://www.linkedin.com/in/codeinnovior/",
            label: "Follow us on LinkedIn"
        },
        {
            icon: <FaXTwitter className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />,
            url: "https://x.com/i/flow/login?redirect_after_login=%2Fcodeinnovior",
            label: "Follow us on Twitter"
        },
        {
            icon: <FaInstagram className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />,
            url: "https://www.instagram.com/codeinnovior/",
            label: "Follow us on Instagram"
        },
        {
            icon: <IoLogoYoutube className="text-2xl p-1 rounded bg-[#05B689] text-white hover:bg-white hover:text-[#05B689] transition duration-500" />,
            url: "https://www.youtube.com/@codeinnovior",
            label: "Subscribe on YouTube"
        }
    ];

    const SocialLinks = () => (
        <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );

    const renderLinkList = (links) => (
        <ul className="space-y-1">
            {links.map((item, index) => (
                <li key={index} className="cursor-pointer flex gap-2 transition-colors duration-500">
                    <PiDotOutlineThin className="text-white mt-1 text-xl" />
                    <NavLink
                        to={item.path}
                        className="hover:text-second-light hover:underline"
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <footer
            className="px-4 divide-y bg-primary-deep text-gray-100 pb-4"
            style={{
                background: `url(${footerBg}) lightgray 50% / cover no-repeat`,
                backgroundColor: '#1F4E3D'
            }}
        >
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3 space-y-3">
                    <Link to='/'>
                        <h2 className="text-5xl font-extrabold font-shadows bg-gradient-to-t from-second-light to-second-deep text-transparent bg-clip-text">
                            Paiker Foods
                        </h2>
                    </Link>
                    <p className="w-full lg:w-2/3 text-justify">
                        Conveniently monetize covalent data vis-a-vis scalable vortals. Uniquely facilitate cost effective ideas vis-a-vis collaborative e-tailers. Completely morph progressive action items and maintainable channels. Competently brand effective collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Navigation</h3>
                        {renderLinkList(navLinks)}
                    </div>

                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-gray-50">Company</h3>
                        {renderLinkList(companyLinks)}
                    </div>

                    <div className="space-y-3">
                        <h3 className="uppercase text-gray-50">Developers</h3>
                        {renderLinkList(developerLinks)}
                    </div>

                    <div className="space-y-3">
                        <div className="uppercase text-gray-50">Social media</div>
                        <p>Follow Us</p>
                        <SocialLinks />
                    </div>
                </div>
            </div>

            <aside>
                <div className="text-center text-md mt-4 mx-4 font-poppins">
                    © {currentYear} All Rights Reserved by Paiker Foods || Design & Developed By{' '}
                    <a
                        className="hover:text-[#00D8A1] transition-colors duration-500 font-semibold"
                        href="http://goinnovior.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Goinnovior
                    </a>.
                </div>
            </aside>
        </footer>
    );
};

export default Footer;