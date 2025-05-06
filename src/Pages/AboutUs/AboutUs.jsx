import React from 'react'
import banner from '../../assets/titleBG.png'
import BannerTitle from '../../components/BannerTitle/BannerTitle'
import Info from './Section/Info'
import ProvidingProduct from './Section/ProvidingProduct'
import MissionVision from './Section/MissionVision'

const AboutUs = () => {
    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle='About Us'
                title="About Paiker Foods" />

            <Info />
            <ProvidingProduct />
            <MissionVision />
        </div>
    )
}

export default AboutUs