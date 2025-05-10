import React from 'react';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/About/MDmessage.png'

const MDMessage = () => {
    return (
        <div className='bg-base-100 my-8 md:my-16'>
            <Container>
                <div className="lg:mt-48 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl lg:rounded-2xl px-5 lg:pl-[7%]"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    {mdData.map((item) => (
                        <div
                            key={item._id}
                            className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-0"
                        >
                            {/* Text Content */}
                            <div
                                className='flex items-center w-full lg:w-1/2 py-6 lg:py-10'
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <div className="text-center lg:text-left">
                                    <img
                                        src={item.signature}
                                        alt="signature"
                                        className="w-32 md:w-40 mx-auto lg:mx-0 mb-4"
                                    />
                                    <h3 className='text-lg md:text-xl font-bold text-white'>{item.honorific}</h3>
                                    <h2 className='text-second-light text-2xl md:text-4xl font-bold'>{item.name}</h2>
                                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-3 md:my-5 text-white">
                                        {item.designation}
                                    </h1>
                                    <p className="py-4 md:py-6 text-white text-sm md:text-base">
                                        If you have a specific doctor in mind, select their name from the list of available doctors.
                                        If not, the system may assign you to the first available physician.
                                        Some portals may require you to provide a brief description of the reason for your visit.
                                        This helps the doctor prepare for your appointment.
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div
                                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                                data-aos="fade-up"
                                data-aos-duration="3000"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-[300px] md:h-[500px] lg:h-[700px] -mt-20 lg:-mt-40 rounded-lg lg:rounded-xl object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default MDMessage;

const mdData = [
    {
        "_id": "1",
        "title": "Message From MD",
        "name": "Prof. Dr. XYZ Rahman",
        "designation": "Managing Director",
        "honorific": "Honorable",
        "message": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce laoreet lectus in velit euismod. Praesent fermentum dignissim sapien ornare sagittis. Cras erat lorem, vulputate non magna ac, molestie bibendum felis.",
        "image": "https://i.postimg.cc/mZdtPfYy/IMG-20240714-031040-049-removebg-preview-1-3.png",
        "signature": "https://i.postimg.cc/qgHC72KZ/Signature-PNG-Photos-1.png"
    }
]