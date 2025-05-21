import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { LiaSquareFullSolid } from "react-icons/lia";
import Button from "../Button/Button";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Hero = () => {

    const axiosPublic = useAxiosPublic();


    const { data: sliderData = [], isLoading } = useQuery({
        queryKey: ["hero"],
        queryFn: async () => {
            const res = await axiosPublic.get("/hero");
            return res.data;
        },
    });



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



    if (isLoading) return <LoadingSpinner />

    return (
        <div className="absolute w-full mx-auto lg:top-0">
            <div className="relative font-outfit">
                {/* Slider Section */}
                <div
                    ref={sliderRef}
                    className="relative keen-slider h-auto"
                >
                    {sliderData?.map((slide) => (
                        <div
                            key={slide._id}
                            className={`keen-slider__slide number-slide relative inset-0`}
                        >
                            <img
                                className="w-full h-[50vh] md:h-[80vh] lg:h-[100vh] object-cover "
                                src={slide.image}
                                alt={slide.title}
                            />
                            <div className="absolute  inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/20 flex flex-col text-center items-center justify-center space-y-10 px-10 md:px-14 lg:px-20">
                                <h2 className="font-shadows tracking-[5px] text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white max-w-4xl  lg:mt-32">
                                    {slide.title}
                                </h2>
                                <p className="font-mulish text-md sm:text-lg md:text-2xl text-gray-300 max-w-5xl animate__animated animate__fadeInUp">
                                    {slide.description}
                                </p>
                                <Button
                                    to="/products"
                                    text="Explore Our Products"
                                    className=""
                                />
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