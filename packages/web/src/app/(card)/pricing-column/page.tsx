// VehicleTypeFeatures.tsx
import React from 'react';
import { lexend_deca, big_shoulder_display } from '@/app/font';
import SizeIndicator from '@/utils/size-indicator';
import vehicleOptions from './vehicle-data';
import VehicleTypeCard from './vehicle-card';

const VehicleTypeFeatures: React.FC = () => {
    return (
        <div className={`${lexend_deca.className} flex flex-col items-center justify-center`}>
            <div>Refactoring...</div>
            <div className="flex flex-col items-center justify-center h-full gap-0 overflow-y-auto md:flex-row xl:w-7/12 lg:w-8/12 md:w-10/12 md:items-center md:min-h-screen">
                {vehicleOptions.map(option => (
                    <VehicleTypeCard key={option.title} option={option} />
                ))}
            </div>
        </div>
    );
}

export default VehicleTypeFeatures;
