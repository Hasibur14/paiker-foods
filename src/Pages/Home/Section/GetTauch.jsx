import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import icon from '../../../assets/home/getTauch-1.png'
import icon2 from '../../../assets/home/getTauch-2.png'
import bg from '../../../assets/home/getTauchBg.png'

const GetTauch = () => {
    return (
        <div id="getInTauch" className="py-16 ">
            <Container>
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Map & Contact */}
                    <div>
                        {/* Google Map */}
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.350692400587!2d89.37086107607465!3d24.85186934559988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e3b9e72701%3A0xb026409faa8f68c4!2z4Kaw4Ka-4Kac4Ka-IOCmrOCmvuCmnOCmvuCmsCDgprDgp4vgpqEsIOCmrOCml-CngeCmoeCmvOCmvg!5e0!3m2!1sbn!2sbd!4v1746514165428!5m2!1sbn!2sbd"
                            className="w-full h-64 rounded-lg mb-6"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                        {/* Contact Info Box */}
                        <div className="bg-[#F8C32C] p-6 rounded-xl space-y-6 text-gray-800 border-dashed border-white">
                            <div className='border border-dashed border-gray-100 p-6 rounded-xl space-y-6'>
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="mmt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold"> Address</h4>
                                        <p>408/445, Raza Bazar, Bogura Sadar,
                                        Bogura, Bangladesh</p>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex items-start space-x-4">
                                    <FaEnvelope className="mt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold">Contact Us</h4>
                                        <p>paikerfoods@gmail.com<br />Call Us 24/7: +1 987 654 3210</p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <FaClock className="mt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold">Working Hours</h4>
                                        <p>Mon - Fri: 8.00am - 18.00pm<br />Sat: 9.00am - 17.00pm Holidays: Closes</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div>
                        <div className='flex justify-between'>
                            <h2 className="text-green-700 font-medium mb-1">Let's Cooperate Together</h2>
                            <img src={icon2} alt="icon2" className='opacity-30' />
                        </div>
                        <p className="mb-6 text-sm">We will reply you within 24 hours via email, thank you for contacting</p>
                        <img src={icon} alt="icon" />
                        <form className="space-y-4 mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                                <input type="email" placeholder="Email*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Phone Number*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                                <select className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100">
                                    <option>You need support?</option>
                                    <option>General Inquiry</option>
                                    <option>Partnership</option>
                                    <option>Technical Help</option>
                                </select>
                            </div>
                            <textarea placeholder="Message..." rows="5" className="w-full p-5 rounded-xl bg-gray-100 resize-none"></textarea>
                            <div className="md:flex justify-between space-y-6 md:space-y-0">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="terms" className="accent-yellow-500" required />
                                    <label htmlFor="terms" className="text-sm">Agree to our terms and conditions</label>
                                </div>

                                <button type="submit" className="bg-green-900 hover:bg-green-800 text-white flex items-center space-x-4 px-6 py-3 rounded-full">
                                    <span>Send Message</span>
                                    <span className="bg-[#F8C32C]  text-black rounded-full p-2 w-10 h-10 font-bold">&rarr;</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

            <img
                src={bg}
                alt="bg"
                className='mt-10'
            />

        </div>
    );
};

export default GetTauch;
