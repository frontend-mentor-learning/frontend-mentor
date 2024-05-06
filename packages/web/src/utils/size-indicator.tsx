'use client';
import { useState, useEffect } from 'react';

interface SizeIndicatorProps {
    color?: string;
}

const SizeIndicator = ({ color = 'gray' }: SizeIndicatorProps) => { // Default props can be set directly in the destructuring
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSize(width + 'px');
                setCategory('Small');
            } else if (width >= 640 && width < 768) {
                setSize(width + 'px');
                setCategory('Medium');
            } else if (width >= 768 && width < 1024) {
                setSize(width + 'px');
                setCategory('Large');
            } else {
                setSize(width + 'px');
                setCategory('Extra Large');
            }
        };

        window.addEventListener('resize', updateSize);
        updateSize();  // Initial call

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4 p-2 bg-gray-200 text-${color} rounded-lg text-sm font-medium z-10`}>
            {size} - {category}
        </div>
    );
};

export default SizeIndicator;
