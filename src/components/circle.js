import React from 'react'

const circle = () => {
  return (
    <div className='relative flex item-center justify-center' >

        <div className='sm:w-[550px] sm:h-[550px] w-[350px] h-[350px] rounded-full absolute shadow-[0_35px_80px_-15px_rgba(150,20,208,0.25)] top-[200px] right-[30%]'>

        </div>

        <div className='sm:w-[550px] sm:h-[550px] w-[350px] h-[350px] rounded-full first-line:rounded-full absolute shadow-[0_35px_80px_-15px_rgba(150,20,208,0.25)] top-[200px]'>

        </div>
        <div className='sm:w-[550px] sm:h-[550px] w-[350px] h-[350px] rounded-full absolute shadow-[0_35px_80px_-15px_rgba(150,20,208,0.25)] top-[200px] left-[30%]'>

        </div>

      </div>
  )
}
export default circle
