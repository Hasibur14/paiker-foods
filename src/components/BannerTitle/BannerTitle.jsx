import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BannerTitle = ({ bannerImg, title, subTitle }) => {
    return (
        <div className="mt-96">
            <div
                className="absolute top-0 grid md:h-72 lg:h-[470px] place-items-center bg-cover bg-no-repeat w-full bg-[#2b2a2acf] bg-blend-overlay"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="font-title space-y-6 lg:space-y-8 py-16 lg:py-2 text-center">
                    <div className="pt-10 lg:pt-44 space-y-3">
                        <div className="flex justify-center gap-1 font-poppins items-center text-base text-white pb-2 md:pb-4">
                            <Link
                                to='/'
                                className="text-[#30eb62] underline">
                                Home
                            </Link>
                            <MdOutlineKeyboardDoubleArrowRight />
                            <h4 >{subTitle}</h4>
                        </div>
                        <h1 className="font-shadows text-white text-2xl md:text-3xl lg:text-5xl ">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTitle;