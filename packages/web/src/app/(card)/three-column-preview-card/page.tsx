// VehicleTypeFeatures.tsx
import React from 'react';
import { lexend_deca, big_shoulder_display } from '@/app/font';
import SizeIndicator from '@/utils/size-indicator';
import vehicleOptions from '@/app/three-column-preview-card/vehicle-data';
import VehicleTypeCard from '@/app/three-column-preview-card/vehicle-card';

const VehicleTypeFeatures: React.FC = () => {
    return (
        <div className={`${lexend_deca.className} flex flex-col items-center justify-center`}>
            <SizeIndicator />
            <div className="flex flex-col md:flex-row gap-0 xl:w-7/12 lg:w-8/12 md:w-10/12 overflow-y-auto justify-center items-center md:items-center h-full md:min-h-screen">
                {vehicleOptions.map(option => (
                    <VehicleTypeCard key={option.title} option={option} />
                ))}
            </div>
        </div>
    );
}

export default VehicleTypeFeatures;
