import React from 'react'
// import Logo from '../Assets/FULL-LOGO.png'
// import Button from '../components/button'

const navbar = () => {
  return (
    <div className='flex bg-transparent w-full items-center justify-between absolute sm:p-[50px] sm:pr-[70px] sm:pl-[70px] md:pl-[200px] md:pr-[200px] p-[20px] '>
      {/* <img className="bg-transparent sm:w-52 w-36" src={Logo} alt=""/> */}

      <h1 className='text-white font-bold text-[50px]'>Tooclarity </h1>

      <div className='text-white flex gap-[20px] text-[20px] font-bold'>
        <a href='/'>
          Home
        </a>

        <a href='/'>
          About
        </a>

        <a href='/'>
          Contact
        </a>
      </div>
    </div>
  )
}
export default navbar
