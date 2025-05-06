import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "../../assets/brandsBG.png";


const Brands = () => {



    return (
        <div
            className="py-16 px-[3%] bg-gradient-to-t from-zinc-50 to-stone-50 "
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Swiper will render only when clients are available */}
            {data?.length > 0 && (
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
                            slidesPerView: 3,
                            spaceBetween: 7,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                    className="my-8"
                >
                    {data.map((brand) => (
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

export default Brands;


const data = [
    {
        "_id"
            :
            "680dab75488ba8ef68f5f709",
        "image"
            :
            "https://i.postimg.cc/gJ8S4Xpz/Frame-36.pngImage preview",
        "title"
            :
            "Robi"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70a",
        "image"
            :
            "https://i.postimg.cc/GmmfrmFK/Frame-34.pngImage preview",
        "title"
            :
            "Bata"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70b",
        "image"
            :
            "https://i.postimg.cc/4y18kDnj/Frame-38.pngImage preview",
        "title"
            :
            "Walton"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70c",
        "image"
            :
            "https://i.postimg.cc/FHCBKXG4/Frame-32.pngImage preview",
        "title"
            :
            "Client"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70d",
        "image"
            :
            "https://i.postimg.cc/6Q712b1G/Frame-33.pngImage preview",
        "title"
            :
            "Client"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70e",
        "image"
            :
            "https://i.postimg.cc/R0jpc1jp/Frame-35.pngImage preview",
        "title"
            :
            "Client"
    },
    {
        "_id"
            :
            "680dab75488ba8ef68f5f70f",
        "image"
            :
            "https://i.postimg.cc/XqW2PjNw/Frame-37.pngImage preview",
        "title"
            :
            "Client"
    }
]