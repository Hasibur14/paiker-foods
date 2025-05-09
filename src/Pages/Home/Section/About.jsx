import React from 'react'
import icon1 from '../../../assets/home/leaves 1.png'
import icon2 from '../../../assets/home/leaves 2.png'
import icon3 from '../../../assets/home/leaves 3.png'
import Container from '../../../components/Container/Container'

const About = () => {

    const aboutData = [
        {
            _id: 1,
            image: icon1,
            title: "Environmentally Friendly",
            descrtiption: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        },
        {
            _id: 2,
            image: icon2,
            title: "100% Organic Products",
            descrtiption: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        },
        {
            _id: 3,
            image: icon3,
            title: "Absolute Quality",
            descrtiption: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        }
    ]

    return (
        <Container>
            <div className='bg-gradient-to-t from-[#0D421D] to-[#1C6831] rounded-2xl p-4 md:p-8'>
                <div className="lg:flex justify-center items-center md:space-x-10 space-y-8 md:space-y-0 border border-dashed rounded-2xl px-3 md:px-8 py-14">
                    {aboutData.map((item, index) => (
                        <div key={item._id} className="flex items-center">
                            <div className="flex flex-col items-center text-center max-w-md space-y-4">
                                <img
                                    className="bg-white p-8 rounded-full"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <h2 className="font-shadows text-xl lg:text-4xl text-second-light">{item.title}</h2>
                                <p className="text-white text-md">{item.descrtiption}</p>
                            </div>

                            {/* Divider except for last item */}
                            {index !== aboutData.length - 1 && (
                                <div className="border-l border-dashed border-gray-300 h-60 mx-5 hidden md:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default About;
