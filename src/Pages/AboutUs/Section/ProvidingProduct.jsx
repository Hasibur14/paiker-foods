import React from 'react'
import icon from '../../../assets/home/getTauch-1.png'
import Container from '../../../components/Container/Container';

const ProvidingProduct = () => {
    return (
        <div>
            <Container>
                <img src={icon} alt="icon" />
                <p className="mb-6 text-sm font-semibold text-primary-light mt-4">We will reply you within 24 hours via email, thank you for contacting</p>
                <div className='flex justify-between w-full'>
                    <h2 className='text-5xl font-semibold w-1/3'>Providing The Finest
                        Products To The Best
                        Feed Suppliers.</h2>
                    <div className='md:w-1/2 space-y-4 text-gray-600'>
                        <p>Appropriately disintermediate client-focused manufactured products after transparent materials. Holisticly envisioneer vertical web services after global content. Proactively fashion competitive paradigms for flexible.Quickly foster long-term high-impact customer service rather than leading-edge e-markets. Enthusiastically restore multimedia based applications without low-risk high-yield e-commerce. Objectively aggregate compelling metrics via cost effective functionalities.</p>
                        <p>Authoritatively develop cross functional networks through go forward relationships. Energistically restore timely human capital for installed base process improvements. Professionally aggregate long-term high-impact manufactured products and resource.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProvidingProduct;