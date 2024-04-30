'use client';
import { useState, useEffect } from 'react';

interface SizeIndicatorProps {
    color?: string;
}
const SizeIndicator = ({ color }: SizeIndicatorProps) => {
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


    color = color || 'gray';
    return (
        
        <div className={`absolute top-0 right-0 m-4 p-2 bg-gray-200 text-${color} rounded-lg text-sm font-medium z-10 `}>
            {size} - {category}
        </div>
    );
};

export default SizeIndicator;
