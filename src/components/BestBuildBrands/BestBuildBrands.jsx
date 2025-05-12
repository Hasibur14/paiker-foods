import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "../../assets/brandsBG.png";
import { useEffect, useState } from 'react';


const BestBuildBrands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('./brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            {/* Swiper will render only when clients are available */}
            {brands?.length > 0 && (
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={3000}
                    modules={[Autoplay]}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 7,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    className="my-8"
                >
                    {brands.map((brand) => (
                        <SwiperSlide key={brand._id}>
                            <div className="flex justify-center items-center p-2">
                                <img
                                    src={brand.image}
                                    alt={brand.title}
                                    className="max-h-36 object-contain hover:opacity-75 transition-opacity duration-300"
                                    loading="lazy"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default BestBuildBrands;
