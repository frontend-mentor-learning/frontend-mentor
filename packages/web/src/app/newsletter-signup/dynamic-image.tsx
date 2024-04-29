'use client'
import Image from 'next/image';
import mobileIllustration from 'public/newsletter-signup/illustration-sign-up-mobile.svg';
import desktopIllustration from 'public/newsletter-signup/illustration-sign-up-desktop.svg';
import { useEffect, useState } from 'react';

export default function DynamicImage() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        // Set the initial window width on mount
        setWindowWidth(window.innerWidth);

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Set up the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // The empty array ensures this effect only runs on mount and unmount

    const imageSrc = windowWidth && windowWidth > 768 ? desktopIllustration : mobileIllustration;

    return (
        <Image
            src={imageSrc}
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            className="z-0"
        />
    );
}
