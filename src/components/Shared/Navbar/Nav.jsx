import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import logo from "../../../assets/Logo_SSF.png"
import NavbarTop from './NavbarTop';
import LanguageToggle from '../../Language/LanguageToggle';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsFacebook } from 'react-icons/bs';

const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/our-business", label: "Our Business" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact Us" }
];

const socialLinks = [
    {
        url: "https://www.facebook.com/codeinnovior2020",
        icon: <BsFacebook />,
        label: "Follow us on Facebook"
    },
    {
        url: "https://www.linkedin.com/in/codeinnovior/",
        icon: <FaLinkedinIn />,
        label: "Follow us on LinkedIn"
    },
    {
        url: "https://x.com/i/flow/login?redirect_after_login=%2Fcodeinnovior",
        icon: <FaXTwitter />,
        label: "Follow us on Twitter"
    },
    {
        url: "https://www.instagram.com/codeinnovior/",
        icon: <FaInstagram />,
        label: "Email us"
    }
];

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        if (menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "block px-4 py-2 text-primary-light active"
            : "block px-4 py-2 hover:text-primary-light";

    return (
        <div className={`${scrolling ? 'shadow-md' : 'fixed z-50 w-full'}`}>
            <div className='container mx-auto space-y-3 mt-5 font-outfit'>
                <span className='hidden lg:block'>
                    <NavbarTop />
                </span>
                <div className='border-b-2 border-dashed border-gray-500 hidden lg:block'></div>

                <nav className={`${scrolling ? 'lg:fixed top-2 py-2 px-4 w-full container mx-auto bg-base-100 lg:shadow-xl border-t rounded-xl transition-all duration-300 lg:z-[9999]' : 'relative bg-transparent text-white'}`}>
                    <div className="flex justify-between">
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-4 items-center text-lg font-semibold">
                            {navLinks.map((link) => (
                                <div key={link.path} className="nav-item">
                                    <NavLink
                                        to={link.path}
                                        className={navLinkClass}
                                        onClick={handleLinkClick}
                                    >
                                        {link.label}
                                    </NavLink>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-between items-center h-auto border border-rose-500 w-full">
                            {/* Social Media - Desktop */}
                            <div className="hidden lg:flex">
                                <div className="flex justify-start space-x-3">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                            className='text-xl hover:text-[#05B689] transition duration-500'
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <h2 className="lg:hidden text-2xl font-bold font-shadows text-second-deep">Paiker Foods</h2>
                            <LanguageToggle />

                            {/* Mobile Menu Button */}
                            <div className="lg:hidden flex items-center mx-4">
                                <button
                                    onClick={toggleMenu}
                                    className='text-2xl text-primary-light border border-primary-light p-1'
                                >
                                    {menuOpen ? <CgMenuRightAlt /> : <FiMenu />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {(menuOpen && !isClosing) && (
                        <div className="side-menu z-50">
                            <div className="side-menu-2">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold font-shadows text-second-deep">Paiker Foods</h2>
                                    <button onClick={toggleMenu}>
                                        <FiX className="text-2xl text-rose-600 border border-rose-600" />
                                    </button>
                                </div>

                                <div className="mt-10 space-y-3">
                                    {navLinks.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary-light font-bold hover:text-primary-light"
                                                    : "block px-4 py-2 text-gray-900 hover:text-primary-light"
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Nav;