import React from 'react'

const navbar = () => {
  return (
    <div className='flex bg-transparent w-full items-center justify-between absolute sm:p-[50px] sm:pr-[70px] sm:pl-[70px] md:pl-[200px] md:pr-[200px] p-[20px] '>
      <h1 className='text-white font-bold text-[35px]'>TooClarity </h1>

      <div className='flex gap-[50px] text-white font-semibold'>
          <a href='/'>Home</a>
          <a href='/'>Product</a>
          <a href='/'>Contact</a>
          <button>
            Subscribe Us
          </button>
      </div>
    </div>


  )
}
export default navbar
