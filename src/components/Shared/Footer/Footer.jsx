import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <footer className="footer footer-center bg-stone-200 text-gray-900 rounded pt-14">
            <div className='bg-white grid grid-cols-5 md:grid-cols-7 w-full border text-center items-center py-4  lg:px-[7%] '>
                <h3>Online Oder Query</h3>
                <div className="divider divider-horizontal "></div>
                <h3>Call: +971 6 534 7154</h3>
                <div className="divider divider-horizontal"></div>
                <h3>WhatsApp: +971 56 694 8430</h3>
                <div className="divider divider-horizontal"></div>
                <h3>sales@ssfgeneraltrading.com</h3>

            </div>
            <div className='p-10 space-y-5'>
                <h3 className='text-2xl '>Quick link</h3>
                <nav className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Sustainability</Link>
                    <Link to='/' className="link link-hover">Help & Support</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        {/* Social Icons */}

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                            <FaFacebookF className="text-3xl p-1.5 rounded-full  text-primary-base bg-white hover:bg-primary-base hover:text-white transition duration-500" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                            <FaLinkedinIn className="text-3xl p-1.5 rounded-full  text-primary-base bg-white hover:bg-primary-base hover:text-white transition duration-500" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                            <FaXTwitter className="text-3xl p-1.5 rounded-full  text-primary-base bg-white hover:bg-primary-base hover:text-white transition duration-500" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on YouTube">
                            <IoLogoYoutube className="text-3xl p-1.5 rounded-full  text-primary-base bg-white hover:bg-primary-base hover:text-white transition duration-500" />
                        </a>
                    </div>

                </nav>
                <aside>
                    <div className="text-center text-md mt-4  mx-4">
                        © {currentYear}  All Rights Reserved by SSF General Trading L.L.C. || Design & Developed By
                        <a
                            className='hover:text-[#00D8A1] transition-colors duration-500 font-semibold'
                            href="http://goinnovior.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {" "}Goinnovior
                        </a>.
                    </div>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
