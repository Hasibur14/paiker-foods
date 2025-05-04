import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";
import logo from "../../../assets/Logo_SSF.png"
import NavbarTop from './NavbarTop';



const Nav = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [newsOpen, setNewsOpen] = useState(false);
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

    const togglePages = () => {
        setPagesOpen(!newsOpen);
    };
    const toggleNews = () => {
        setNewsOpen(!newsOpen);
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

    return (

        <div className={` ${scrolling ? 'shadow-md' : 'fixed z-50 w-full '}`}>
            <div className='container mx-auto space-y-3 mt-5 font-outfit'>
                <span className='hidden lg:block'>
                    <NavbarTop />
                </span>
                <div className='border-b-2 border-dashed '></div>
                <div>
                    <nav className={`${scrolling ? ' lg:fixed top-2 py-2 px-4 w-full container mx-auto  bg-base-100 lg:shadow-xl border-t rounded-xl transition-all duration-300 lg:z-[9999]' : 'relative bg-transparent text-white'}`}>
                        <div className="flex justify-between">
                            {/* Menu for larger screens */}
                            <div className="hidden md:flex space-x-4 items-center text-lg font-bold">
                                <div className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-light  active" :
                                            "block px-4 py-2   hover:text-primary-light"}
                                        onClick={handleLinkClick}
                                    >
                                        Home
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-light  active" :
                                            "block px-4 py-2   hover:text-primary-light"}
                                        onClick={handleLinkClick}
                                    >
                                        About Us
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-light  active" :
                                            "block px-4 py-2   hover:text-primary-light"}
                                        onClick={handleLinkClick}
                                    >
                                        Products
                                    </NavLink>
                                </div>
                                <div className="nav-item">
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-light  active" :
                                            "block px-4 py-2   hover:text-primary-light"}
                                        onClick={handleLinkClick}
                                    >
                                        Wholesale & Export
                                    </NavLink>
                                </div>

                                <div
                                    className="relative group "
                                    onMouseEnter={toggleServices}
                                    onMouseLeave={() => setTimeout(() => setServicesOpen(false), 200)} >
                                    <button className="nav-item  py-2 px-3 rounded  hover:text-primary-light flex items-center">
                                        Private Label & Packaging
                                        {servicesOpen ? <FiChevronUp className='ml-1 text-xl' /> : <FiChevronDown className='ml-1 text-xl' />}
                                    </button>

                                    {/* Mega menu */}
                                    <div className={`mega-menu mt-3 ${servicesOpen ? 'show' : ''}`}>
                                        {/* <NavLink to="/a" onClick={handleLinkClick} className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                    "block px-4 py-2  hover:bg-gradient-to-t from-primary-light to-primary-deep hover:text-white"}>
                                                Our Products
                                            </NavLink>
                                            <NavLink to="/b" onClick={handleLinkClick} className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                    "block px-4 py-2  hover:bg-gradient-to-t from-primary-light to-primary-deep  hover:text-white"}>
                                                Best Product
                                            </NavLink>
                                            <NavLink to="/c" onClick={handleLinkClick} className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                    "block px-4 py-2  hover:hover:bg-gradient-to-t from-primary-light to-primary-deep  hover:text-white"}>
                                                Top Item
                                            </NavLink> */}

                                    </div>

                                </div>
                                <div className="nav-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) => isActive ? "block px-4 py-2  text-primary-light  active" :
                                            "block px-4 py-2   hover:text-primary-light"}
                                        onClick={handleLinkClick}
                                    >
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>

                            <div className="flex justify-between items-center h-16">
                                <div className="flex gap-3">
                                    <button className='text-lg font-semibold bg-second-light hover:bg-second-deep   px-5 py-2 rounded transition-all duration-500 text-gray-900'>Get In Tauch</button>
                                </div>

                                {/* Mobile Menu Icon */}
                                <div className="md:hidden flex items-center border border-primary-base p-1  hover:">
                                    <button onClick={toggleMenu}>
                                        {menuOpen ? (
                                            <CgMenuRightAlt className="text-2xl text-primary-light hover:text-white" />
                                        ) : (
                                            <FiMenu className="text-2xl text-primary-light hover:text-white" />
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
                                <div className="side-menu-2 ">
                                    <div className="flex justify-between items-center ">
                                        <img className='w-52' src={logo} alt="shabuj" />
                                        <button onClick={toggleMenu}>
                                            <FiX className="text-2xl text-rose-600 border border-rose-600" />
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <NavLink
                                            to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-light font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "} >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/about"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-light font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "} >
                                            About
                                        </NavLink>

                                        <div
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-light font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "}>
                                            <button
                                                onClick={toggleServices}
                                                className="w-full text-left px-4 py-2 flex justify-between ">
                                                Product & Items
                                                <span className='border-2 active:border-green-500 active:text-green-500 px-1.5 py-.5 rounded-xl'>
                                                    {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                                                </span>
                                            </button>
                                            {servicesOpen && (
                                                <div className="pl-8 text-[13px] space-y-2">
                                                    <NavLink to="/a"
                                                        onClick={handleLinkClick}
                                                        className={({ isActive }) =>
                                                            isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                                "block px-4 py-2  hover: hover:text-primary-light"} >
                                                        IT Consultancy
                                                    </NavLink>
                                                    <NavLink
                                                        to="/b"
                                                        onClick={handleLinkClick}
                                                        className={({ isActive }) =>
                                                            isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                                "block px-4 py-2  hover: hover:text-primary-light"} >
                                                        Managed IT
                                                    </NavLink>
                                                    <NavLink
                                                        to="/c"
                                                        onClick={handleLinkClick}
                                                        className={({ isActive }) =>
                                                            isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                                "block px-4 py-2  hover: hover:text-primary-light"} >
                                                        Digital Marketing
                                                    </NavLink>
                                                    <NavLink
                                                        to="/d"
                                                        onClick={handleLinkClick}
                                                        className={({ isActive }) =>
                                                            isActive ? "block px-4 py-1 rounded text-white bg-primary-base" :
                                                                "block px-4 py-2  hover: hover:text-primary-light"} >
                                                        Technology Training
                                                    </NavLink>
                                                </div>
                                            )}
                                        </div>

                                        <NavLink
                                            to="/sustainability"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-light font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "} >
                                            Sustainability
                                        </NavLink>

                                        <NavLink
                                            to="/contact"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-2 text-primary-light font-bold hover: hover:text-primary-light " :
                                                    "block px-4 py-2 text-gray-900 "} >
                                            Contact
                                        </NavLink>
                                    </div>

                                    <div className="mt-4">
                                        <button className="w-full bg-primary-base text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                                            Sign Up
                                        </button>
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
