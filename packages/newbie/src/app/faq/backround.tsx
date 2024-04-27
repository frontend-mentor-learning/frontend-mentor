'use client'
import Image from 'next/image';
import desktopBg from 'public/faq/background-pattern-desktop.svg';
import mobileBg from 'public/faq/background-pattern-mobile.svg';
import { useEffect, useState } from 'react';

export default function Background() {
    // Define windowWidth to accept number or null
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        function handleResize() {
            // Set the inner width of the window
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Set the initial width

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Choose the image based on the window width, handling the initial null case
    const imageSrc = windowWidth && windowWidth > 768 ? desktopBg : mobileBg;

    return (
        <Image
            src={imageSrc}
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            className="z-0"
            height={500}
        />
    );
}
