import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import NavbarTop from './NavbarTop';
import LanguageToggle from '../../Language/LanguageToggle';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsFacebook } from 'react-icons/bs';
import logo from '../../../assets/logo.png'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
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


    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/products", label: "Products" },
        { path: "/our-business", label: "Our Business" },
        { path: "/blogs", label: "Blogs" },
        { path: "/contact", label: "Contact Us" },
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
    ]

    return (
        <div className={`fixed w-full z-50 ${scrolling ? 'bg-transparent' : 'bg-transparent'}`}>
            <div className="mx-[5%] lg:mx-[8%] xl:mx-[7%] 2xl:mx-[10%]">
                <div className='lg:mt-4 font-outfit'>
                    <div className='hidden lg:block w-full'>
                        <div className={`${scrolling ? 'hidden' : ''}`}>
                            <NavbarTop />
                            <div className='border-b-2  mt-4 border-dashed border-gray-500 hidden lg:flex'></div>
                        </div>

                    </div>
                    <nav className={`${scrolling ? 'lg:fixed top-0 py-0.5 lg:py-2 px-4 w-full lg:w-[84%] xl:w-[86%] 2xl:w-[80%] bg-base-100 shadow-xl border-t rounded-xl transition-all duration-300' : 'relative bg-transparent text-white'}`}>
                        <div className="flex justify-between">
                            {/* Menu for larger screens */}
                            <div className="hidden lg:flex space-x-4 items-center text-lg font-semibold">
                                {navItems.map((item) => (
                                    <div className="nav-item" key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "block px-4 py-2 text-primary-light active"
                                                    : "block px-4 py-2 hover:text-primary-light"
                                            }
                                            onClick={handleLinkClick}
                                        >
                                            {item.label}
                                        </NavLink>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 justify-between items-center h-16 w-full lg:w-auto">
                                {/* Social Media */}
                                <div className="hidden lg:flex items-center gap-5">
                                    <div className="flex justify-start space-x-3">
                                        {socialLinks?.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={link.label}
                                                className={`text-xl  hover:text-[#05B689] transition duration-500 ${scrolling ? 'text-second-deep' : 'text-white'}`}

                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <LanguageToggle />
                                </div>
                                <img
                                    src={logo}
                                    alt="Paiker Foods"
                                    className='lg:hidden w-16' />

                                {/* Mobile Menu Icon */}
                                <div className="lg:hidden flex gap-2 items-center mx-4">
                                    <LanguageToggle />
                                    <button onClick={toggleMenu}
                                        className='text-2xl text-primary-light border border-primary-light p-1'>
                                        {menuOpen ? (
                                            <CgMenuRightAlt />
                                        ) : (
                                            <FiMenu />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {(menuOpen && !isClosing) && (
                            <div className="side-menu z-50" >
                                <div className="side-menu-2">
                                    <div className="flex justify-between items-center ">
                                        <img
                                            src={logo}
                                            alt="Paiker Foods"
                                            className='w-20' />
                                        <button onClick={toggleMenu}>
                                            <FiX className="text-2xl text-rose-600 border border-rose-600" />
                                        </button>
                                    </div>
                                    <div className="mt-10 space-y-3">
                                        {navItems?.map((item) => (
                                            <NavLink
                                                key={item.path}
                                                to={item.path}
                                                onClick={handleLinkClick}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "block px-4 py-2 text-primary-light font-bold hover:text-primary-light border-b border-gray-200"
                                                        : "block px-4 py-2 text-gray-900 hover:text-primary-light border-b border-gray-200"
                                                }
                                            >
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex justify-center space-x-6">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={link.label}
                                                className='text-2xl text-gray-700 hover:text-[#05B689] transition duration-500'
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Nav;