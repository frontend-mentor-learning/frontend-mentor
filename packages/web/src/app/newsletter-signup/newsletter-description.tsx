'use client'
import Image from 'next/image';
import listIcon from 'public/newsletter-signup/icon-list.svg';
import { useState, useEffect } from 'react';
import SuccessCard from './success-card';

interface NewsletterDescriptionProps {
  success: boolean;
  error: string | null;
  email: string;
  setSuccess: (value: boolean) => void;
  setError: (value: string | null) => void;
  setEmail: (value: string) => void;
}

const NewsletterDescription = ({
  success, setSuccess, error, setError, email, setEmail
}: NewsletterDescriptionProps) => {

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (error) {
      timer = setTimeout(() => {
        setError(null); // Reset error after 10 seconds
      }, 10000);
    }
    return () => {
      if (timer) clearTimeout(timer); // Cleanup the timer when the component unmounts or error changes
    };
  }, [error, setError]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false); // Reset success state after 20 seconds
      }, 20000);
    }
    return () => {
      if (timer) clearTimeout(timer); // Cleanup the timer when the component unmounts or success changes
    };
  }, [success, setSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null); // Clear error on typing
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Valid email required');
    } else {
      console.log('Form submitted with:', email);
      setSuccess(true); // Indicate success on valid form submission
    }
  };



  return (
    <div className='flex flex-col items-start w-9/12 gap-4 mb-4'>
      <h2 className='text-5xl font-extrabold'>Stay updated!</h2>
      <p className='mt-2 mb-2 font-medium'>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className='flex flex-col gap-2 mb-6 font-medium'>
        {['Product discovery and building what matters', 'Measuring to ensure updates are a success', 'And much more!'].map((item, index) => (
          <li key={index} className='flex items-start gap-4'>
            <Image src={listIcon} alt="List Icon" width={20} height={20} />
            <p className='leading-6'>{item}</p>
          </li>
        ))}
      </ul>
      <form className="flex flex-col w-full text-charcoal-grey" noValidate onSubmit={handleSubmit}>
        <div className="flex items-center justify-between w-full">
          <label htmlFor="email" className="mb-2 text-sm font-bold">Email address</label>
          {error && <span className="text-sm text-tomato">{error}</span>}
        </div>
        <input
          value={email}
          onChange={handleChange}
          id="email"
          name="email"
          placeholder='email@company.com'
          type="email"
          className={`${error ? 'border-tomato bg-slayer' : 'border-grey'} p-4 text-md rounded-md border outline-none`}
        />
        <button type="submit" className={`mt-4 text-sm p-4 rounded-md bg-charcoal-grey text-white hover:bg-gradient-to-r hover:text-white hover:shadow-tomato-lift`}>
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default NewsletterDescription;




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

/*
background-color: hsla(4, 86%, 86%, 0.384);
  color: var(--tomato);
  border-color: var(--tomato);
  outline: none;
*/