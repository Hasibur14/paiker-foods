import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/contact/getTauchBg.png';
import ContactForm from '../../Contact/ContactForm';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const GetTauch = () => {

    const axiosPublic = useAxiosPublic()

    const { data: contactData = [], isLoading } = useQuery({
        queryKey: ["Contact"],
        queryFn: async () => {
            const res = await axiosPublic.get("/contact");
            return res.data[0];
        },
    });
    const { address, email, phone, mapSrc, whatsapp, hours } = contactData;

    if (isLoading) return <LoadingSpinner />

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
                                        <h4 className="font-semibold">Office Hours</h4>
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
