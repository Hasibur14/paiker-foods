import React from 'react'
import banner from '../../assets/titleBG.png'
import BannerTitle from '../../components/BannerTitle/BannerTitle'
import Info from './Section/Info'
import ProvidingProduct from './Section/ProvidingProduct'
import MissionVision from './Section/MissionVision'
import About from '../Home/Section/About'
import FreshnessCommitment from './Section/FreshnessCommitment'
import Timeline from '../Home/Section/Timeline'
import GetTauch from '../Home/Section/GetTauch'

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
            <About />
            <FreshnessCommitment />
            <Timeline />
            <GetTauch />
        </div>
    )
}

export default AboutUs