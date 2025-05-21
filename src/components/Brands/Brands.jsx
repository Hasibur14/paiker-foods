import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import bg from "../../assets/brandsBG.png";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';


const Brands = () => {

    const axiosPublic = useAxiosPublic();

    // Fetch data from the backend
    const { data: brandsData = [], isLoading } = useQuery({
        queryKey: ["brands"],
        queryFn: async () => {
            const res = await axiosPublic.get("/brands");
            return res.data;
        },
    });

    if (isLoading) return <LoadingSpinner />

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
            {brandsData?.length > 0 && (
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
                    {brandsData?.map((brand) => (
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


