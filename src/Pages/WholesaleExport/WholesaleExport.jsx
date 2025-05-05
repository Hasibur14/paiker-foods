import React from 'react'
import Container from '../../components/Container/Container'
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png';

const WholesaleExport = () => {
    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle='Wholesale & Export'
                title="Wholesale & Export" />

            <Container>
                <h2 className='text-rose-600 animate-pulse text-center'>Comming...</h2>
            </Container>
        </div>
    )
}

export default WholesaleExport