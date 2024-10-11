import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className="lg:w-[80%] m-[10%] font-sans">
      {/* About Section */}
      <div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-20 flex w-[100%] justify-center">What We Do</h1>
        <p className= " relative text-white text-lg md:text-xl mb-8 bg-[#0717ff13] text-center p-10 rounded-xl">
        <span className='absolute left-5' ><FaQuoteLeft /></span><strong>TooClarity</strong> is a platform built to help educational institutions and businesses
            simplify their marketing and advertising efforts. We empower users to reach their target
        audience effectively through tailored campaigns and insights, enabling them to maximize their
        potential and impact. <span className='absolute right-5'><FaQuoteRight /></span>
      </p>
        </div>

    <div className='lg:flex justify-center align-center w-[100%]'>
      <div className='lg:w-[50%] p-10'>    
          {/* Vision Section */}  
        <h2 className="text-2xl w-[100%] flex justify-center md:text-3xl font-semibold text-white mb-4">Our Vision</h2>
        <p className="relative text-white text-lg md:text-xl text-center flex items-center mb-8 bg-[#ff0080a2] p-10 rounded-xl">
        Our vision at TooClarity is to become the leading educational discovery platform that bridges learners with the right educational opportunities. We aim to simplify the journey of finding and accessing the best courses, programs, and institutions worldwide, empowering individuals to make informed choices and unlock their potential through knowledge and growth.
        </p>
      </div>
          {/* Mission Section */}
      <div className='lg:w-[50%] p-10'>
        <h2 className="text-2xl md:text-3xl w-[100%] flex justify-center font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-white text-lg md:text-xl text-center flex items-center mb-8 bg-[#c300ffa2] p-10 rounded-xl">
        Our mission is to empower learners and institutions by providing a seamless educational discovery platform that simplifies the process of finding the right courses, programs, and new experiences. We are dedicated to making education more accessible, personalized, and impactful by connecting people with opportunities that match their aspirations, goals, and growth.
        </p>
      </div>
    </div>

      {/* User Personas */}

    </div>
  );
};

export default About;
