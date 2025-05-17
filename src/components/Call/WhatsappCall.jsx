import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const WhatsappCall = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPulsing, setIsPulsing] = useState(true);

    // Color theme
    const colors = {
        light: "#f4c517",
        deep: "#e47125"
    };

    // WhatsApp phone number (include country code without +)
    const whatsappNumber = "8801844185480";

    // Toggle expanded state
    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    // Handle WhatsApp click action
    const handleWhatsappClick = () => {
        // Check if device is mobile
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Open WhatsApp call on mobile devices
            window.open(`whatsapp://send?phone=${whatsappNumber}`);
        } else {
            // Open WhatsApp web on desktop
            window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}`, '_blank');
        }
    };

    // Pulse animation effect
    useEffect(() => {
        const pulseInterval = setInterval(() => {
            setIsPulsing(prev => !prev);
        }, 1500);

        return () => clearInterval(pulseInterval);
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-[9999]">
            {/* Ripple effect circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`absolute rounded-full opacity-70 ${isPulsing ? 'animate-ping' : ''}`}
                    style={{
                        backgroundColor: colors.light,
                        width: '120%',
                        height: '120%',
                        animationDuration: '1.5s'
                    }}
                />
                <div className={`absolute rounded-full opacity-50 ${isPulsing ? 'animate-ping' : ''}`}
                    style={{
                        backgroundColor: colors.light,
                        width: '140%',
                        height: '140%',
                        animationDuration: '1.8s',
                        animationDelay: '0.2s'
                    }}
                />
            </div>

            {/* Main button */}
            <button
                onClick={handleWhatsappClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative flex items-center justify-center overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                style={{
                    background: `linear-gradient(135deg, ${colors.light}, ${colors.deep})`,
                    width: isExpanded ? '160px' : '56px',
                    height: '56px',
                }}
            >
                <div className={`flex items-center justify-center transition-all duration-300 ${isExpanded ? 'gap-2' : 'gap-0'}`}>
                    <Phone
                        size={24}
                        className="text-white animate-bounce"
                        style={{ animationDuration: '1s', animationIterationCount: 'infinite' }}
                    />
                    <span
                        className={`text-white font-medium whitespace-nowrap transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}
                        style={{ transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)' }}
                    >
                        Call Us
                    </span>
                </div>
            </button>
        </div>
    );
}

export default WhatsappCall;