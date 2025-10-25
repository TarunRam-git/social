import React from 'react'

const Bbox = ({text} :  {text:string}) => {
  return (
    <div>
      <div className='bg-black h-[10vh] w-[60vh] flex flex-col justify-center items-center rounded-xl'>
            <h1 className='font-bold text-4xl'>{text}</h1>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Bbox
