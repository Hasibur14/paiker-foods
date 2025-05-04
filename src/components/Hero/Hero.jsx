import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slider1 from '../../assets/hero/banner3.png'
import slider2 from '../../assets/hero/banner1.png'
import slider3 from '../../assets/hero/banner4.png'
import { Link } from "react-router-dom";

const Hero = () => {
    const sliderData = [
        {
            id: 1,
            image: slider1,
            title: "Bringing Freshness from Farm to Global Markets!",
            description: "Proactively integrate cross-platform products rather than fully tested systems. Energistically.",
        },
        {
            id: 2,
            image: slider2,
            title: "Bringing Freshness from Farm to Global Markets!",
            description: "Proactively pontificate cutting-edge vortals vis-a-vis transparent models. Interactively disseminate open-source.",
        },
        {
            id: 3,
            image: slider3,
            title: "Bringing Freshness from Farm to Global Markets!",
            description: "Compellingly syndicate client-centric web-readiness and revolutionary web services. Monotonectally initiate.",
        },
    ];

    // Slider with auto-play
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            slideChanged(slider) {
                setCurrentIndex(slider.track.details.rel);
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

    // Active slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slider navigation handlers
    const handlePrevious = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };

    return (
        <div className="absolute w-full mx-auto  lg:top-0">
            <div className="relative font-outfit">
                {/* Slider Section */}
                <div
                    ref={sliderRef}
                    className="relative keen-slider  h-auto">
                    {sliderData.map((slide, index) => (
                        <div
                            key={index}
                            className={`keen-slider__slide number-slide relative inset-0`}
                        >
                            <img
                                className="w-full h-[50vh] sm:h-[60vh] md:h-[100vh] object-cover "
                                src={slide.image}
                                alt={slide.title}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col text-center items-center justify-center space-y-4 lg:space-y-10 px-6 sm:px-8 lg:px-20 ">
                                <h2 className="font-shadows text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white max-w-4xl">
                                    {slide.title}
                                </h2>
                                <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300 animate__animated animate__fadeInUp">
                                    {slide.description}
                                </p>
                                <Link to='/products'>
                                    <button class="rounded relative inline-flex group items-center justify-center px-3 lg:px-8 py-2 lg:py-3 m-1 cursor-pointer border-b-4 border-l-2 active:border-second-light active:shadow-none shadow-lg bg-gradient-to-tr from-second-light to-second-light border-second-deep text-gray-900 font-semibold text-md">
                                        <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                        <span class="relative uppercase">Explore Our Products</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute font-cinzel bottom-5 lg:bottom-20 left-0 right-0 flex justify-center items-center space-x-4 w-full z-50">
                    <button
                        onClick={handlePrevious}
                        className="flex  text-white font-semibold px-4 py-2 rounded-full hover:bg-primary-dark"
                        aria-label="Previous Slide"
                    >
                        Prev
                    </button>
                    <div className="border border-gray-400 min-w-14 hidden md:block"></div>
                    <div className="flex justify-center h-5 space-x-4">
                        {sliderData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => instanceRef.current?.moveToIdx(index)}
                                className={`text-md md:text-xl font-bold border-r border-gray-400 px-2 ${currentIndex === index ? "text-primary-light" : "text-white"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                0{index + 1}
                            </button>
                        ))}
                    </div>
                    <div className="border border-gray-400 min-w-14 hidden md:block"></div>
                    <button
                        onClick={handleNext}
                        className=" text-white px-4 py-2 font-semibold rounded-full hover:bg-primary-dark"
                        aria-label="Next Slide"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;