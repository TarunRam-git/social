import React from 'react'
import Image from 'next/image'
const Ybox = () => {
  return (
    <div>
      <div className='rounded relative bg-[#FBE843] flex items-center justify-center h-[5vh] text-black font-bold w-[30vh] '>
        
        <Image src="/triangle.png" alt="triangle" width={15} height={15} className='absolute top-2 left-2' />
        
        <h1 className='text-xl'>GO OUT THERE!</h1>
      </div>
    </div>
  )
}

export default Ybox
