'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import plusIcon from 'public/faq/icon-plus.svg';
import minusIcon from 'public/faq/icon-minus.svg';

export interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.setTimeout(() => { // Added to ensure the height is updated after any DOM changes
            setHeight(isOpen ? contentRef.current?.scrollHeight as number : 0);
        }, 50);
    }, [isOpen]);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='mb-4 w-full'>
            <div className='flex justify-between items-center' onClick={toggle} style={{ cursor: 'pointer' }}>
                <p className='font-bold text-dark-purple'>{question}</p>
                <Image src={isOpen ? minusIcon : plusIcon} alt={isOpen ? "Collapse" : "Expand"} className="hover:cursor-pointer ml-10 md:ml-8" />
            </div>
            <div ref={contentRef} style={{ height: `${height}px` }} className='overflow-hidden transition-height duration-500 ease-in-out'>
                <div className={`mt-4 mb-4 text-sm text-grayish-purple leading-6 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
