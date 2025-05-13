import { GrLocation } from 'react-icons/gr';
import { PiPhoneCallBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const NavbarTop = () => {
    return (
        <div className='w-full flex gap-16 justify-between items-center mx-3 py-4 text-white'>
            <div className='w-1/2 flex gap-2 md:gap-5 text-gray-900 uppercase'>
                <div className="flex gap-3">
                    <Link to='/'>
                      <img src={logo} alt="logo" className='w-40' />
                    </Link>
                </div>
            </div>
            <div className="flex space-x-4">
                {/* Head Office */}
                <div className="flex gap-3 items-center ">
                    <div>
                        <GrLocation className="text-5xl text-gray-900 bg-second-light p-3 rounded-full" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Head Office</h2>
                        <h3 className="text-xs">408/445, Raza Bazar, Bogura Sadar, Bogura, Bangladesh</h3>
                    </div>
                </div>

                {/* Marketing Office */}
                <div className="flex gap-3 items-center ">
                    <div>
                        <GrLocation className="text-5xl text-gray-900 bg-second-light p-3 rounded-full" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Marketing Office</h2>
                        <h3 className="text-xs">1138/10, Avenue: 9, Mirpur DOHS, Dhaka, Bangladesh</h3>
                    </div>
                </div>

                {/* Call Us */}
                <div className="flex gap-3 items-center ">
                    <PiPhoneCallBold className="text-5xl text-gray-900 bg-second-light p-3 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold">Contact </h2>
                        <h3 className="text-xs">+8801755690256</h3>
                        <h3 className="text-xs">+8801914067101</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarTop;