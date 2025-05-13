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
            description: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        },
        {
            _id: 2,
            image: icon2,
            title: "100% Organic Products",
            description: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        },
        {
            _id: 3,
            image: icon3,
            title: "Absolute Quality",
            description: "Appropriately actualize error-free niches via efficient alignments. Professionally evolve inexpensive."
        }
    ]

    return (
        <div className="md:pt- lg:pt-16">
            <Container>
                <div className='bg-gradient-to-t from-[#0D421D] to-[#1C6831] rounded-2xl p-4 md:p-8'>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-4 lg:gap-10 border border-dashed rounded-2xl px-3 md:px-8 py-8 md:py-14">
                        {aboutData.map((item, index) => (
                            <div key={item._id} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                                <div className="flex flex-col items-center text-center max-w-md space-y-4 px-4 md:px-0">
                                    <img
                                        className="bg-white p-5 md:p-7 rounded-full w-24 h-24 md:w-28 md:h-28 "
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <h2 className="font-shadows text-xl md:text-2xl lg:text-4xl text-second-light">{item.title}</h2>
                                    <p className="text-white text-sm md:text-md">{item.description}</p>
                                </div>

                                {/* Divider - shows only between items in tablet+ view */}
                                {index !== aboutData.length - 1 && (
                                    <div className="hidden md:flex items-center">
                                        <div className="border-l md:border-l-0 md:border-t border-dashed border-gray-300 h-20 md:h-full md:w-0 mx-4 md:mx-0 md:my-4"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;