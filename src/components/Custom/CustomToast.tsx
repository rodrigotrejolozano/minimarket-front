import React, { useEffect, useState } from 'react';

interface CustomToastProps {
    message: string;
    type: 'success' | 'error' | 'warning';
    duration?: number;
}

const CustomToast: React.FC<CustomToastProps> = ({ message, type, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => setIsVisible(false), 500);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!isVisible) return null;

    return (
        <div className={`z-40
            fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md 
            text-white font-semibold shadow-md transition-all duration-500
            ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}
            ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-yellow-500'}
        `}>
            {message}
        </div>
    );
};

export default CustomToast;
