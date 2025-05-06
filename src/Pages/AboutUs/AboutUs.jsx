import React from 'react'
import banner from '../../assets/titleBG.png'
import BannerTitle from '../../components/BannerTitle/BannerTitle'
import Info from './Section/Info'

const AboutUs = () => {
    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle='About Us'
                title="About Paiker Foods" />

            <Info />
        </div>
    )
}

export default AboutUs