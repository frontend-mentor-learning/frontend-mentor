import Image from 'next/image';
import listIcon from 'public/newsletter-signup/icon-list.svg';

// Custom color classes should be added to your tailwind.config.js
// theme: {
//   extend: {
//     colors: {
//       tomato: 'hsl(4, 100%, 67%)',
//       'dark-slate-grey': 'hsl(234, 29%, 20%)',
//       'charcoal-grey': 'hsl(235, 18%, 26%)',
//       grey: 'hsl(231, 7%, 60%)',
//       white: 'hsl(0, 0%, 100%)',
//     },
//   },
// },

const NewsletterDescription = () => {
  return (
    <div className='flex flex-col items-start w-9/12 gap-4 mb-4'>
      <h2 className='text-5xl font-extrabold '>Stay updated!</h2>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className='flex flex-col gap-2 mb-6'>
        <li className='flex items-start gap-4'>
          <Image src={listIcon} alt="listIcon" width={20} height={20} />
          <p className='leading-6'>Product discovery and building what matters</p>
        </li>
        <li className='flex items-start gap-4'>
          <Image src={listIcon} alt="listIcon" width={20} height={20} />
          <p className='leading-6'>Measuring to ensure updates are a success</p>
        </li>
        <li className='flex items-start gap-4'>
          <Image src={listIcon} alt="listIcon" width={20} height={20} />
          <p className='leading-6'>And much more!</p>
        </li>
      </ul>

      <form className="flex flex-col text-charcoal-grey w-full">
        <label htmlFor="email" className="mb-2 text-sm font-bold">Email address</label>
        <input id="email" placeholder='email@company.com' type="email" className="p-4 text-md rounded-md border border-grey" />
        <button type="submit" className="mt-4 text-sm p-4 rounded-md bg-charcoal-grey text-white hover:bg-gradient-to-r hover:text-white hover:shadow-tomato-lift">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  )
}

export default NewsletterDescription;
