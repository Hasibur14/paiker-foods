import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../../components/Container/Container';

const timelineData = [
    { year: '1906', title: 'Open Farm' },
    { year: '1920', title: 'Farm Remodelacion' },
    { year: '1925', title: 'Grainfarmers Formed' },
    { year: '1930', title: 'Start of Agriculture' },
    { year: '1930', title: 'Start of Agriculture' }
];

const Timeline = () => {
    return (
        <div className="py-16 bg-gray-50">
            <Container>
                {/* Header */}
                <div className='md:flex justify-between mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-6 md:mb-0'>Farming have been<br />since 1866</h2>
                    <p className='md:w-1/2 text-gray-600 text-lg'>
                        Assertively formulate cross-platform sources rather than virtual results. Efficiently innovate revolutionary process improvements before distinctive "outside the box" thinking. Monotonectally conceptualize market.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Background timeline line */}
                    <motion.div
                        className="absolute left-0 right-0 top-[52px] h-1 bg-primary-light"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    />

                    <div className="relative flex justify-between items-start pt-10">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center relative z-10"
                                style={{ width: `${100 / timelineData.length}%` }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.5 }}
                            >
                                {/* Dot */}
                                <motion.div
                                    className="w-6 h-6 bg-white border-4 border-green-700 rounded-full mx-auto mb-4 flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: index * 0.5 + 0.5,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10
                                    }}
                                >
                                    <motion.div
                                        className="w-3 h-3 bg-green-500 rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: index * 0.5 + 0.7 }}
                                    />
                                </motion.div>

                                {/* Text */}
                                <div className="text-center px-2">
                                    <motion.h3
                                        className="text-3xl md:text-4xl lg:text-6xl font-bold text-green-700 mt-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.5 + 0.6 }}
                                    >
                                        {item.year}
                                    </motion.h3>
                                    <motion.p
                                        className="text-md md:text-lg font-medium mt-2 text-gray-700"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.5 + 0.7 }}
                                    >
                                        {item.title}
                                    </motion.p>
                                </div>

                                {/* Connector line animation - only between dots */}
                                {index < timelineData.length - 1 && (
                                    <motion.div
                                        className="absolute top-3 left-1/2 h-1 bg-green-600 origin-left"
                                        style={{ width: '100%' }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{
                                            delay: index * 0.3+ 0.8,
                                            duration: 0.7
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Timeline;