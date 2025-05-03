import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';



const NavbarTop = () => {
    return (
        <div className='flex justify-between mx-3'>
            <div className='flex gap-2 md:gap-5 text-gray-900 uppercase'>
                <Link to="/">
                    <h4 className='text-[12px] md:text-[15px] hover:text-primary-base transition-colors duration-300'>Supplier</h4>
                </Link>
                <Link to="/">
                    <h4 className='text-[12px] md:text-[15px] hover:text-primary-base transition-colors duration-300'>Buyer</h4>
                </Link>
                <Link to="/">
                    <h4 className='text-[12px] md:text-[15px] hover:text-primary-base transition-colors duration-300'>Help & Support</h4>
                </Link>
            </div>
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                    <FaFacebookF className="text-2xl p-1 rounded bg-gradient-to-bl from-primary-light via-primary-base to-primary-deep text-white hover:bg-transparent hover:text-primary-light transition duration-500" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                    <FaLinkedinIn className="text-2xl p-1 rounded bg-gradient-to-bl from-primary-light via-primary-base to-primary-deep text-white hover:bg-transparent hover:text-primary-light transition duration-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                    <FaXTwitter className="text-2xl p-1 rounded bg-gradient-to-bl from-primary-light via-primary-base to-primary-deep text-white hover:bg-transparent hover:text-primary-light transition duration-500" />
                </a>
                <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email us">
                    <IoLogoYoutube className="text-2xl p-1 rounded bg-gradient-to-bl from-primary-light via-primary-base to-primary-deep text-white hover:bg-transparent hover:text-primary-light transition duration-500" />
                </a>

            </div>
        </div>
    )
}

export default NavbarTop;