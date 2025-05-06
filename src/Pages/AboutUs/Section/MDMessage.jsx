import React from 'react';
import Container from '../../../components/Container/Container';


const MDMessage = () => {
    return (
        <div className='bg-gray-50 my-16'>
            <Container>
                <div className="lg:mt-48 bg-gradient-to-r from-green-700 to-emerald-700 rounded-2xl pl-[7%]">
                    {
                        mdData.map((item) => (
                            <div
                                key={item._id}
                                className="flex flex-col-reverse lg:flex-row justify-between">
                                <div className=' flex items-center lg:w-1/2 py-10 '
                                 data-aos="fade-up" 
                                 data-aos-duration="3000">
                                    <div className="">
                                        <img src={item.signature} alt="signature" />
                                        <h3 className=' text-xl font-bold'>{item.honorific}</h3>
                                        <h2 className='text-second-light text-4xl font-bold'>{item.name}</h2>
                                        <h1 className="text-2xl md:text-5xl font-bold my-5 text-white">{item.designation}</h1>
                                        <p className="py-6 text-white"> If you have a specific doctor in mind, select their name from the list of available doctors. If not, the system may assign you to the first available physician.Some portals may require you to provide a brief description of the reason for your visit. This helps the doctor prepare for your appointment.</p>
                                    </div>
                                </div>

                                <div className="w-4/6 flex justify-end " data-aos="fade-up" data-aos-duration="3000">
                                    <img
                                        src={item.image}
                                        alt=''
                                        className="-mt-40 h-[700px] rounded-xl" />
                                </div>
                            </div>
                        ))
                    }
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

