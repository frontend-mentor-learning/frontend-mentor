// VehicleTypeCard.tsx
import React from 'react';
import Image from 'next/image';
import { VehicleOption } from './vehicle-data'; // Assuming the interface is exported

interface VehicleTypeCardProps {
    option: VehicleOption;
}

const VehicleTypeCard: React.FC<VehicleTypeCardProps> = ({ option }) => {
    return (
        <div className={`rounded-t-lg w-10/12 mt-8 md:m-0 md:w-full ${option.bgClass} px-16 py-8 md:p-8 md:rounded-tl-lg md:rounded-bl-lg flex flex-col items-start md:rounded-tr-none`}>
            <Image src={option.icon} alt={`${option.title} Icon`} />
            <h1 className="my-8 text-5xl font-bold text-white">{option.title}</h1>
            <p className='font-medium text-sm leading-8 text-transparent-white mb-8 md:mb-16'>{option.description}</p>
            <button className={`border-2 border-white hover:text-white hover:bg-${option.bgColor} rounded-full bg-white text-${option.bgColor} px-5 py-2 md:px-5 md:py-2`}>Learn More</button>
        </div>
    );
}

export default VehicleTypeCard;
