'use client'
import { useState } from 'react';

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<null | string>(null);

    const options = ['Option 1', 'Option 2', 'Option 3'];

    return (
        <div className="relative shadow-custom">
            <button onClick={() => setIsOpen(!isOpen)} className="relative z-10 block bg-white text-geo-dtext dark:bg-geo-blue dark:text-white rounded p-2 w-64 text-left">
                <div className="flex justify-between items-center">
                    <span>{selectedOption || 'Filter by region'}</span>
                    <svg className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <ul className="absolute z-20 mt-2 w-64 bg-white dark:bg-geo-blue rounded shadow-custom">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => { setSelectedOption(option); setIsOpen(false); }}
                            className="cursor-pointer hover:bg-blue-500 hover:text-white p-2"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default CustomSelect;