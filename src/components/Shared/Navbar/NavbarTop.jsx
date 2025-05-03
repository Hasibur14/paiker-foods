import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';



const NavbarTop = () => {
    return (
        <div className='flex justify-between mx-3'>
            <div className='flex gap-2 md:gap-5 text-gray-900 uppercase'>
                <div className="flex gap-3">
                    <Link to='/'>
                        {/* <img
                            className='w-60 pb-2'
                            src={logo}
                            alt="SSF" /> */}
                        <h2 className="text-xl font-bold">Paiker Foods</h2>
                    </Link>
                </div>
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