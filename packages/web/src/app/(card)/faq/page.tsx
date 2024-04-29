import React from 'react';
import Image from 'next/image';
import starIcon from 'public/faq/icon-star.svg'
import FaqItem from './faq-item';
import { faqs } from './data';
import { work_sans } from '@/app/font';
import style from './styles.module.css'
import Background from './backround';


export default function FaqPage() {
    return (
        <div className={`${work_sans.className} relative w-full h-screen overflow-hidden bg-light-pink ${work_sans.className}`}>
            <Background />

            <div className='absolute top-0 z-10 w-full h-screen flex items-center justify-center flex-col'>
                <div className={`w-10/12 md:w-8/12 lg:w-5/12 bg-white rounded-lg shadow-lg flex flex-col pt-8 px-8 pb-2 overflow-auto ${style.customScrollbar}`}>
                    <div className='flex items-center gap-4'>
                        <Image src={starIcon} alt="starIcon" className='text-lg md:text-2xl' />
                        <span className='lg:mr-4 md:mr-4 text-3xl md:text-5xl font-bold text-dark-purple mr-8'>FAQs</span>
                    </div>
                    <div className='flex flex-col items-center mt-8'>
                        {faqs.map((item, index) => (
                            <FaqItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
