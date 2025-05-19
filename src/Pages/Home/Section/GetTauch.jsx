import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/contact/getTauchBg.png';
import ContactForm from '../../Contact/ContactForm';

const contactData = {
    address: "House-1176, 2nd Floor, Avenue-11, Mirpur DOHS, Dhaka-1216, Bangladesh.",
    phone: "+88-0967-8877667 ",
    whatsapp: "+88-01755690251~53 ",
    email: "marketing@gtl.com.bd",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.350692400587!2d89.37086107607465!3d24.85186934559988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e3b9e72701%3A0xb026409faa8f68c4!2z4Kaw4Ka-4Kac4Ka-IOCmrOCmvuCmnOCmvuCmsCDgprDgp4vgpqEsIOCmrOCml-CngeCmoeCmvOCmvg!5e0!3m2!1sbn!2sbd!4v1746514165428!5m2!1sbn!2sbd",
    mobile: "+88-01755690251~53 ,+88-0191-4067101~3 ",
    hours: {
        weekdays: "Mon - Fri: 8.00am - 18.00pm",
        saturday: "Sat: 9.00am - 17.00pm",
        holidays: "Holidays: Closed"
    }
};


const GetTauch = () => {
    const { address, email, phone, mapSrc, whatsapp, hours } = contactData;

    return (
        <div id="getInTauch">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Map & Contact */}
                    <div>
                        {/* Google Map */}
                        <iframe
                            title="Google Map"
                            src={mapSrc}
                            className="w-full h-64 rounded-lg mb-6"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>

                        {/* Contact Info Box */}
                        <div className="bg-[#F8C32C] p-6 rounded-xl text-gray-800 border-dashed border-white">
                            <div className="border border-dashed border-gray-100 p-6 rounded-xl space-y-6">

                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="mt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold">Address</h4>
                                        <p>{address}</p>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex items-start space-x-4">
                                    <FaEnvelope className="mt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold">Contact Us</h4>
                                        <p>{email}</p>
                                        <p>Call Us 24/7: {phone}</p>
                                        <p>Whatsapp : {whatsapp}</p>

                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <FaClock className="mt-1 text-5xl bg-[#52320A] p-3 rounded-full text-white" />
                                    <div>
                                        <h4 className="font-semibold">Working Hours</h4>
                                        <p>{hours.weekdays}<br />{hours.saturday}<br />{hours.holidays}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <ContactForm />
                </div>
            </Container>

            {/* Background Image */}
            <img src={bg} alt="bg" className="mt-10" />
        </div>
    );
};

export default GetTauch;
