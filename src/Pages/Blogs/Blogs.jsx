import React from 'react'
import Container from '../../components/Container/Container'
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png';

const Blogs = () => {
    return (
        <div>
            <BannerTitle
                bannerImg={banner}
                subTitle='Blogs'
                title="Our Blogs" />

            <Container>
                <h2 className='text-rose-600 animate-pulse text-center'>Comming...</h2>
            </Container>
        </div>
    )
}

export default Blogs;