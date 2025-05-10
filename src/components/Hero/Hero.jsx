import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slider1 from '../../assets/hero/banner3.png'
import slider2 from '../../assets/hero/banner1.png'
import slider3 from '../../assets/hero/banner4.png'
import { Link } from "react-router-dom";
import { LiaSquareFullSolid } from "react-icons/lia";

const Hero = () => {
    const sliderData = [
        {
            _id: 1,
            image: slider1,
            title: "Fresh Fruits, Straight from the Orchard!",
            description: "Enjoy nature's sweetness with our handpicked apples, juicy mangoes, and ripe bananas delivered fresh from trusted local farms to your table.",
        },
        {
            _id: 2,
            image: slider2,
            title: "Organic Goodness in Every Bite!",
            description: "Savor the taste of health with our chemical-free fruits and vegetables, grown sustainably to nourish your body and delight your senses.",
        },
        {
            _id: 3,
            image: slider3,
            title: "Global Taste, Local Roots!",
            description: "From tropical pineapples to Mediterranean olives, we bring you a world of fresh flavors sourced ethically and delivered with care.",
        },
    ];


    // Slider with auto-play
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, sliderInstance] = useKeenSlider(
        {
            loop: true,
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel);
            },
        },
        [
            (slider) => {
                let timeout;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 5000);
                }
                slider.on("created", () => {
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <div className="absolute w-full mx-auto lg:top-0">
            <div className="relative font-outfit">
                {/* Slider Section */}
                <div
                    ref={sliderRef}
                    className="relative keen-slider h-auto"
                >
                    {sliderData.map((slide, index) => (
                        <div
                            key={slide._id}
                            className={`keen-slider__slide number-slide relative inset-0`}
                        >
                            <img
                                className="w-full h-[50vh] sm:h-[60vh] md:h-[100vh] object-cover"
                                src={slide.image}
                                alt={slide.title}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col text-center items-center justify-center space-y-4 lg:space-y-10 px-6 sm:px-8 lg:px-20">
                                <h2 className="font-shadows tracking-[5px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white max-w-4xl  lg:mt-32">
                                    {slide.title}
                                </h2>
                                <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300 max-w-5xl animate__animated animate__fadeInUp">
                                    {slide.description}
                                </p>
                                <Link to='/products'>
                                    <button className="rounded relative inline-flex group items-center justify-center px-3 lg:px-8 py-2 lg:py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-second-light active:shadow-none shadow-lg bg-gradient-to-tr from-second-light to-second-light border-second-deep text-gray-900 font-semibold text-md">
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                        <span className="relative uppercase">Explore Our Products</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute left-2 md:left-[6%] top-1/2 transform -translate-y-1/2 z-10">
                    <div className="flex flex-col space-y-4">
                        {sliderData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => sliderInstance.current?.moveToIdx(idx)}
                                className={`text-md md:text-xl font-bold ${currentSlide === idx ? "text-[#31c52c]" : "text-white"}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            >
                                <LiaSquareFullSolid />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;