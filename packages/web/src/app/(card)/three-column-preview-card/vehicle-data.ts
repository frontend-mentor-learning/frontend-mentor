// VehicleData.ts
import sedanIcon from 'public/pricing-column/icon-sedans.svg';
import suvIcon from 'public/pricing-column/icon-suvs.svg';
import luxuryIcon from 'public/pricing-column/icon-luxury.svg';

export interface VehicleOption {
    bgClass: string;
    icon: any;
    title: string;
    description: string;
    bgColor: string;
}

const vehicleOptions: VehicleOption[] = [
    {
        bgClass: "bg-bright-orange",
        icon: sedanIcon,
        title: "SEDANS",
        description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        bgColor: "bright-orange"
    },
    {
        bgClass: "bg-dark-cyan",
        icon: suvIcon,
        title: "SUVS",
        description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        bgColor: "dark-cyan"
    },
    {
        bgClass: "bg-very-dark-cyan",
        icon: luxuryIcon,
        title: "LUXURY",
        description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        bgColor: "very-dark-cyan"
    }
];

export default vehicleOptions;
