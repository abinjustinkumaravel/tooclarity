import React, { useEffect, useState } from 'react';

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
    <div className="text-center text-white">
      <h1 className="text-5xl mb-6">We're Launching Soon</h1>
      <div className="flex justify-center space-x-6 text-4xl">
        <div>
          <span>{timeLeft.days}</span>
          <p className="text-lg">Days</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p className="text-lg">Hours</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p className="text-lg">Minutes</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p className="text-lg">Seconds</p>
        </div>
      </div>

      {/* Email Notification Form */}
      <form onSubmit={handleEmailSubmit} className="mt-8 flex justify-center space-x-4">
        <input 
          type="email" 
          className="p-2 w-64 text-gray-900 rounded" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
        >
          Get Notified
        </button>
      </form>
    </div>
  );
};

export default Countdown;
