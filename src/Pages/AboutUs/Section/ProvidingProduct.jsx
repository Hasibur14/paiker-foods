import React from 'react';
import icon from '../../../assets/home/getTauch-1.png';
import Container from '../../../components/Container/Container';

// JSON data for the component
const providingProductData = {
    icon: {
        src: icon,
        alt: "contact-icon"
    },
    thankYouMessage: "We will reply you within 24 hours via email, thank you for contacting",
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
                {/* Icon */}
                <img
                    src={providingProductData.icon.src}
                    alt={providingProductData.icon.alt}
                    className="w-12 h-auto"
                />

                {/* Thank you message */}
                <p className="mt-4 mb-6 text-sm font-semibold text-primary-light md:text-base">
                    {providingProductData.thankYouMessage}
                </p>

                {/* Content section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
                    {/* Heading */}
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl lg:w-2/5 xl:w-1/3">
                        {providingProductData.heading}
                    </h2>

                    {/* Paragraphs - mapped from JSON data */}
                    <div className="space-y-4 text-gray-600 md:text-base lg:w-4/5 xl:w-3/5">
                        {providingProductData.paragraphs.map((paragraph, index) => (
                            <p key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProvidingProduct;