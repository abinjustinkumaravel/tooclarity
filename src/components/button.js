import React from 'react'

const button = (pros) => {
  return (
    <div>
      <button className='rounded-lg bg-[rgba(150,20,208,0.25)] border-[rgba(150,20,208,0.25)] border-2 w-fit h-fit p-3 font-bold text-center text-white p-[4px] text-[15px] font-medium'>
        {pros.text}
      </button>
    </div>
  )
}

export default button
