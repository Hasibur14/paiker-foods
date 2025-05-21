import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io5';
import { PiDotOutlineThin } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import footerBg from '../../../assets/Footer.png';
import logo from '../../../assets/logo.png';
import WhatsappCall from '../../Call/WhatsappCall';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Data configuration
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Our Business', path: '/our-business' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const companyLinks = [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms of Service', path: '#' },
        { name: 'Shipping Policy', path: '#' },
        { name: 'Return Policy', path: '#' }
    ];

    const contactInfo = [
        { name: 'Email: info@paikerfoods.com' },
        { name: 'Phone: +880 1234 567890' },
        { name: '408/445, Raza Bazar, Bogura Sadar, Bogura, Bangladeshh' }
    ];

    const socialLinks = [
        {
            icon: <FaFacebookF />,
            url: '#',
            label: 'Facebook'
        },
        {
            icon: <FaLinkedinIn />,
            url: '#',
            label: 'LinkedIn'
        },
        {
            icon: <FaXTwitter />,
            url: '#',
            label: 'Twitter'
        },
        {
            icon: <FaInstagram />,
            url: '#',
            label: 'Instagram'
        },
        {
            icon: <IoLogoYoutube />,
            url: '#',
            label: 'YouTube'
        }
    ];

    // Component sub-parts
    const SocialLinks = () => (
        <div className="flex space-x-3 mt-3">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-lg p-2 rounded-full bg-white bg-opacity-20 text-white hover:text-gray-800 hover:bg-second-light hover:bg-opacity-100 transition duration-300"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );

    const renderLinkList = (links) => (
        <ul className="space-y-2">
            {links.map((item, index) => (
                <li key={index} className="flex items-start">
                    <PiDotOutlineThin className="text-white mt-1.5 flex-shrink-0" />
                    <NavLink
                        to={item.path}
                        className="hover:text-second-deep hover:underline ml-1 transition-colors duration-300"
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <footer
            className="px-4 pb-6 text-white"
            style={{
                background: `url(${footerBg}) lightgray 50% / cover no-repeat`,
                backgroundColor: '#1F4E3D'
            }}
        >
            <div className="mx-[5%] lg:mx-[8%] xl:mx-[7%] 2xl:mx-[10%] py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  
                        {/* Brand info section */}
                        <div className="space-y-4">
                            <Link to="/">
                                <img src={logo} alt="Paiker Foods Logo" className='w-32' />
                            </Link>
                            <p className="text-sm leading-relaxed text-justify w-full lg:w-3/5  xl:w-4/5 2xl:w-4/5">
                                Paiker Foods is a leading Bangladeshi import, export, and distribution company specializing in premium spices, fresh vegetables, edible oils, and seeds. Committed to quality, sustainability, and ethical sourcing, we connect rural farmers to global markets while serving wholesalers, retailers, and food industries worldwide. With a strong distribution network and customized packaging solutions, Paiker Foods ensures fresh, authentic, and safe products delivered with trust.
                            </p>
                            <SocialLinks />
                        </div>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10">


                        {/* Navigation links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold uppercase tracking-wider">Quick Links</h3>
                            {renderLinkList(navLinks)}
                        </div>

                        {/* Company links */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold uppercase tracking-wider">Company</h3>
                            {renderLinkList(companyLinks)}
                        </div>

                        {/* Contact info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold uppercase tracking-wider">Contact Us</h3>
                            <ul className="space-y-2">
                                {contactInfo.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <PiDotOutlineThin className="text-white mt-1.5 flex-shrink-0" />
                                        <span className="ml-1">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white border-opacity-20 my-8"></div>

                {/* Copyright section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-md font-poppins">
                    <div className="mb-4 md:mb-0">
                        © {currentYear} Paiker Foods. All rights reserved.
                    </div>
                    <div>
                        Designed & Developed by{' '}
                        <a
                            className="font-semibold hover:text-[#05B689] transition-colors duration-300"
                            href="http://goinnovior.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Goinnovior
                        </a>
                    </div>
                </div>
            </div>

            {/* Whatsapp call popup */}
            <WhatsappCall />
        </footer>
    );
};

export default Footer;