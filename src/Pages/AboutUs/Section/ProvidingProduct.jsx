import React from 'react';
import icon from '../../../assets/home/getTauch-1.png';
import Container from '../../../components/Container/Container';

// JSON data for the component
const providingProductData = {
    icon: icon,
    title: "We will reply you within 24 hours via email, thank you for contacting",
    heading: "Providing The Finest Products To The Best Feed Suppliers.",
    paragraphs: [
        "Appropriately disintermediate client-focused manufactured products after transparent materials. Holisticly envisioneer vertical web services after global content. Proactively fashion competitive paradigms for flexible.",
        "Quickly foster long-term high-impact customer service rather than leading-edge e-markets. Enthusiastically restore multimedia based applications without low-risk high-yield e-commerce. Objectively aggregate compelling metrics via cost effective functionalities.",
        "Authoritatively develop cross functional networks through go forward relationships. Energistically restore timely human capital for installed base process improvements. Professionally aggregate long-term high-impact manufactured products and resource."
    ]
};

const ProvidingProduct = () => {
    return (
        <div className="py-8 md:py-12 lg:py-16">
            <Container>

                {/* Content section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 ">
                    <div className='lg:w-1/2'>
                        <img
                            src={providingProductData.icon}
                            alt='icon'
                            className="w-12 h-auto"
                        />

                        {/* Thank you message */}
                        <h2 className="mt-4 mb-6 text-sm font-semibold text-primary-light md:text-base">
                            {providingProductData.title}
                        </h2>
                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl ">
                            {providingProductData.heading}
                        </h2>

                    </div>

                    {/* Paragraphs - Right Column (50%) */}
                    <div className="space-y-4 text-gray-600 md:text-base lg:w-1/2 lg:text-justify">
                        {providingProductData.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProvidingProduct;