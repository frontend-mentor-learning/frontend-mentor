'use client'
import Image from 'next/image';
import mobileIllustration from 'public/newsletter-signup/illustration-sign-up-mobile.svg';
import desktopIllustration from 'public/newsletter-signup/illustration-sign-up-desktop.svg';
import { useEffect, useState } from 'react';

export default function DynamicImage() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let imageSrc = windowWidth && windowWidth > 768 ? desktopIllustration : mobileIllustration;

    return (
        <Image
            src={imageSrc}
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            className="z-0 md:h-3/6"
            height={windowWidth && windowWidth > 768 ? 500 : 300}
        />
    );
}
