import React from 'react'

function emailnotify() {
  return (
    <div>
      <div className='relative flex bottom-[200px] items-center justify-center text-center'>
        <form>
          <div className='flex w-fit p-2 m-2 sm:gap-[50px] bg-[#a94ffd17] gap-[20px]  rounded-[15px]'>          
            <input type="text" placeholder='Email to subscribe us' className='border-1 rounded-md bg-transparent text-white sm:w-[350px] w-[210px] text-[20px] p-2 focus:outline-none focus:border-none' >
            </input>
            <button className='sm:w-[150px] w-fit h-fit p-2 rounded-[10px] bg-[#a94ffd] sm:text-[20px]'>
            Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default emailnotify
