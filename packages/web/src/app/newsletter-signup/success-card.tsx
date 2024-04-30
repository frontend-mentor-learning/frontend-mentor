import tickIcon from 'public/newsletter-signup/icon-success.svg'
import Image from 'next/image'
import SizeIndicator from '@/utils/size-indicator';
interface SuccessCardProps {
    email: string;
    setSuccess: (value: boolean) => void;
    setEmail: (value: string) => void;

}
const SuccessCard = ({ email, setSuccess,setEmail }: SuccessCardProps) => {
    return (
        <div className='flex flex-col items-center sm:justify-center w-full  sm:bg-charcoal-grey h-screen'>

            <div className='bg-white flex flex-col items-start justify-between sm:max-w-[500px] pt-8 pb-2 h-screen sm:py-14 sm:px-16 sm:rounded-3xl  sm:h-4/6 w-10/12 '>
                <SizeIndicator color='black' />
                <div className='flex flex-col sm:gap-6 gap-4'>
                    <Image src={tickIcon} alt="tickIcons" width={50} height={50} />

                    <h1 className='text-slate-grey sm:text-5xl text-5xl font-extrabold'>Thanks for subscribing!</h1>

                    <p>A confirmation email has been sent to <strong>{email}</strong>.
                        Please open it and click the button inside to confirm your subscription.
                    </p>
                </div>

                <button onClick={() => { setSuccess(false); setEmail('') }} className='w-full mt-4 text-sm p-4 rounded-md font-bold bg-charcoal-grey text-white hover:bg-gradient-to-r hover:text-white hover:shadow-tomato-lift'>Dismiss message</button>


            </div>
        </div>

    )
}

export default SuccessCard