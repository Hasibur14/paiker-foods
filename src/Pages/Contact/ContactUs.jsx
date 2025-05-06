import React from 'react'
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png'
import GetTauch from '../Home/Section/GetTauch';
import Brands from '../../components/Brands/Brands';



const ContactUs = () => {
    return (
        <div className='space-y-5 '>
            <BannerTitle
                bannerImg={banner}
                subTitle='Contact Us'
                title="Contact" />

            <GetTauch />
            <Brands />
        </div>
    )
}

export default ContactUs;