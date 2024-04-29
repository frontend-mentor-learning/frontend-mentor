import sedanIcon from 'public/pricing-column/icon-sedans.svg';
import suvIcon from 'public/pricing-column/icon-suvs.svg';
import luxuryIcon from 'public/pricing-column/icon-luxury.svg';
import Image from 'next/image';
import { lexend_deca, big_shoulder_display } from '@/app/font';
import SizeIndicator from '@/utils/size-indicator';

const PricingColumnPage = () => {
    return (
        <div className={`${lexend_deca.className} flex flex-col items-center justify-center`}>
            <SizeIndicator />
            <div className="flex flex-col md:flex-row gap-0 xl:w-7/12 lg:w-8/12 md:w-10/12 overflow-y-auto justify-center items-center md:items-center h-full md:min-h-screen">

                <div className="rounded-t-lg w-10/12 mt-8 md:m-0 md:w-full bg-bright-orange px-16 py-8 md:p-8 md:rounded-tl-lg md:rounded-bl-lg flex flex-col items-start md:rounded-tr-none">
                    <Image src={sedanIcon} alt="Sedan Icon" />
                    <h1 className={`${big_shoulder_display.className} my-8 text-5xl font-bold text-white`}>SEDANS</h1>
                    <p className='font-medium text-sm leading-8 text-transparent-white mb-8 md:mb-16'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
                    <button className='border-2  border-white hover:text-white hover:bg-bright-orange rounded-full bg-white text-bright-orange px-5 py-2 md:px-5 md:py-2'>Learn More</button>
                </div>

                <div className="w-10/12 md:w-full bg-dark-cyan px-16 py-8 md:p-8 flex flex-col items-start">
                    <Image src={suvIcon} alt="SUV Icon" />
                    <h1 className={`${big_shoulder_display.className} my-8 text-5xl font-bold text-white`}>SUVS</h1>
                    <p className='font-medium text-sm leading-8 text-transparent-white mb-8 md:mb-16'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
                    <button className='border-2  border-white hover:text-white hover:bg-dark-cyan rounded-full bg-white text-dark-cyan px-5 py-2 md:px-5 md:py-2'>Learn More</button>
                </div>

                <div className="w-10/12 md:w-full mb-8 md:mb-0 bg-very-dark-cyan px-16 py-8 md:p-8 flex flex-col items-start rounded-b-lg md:rounded-b-none md:rounded-br-lg md:rounded-tr-lg">
                    <Image src={luxuryIcon} alt="Luxury Icon" />
                    <h1 className={`${big_shoulder_display.className} my-8 text-5xl font-bold text-white`}>LUXURY</h1>
                    <p className='font-medium text-sm leading-8 text-transparent-white mb-8 md:mb-16'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
                    <button className='border-2  border-white hover:text-white hover:bg-very-dark-cyan rounded-full bg-white text-very-dark-cyan px-5 py-2 md:px-5 md:py-2'>Learn More</button>
                </div>

            </div>
        </div>
    );
}

export default PricingColumnPage;