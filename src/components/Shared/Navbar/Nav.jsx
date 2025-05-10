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

    //  mega menu open 
    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };



    // small device sub menu item  click after close sidebar
    const handleLinkClick = () => {
        setMenuOpen(false);
    };


    // Scroll event handler to make navbar fixed
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

        <div className={` ${scrolling ? 'shadow-md w-full' : 'fixed z-50 w-full'}`}>
            <div className='container mx-auto lg:space-y-3 lg:mt-5 font-outfit'>
                <span className='hidden lg:block'>
                    <NavbarTop />
                </span>
                <div className='border-b-2 border-dashed border-gray-500 hidden lg:block'></div>
                <div>
                    <nav className={`${scrolling ? 'lg:fixed top-2 py-2 px-4 w-full container mx-auto  bg-base-100 lg:shadow-xl border-t rounded-xl transition-all duration-300 lg:z-[9999]' : 'relative bg-transparent text-white'}`}>
                        <div className="flex justify-between shadow-xl lg:shadow-none">
                            {/* Menu for larger screens */}
                            <div className="hidden md:flex space-x-4 items-center text-lg font-semibold">
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
                                                className='text-xl hover:text-[#05B689] transition duration-500'
                                            >
                                                {link.icon}
                                            </a>
                                        ))}
                                    </div>
                                    <LanguageToggle />
                                </div>
                                <h2 className="lg:hidden text-2xl font-bold font-shadows text-second-deep">Paiker Foods</h2>

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

                        {/* 
            ------------------------------------------------------------
                                     MOBILE DEVICE NAVBAR
            ------------------------------------------------------------ */}

                        {(menuOpen && !isClosing) && (
                            <div className="side-menu z-50" >
                                <div className="side-menu-2">
                                    <div className="flex justify-between items-center ">
                                        {/* <img className='w-52' src={logo} alt="shabuj" /> */}
                                        <h2 className="text-2xl font-bold font-shadows text-second-deep">Paiker Foods</h2>
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
