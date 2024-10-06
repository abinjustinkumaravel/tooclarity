import React, { useEffect, useState } from 'react';
import { SlArrowDown } from "react-icons/sl";


const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-12-31T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email Submitted:', email);  // You can connect this to your backend
    setEmail('');
  };
  return (
    <div className="text-center text-white bg-transparent"> 
      <h1 className="lg:text-4xl md:w-[100%] w-[300px] sm:text-[25px] text-[20px] mb-6">We're Launching Soon</h1>
      <p className="mt-6 lg:text-[20px] md:text-[15px] text-[10px]">World Education On One Scale</p>
      <div className="flex justify-center space-x-4 lg:space-x-6 lg:text-4xl text-[10px] lg:m-[50px]">
        <div className='bg-transparent text-white lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] p-2 rounded-lg'>
          <span className='lg:text-[17px]'>{timeLeft.days}</span>
          <p className="lg:text-[15px]">Days</p>
        </div>
        <span className='flex justify-center lg:text-7xl text-[15px] items-center'>:</span>
        <div className='bg-transparent text-white lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] p-2 rounded-lg'>
          <span className='lg:text-[17px]'>{timeLeft.hours}</span>
          <p className="lg:text-[15px]">Hour</p>
        </div>
        <span className='flex justify-center lg:text-7xl text-[15px] items-center'>:</span>

        <div className='bg-transparent text-white lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] p-2 rounded-lg'>
          <span className='lg:text-[17px]'>{timeLeft.minutes}</span>
          <p className="lg:text-[15px]">Min</p>
        </div>

        <span className='flex justify-center lg:text-7xl text-[15px] items-center'>:</span>
        <div className='bg-transparent text-white lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] p-2 rounded-lg'>
          <span className='lg:text-[17px]'>{timeLeft.seconds}</span>
          <p className="lg:text-[15px]">Sec</p>
        </div>
        <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
 {/* Email Notification className='lg:text-[17px]' Form */}
      <form onSubmit={handleEmailSubmit} className="md:block relative md:bottom-[-50px] bottom-[-50px] mt-10 lg:mt-[100px] flex justify-center space-x-4 lg:text-[12px] text-[10px]">
        <input 
          type="email" 
          className="p-2 lg:w-64 w-[150px] bg-transparent hover:border-blue-700 text-gray-900 rounded" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="p-2 md:w-fit w-[100px] md:text-[10px] text-[7px] h-fit bg-blue-600 hover:bg-blue-600 text-white rounded"
        >
          Get Notified
        </button>
      </form>
      <div className='absolute md:bottom-[100px] bottom-10 left-0 w-[100%] flex justify-center md:text-2xl text-xl animate-bounce' >
        <div>
        <SlArrowDown />
        <SlArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
