import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navbar = () => {
  return (
    <div className='flex bg-transparent w-full items-center justify-between absolute sm:p-[50px] sm:pr-[70px] sm:pl-[70px] md:pl-[200px] md:pr-[200px] p-[20px] '>
      <h1 className='text-white font-bold text-[35px]'>TooClarity </h1>

      <div className='hidden lg:flex  gap-[50px] text-white font-semibold'>
          <a href='/'>Home</a>
          <a href='/'>Product</a>
          <a href='/'>Subscribe</a>
      </div>

      <div className='block lg:hidden'>
        <FontAwesomeIcon color='white' className="text-white text-[30px] justify-center" icon={faBars}/>
      </div>
    </div>
  )
}
export default navbar
