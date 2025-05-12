import banner from '../../assets/titleBG.png'
import BannerTitle from '../../components/BannerTitle/BannerTitle'
import Info from './Section/Info'
import ProvidingProduct from './Section/ProvidingProduct'
import MissionVision from './Section/MissionVision'
import FreshnessCommitment from './Section/FreshnessCommitment'
import Timeline from '../Home/Section/Timeline'
import MDMessage from './Section/MDMessage'
import OurTeam from './Section/OurTeam'
import Brands from '../../components/Brands/Brands'

const AboutUs = () => {
    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle='About Us'
                title="About Paiker Foods" />

            <Info />
            <ProvidingProduct />
            <Timeline />
            <MissionVision />
            <MDMessage />
            <OurTeam />
            <FreshnessCommitment />
            <Brands />
        </div>
    )
}

export default AboutUs