import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Container from '../../../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Timeline = () => {
    const axiosPublic = useAxiosPublic();
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const controls = useAnimation();

    const { data: timelineData = [], isLoading } = useQuery({
        queryKey: ['timeLine'],
        queryFn: async () => {
            const res = await axiosPublic.get('/time-line');
            return res.data;
        },
    });

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Trigger animation when both data is loaded and component is in view
    useEffect(() => {
        if (isInView && !isLoading && timelineData.length > 0 && !animationTriggered) {
            controls.start("visible");
            setAnimationTriggered(true);
        }
    }, [isInView, isLoading, timelineData, controls, animationTriggered]);

    return (
        <div ref={ref} className="py-16">
            <Container>
                {/* Header */}
                <div className="md:flex md:items-start md:justify-between gap-8 mb-16">
                    {/* Left - Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0 md:w-1/2">
                        Farming have been<br />since 1866
                    </h2>

                    {/* Right - Description */}
                    <p className="md:w-1/2 text-gray-600 text-lg">
                        Assertively formulate cross-platform sources rather than virtual results. Efficiently innovate revolutionary process improvements before distinctive "outside the box" thinking. Monotonectally conceptualize market.
                    </p>
                </div>

                {/* Show loading state */}
                {isLoading && (
                    <div className="flex justify-center items-center py-16">
                        <div className="w-12 h-12 border-4 border-green-700 rounded-full border-t-transparent animate-spin"></div>
                    </div>
                )}

                {/* Timeline */}
                {!isLoading && timelineData.length > 0 && (
                    <div className="relative">
                        {/* Background timeline line */}
                        <motion.div
                            className="absolute left-0 right-0 top-[52px] h-1 bg-primary-light"
                            initial={{ scaleX: 0 }}
                            animate={controls}
                            variants={{
                                visible: { scaleX: 1 }
                            }}
                            transition={{ duration: 2, delay: 0.5 }}
                        />

                        <div className="relative flex justify-between items-start pt-10">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center relative z-10"
                                    style={{ width: `${100 / timelineData.length}%` }}
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                    variants={{
                                        visible: { opacity: 1, transition: { delay: index * 0.2 } }
                                    }}
                                >
                                    {/* Dot */}
                                    <motion.div
                                        className="w-6 h-6 bg-white border-4 border-green-600 rounded-full mx-auto mb-4 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={controls}
                                        variants={{
                                            visible: {
                                                scale: 1,
                                                transition: {
                                                    delay: index * 0.2 + 0.2,
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 10
                                                }
                                            }
                                        }}
                                    >
                                        <motion.div
                                            className="w-3 h-3 bg-green-600 rounded-full"
                                            initial={{ scale: 0 }}
                                            animate={controls}
                                            variants={{
                                                visible: {
                                                    scale: 1,
                                                    transition: { delay: index * 0.2 + 0.3 }
                                                }
                                            }}
                                        />
                                    </motion.div>

                                    {/* Text */}
                                    <div className="text-center px-2">
                                        <motion.h3
                                            className="text-lg md:text-4xl lg:text-6xl font-bold text-green-700 mt-2"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={controls}
                                            variants={{
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: index * 0.2 + 0.4 }
                                                }
                                            }}
                                        >
                                            {item.year}
                                        </motion.h3>
                                        <motion.p
                                            className="text-xs md:text-lg font-medium mt-2 text-gray-700"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={controls}
                                            variants={{
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: index * 0.2 + 0.5 }
                                                }
                                            }}
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>

                                    {/* Connector line animation */}
                                    {index < timelineData.length - 1 && (
                                        <motion.div
                                            className="absolute top-3 left-1/2 h-1 bg-green-600 origin-left"
                                            style={{ width: '100%' }}
                                            initial={{ scaleX: 0 }}
                                            animate={controls}
                                            variants={{
                                                visible: {
                                                    scaleX: 1,
                                                    transition: { delay: index * 0.2 + 0.6, duration: 0.5 }
                                                }
                                            }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Show message if no timeline data */}
                {!isLoading && timelineData.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-gray-600 text-lg">No timeline data available.</p>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Timeline;