import React from 'react'
import Logo from '../Assets/FULL-LOGO.png'
// import Button from '../components/button'

const navbar = () => {
  return (
    <div className='flex bg-transparent w-full items-center justify-between absolute sm:p-[50px] sm:pr-[70px] sm:pl-[70px] md:pl-[200px] p-[20px] '>
      <img className="bg-transparent sm:w-52 w-36" src={Logo} alt=""/>

      {/* <form className='flex border border-gray-500 gap-3 rounded-md p-2'>
        <input type='text' placeholder='Enter your Email'className='bg-transparent' ></input>
        <Button text="Get Notify"/>
      </form> */}
    </div>
  )
}
export default navbar
