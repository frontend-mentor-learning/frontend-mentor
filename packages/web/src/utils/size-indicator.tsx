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
        <div className={`fixed h-screen left-0 top-0 right-0 bottom-0`}>
            <span className='w-full mx-auto'>{size} - {category}</span>
        </div>
    );
};

export default SizeIndicator;
