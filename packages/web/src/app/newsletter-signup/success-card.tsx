import tickIcon from 'public/newsletter-signup/icon-success.svg'
import Image from 'next/image'
import SizeIndicator from '@/utils/size-indicator';
import { useEffect } from 'react';
interface SuccessCardProps {
    email: string;
    setSuccess: (value: boolean) => void;
    success: boolean;
    setEmail: (value: string) => void;

}
const SuccessCard = ({ email, success, setSuccess, setEmail }: SuccessCardProps) => {
   
    return (
        <div className='flex flex-col items-center w-full h-screen sm:justify-center sm:bg-charcoal-grey'>

            <div className='bg-white flex flex-col items-start justify-between sm:max-w-[500px] pt-8 pb-2 h-screen sm:py-14 sm:px-16 sm:rounded-3xl  sm:h-4/6 w-10/12 '>
                <div className='flex flex-col gap-4 sm:gap-6'>
                    <Image src={tickIcon} alt="tickIcons" width={50} height={50} />

                    <h1 className='text-5xl font-extrabold text-slate-grey sm:text-5xl'>Thanks for subscribing!</h1>

                    <p>A confirmation email has been sent to <strong>{email}</strong>.
                        Please open it and click the button inside to confirm your subscription.
                    </p>
                </div>

                <button onClick={() => { setSuccess(false); setEmail('') }} className='w-full p-4 mt-4 text-sm font-bold text-white rounded-md bg-charcoal-grey hover:bg-gradient-to-r hover:text-white hover:shadow-tomato-lift'>Dismiss message</button>


            </div>
        </div>

    )
}

export default SuccessCard