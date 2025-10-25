import React from 'react'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import { posts } from '@/lib/types'
const Card = ({createdat, views, user, title, desc, position, image, avatar}:posts) => {
  return (
    <div className='bg-white  outline-5 outline-black  text-black rounded-2xl '>
      <div className='p-5 flex flex-col justify-between h-full gap-8 text-sm'>
        <div className='flex justify-between'>
            <div className='bg-[#FFE8F0] h-[3vh] w-[10vh] flex items-center justify-center rounded-2xl'>{new Date(createdat).toISOString().split('T')[0]}</div>
            <div className='flex justify-center'><Eye className='text-pink-400'/>{views}</div>
        </div>
        <div className='flex justify-between items-start'>
            <div className='flex flex-col'>
              <div className=' font-semibold text-lg'>
                {user}
              </div> 
              <div className='font-extrabold text-2xl mt-2'>
                {title}
              </div> 
              <div className='mt-2 line-clamp-2'>
                {desc}  
              </div> 
            </div>
            
            <Image src={avatar} width={70} height={70} alt="die" className='rounded-full object-cover'/>
        </div>
        <div className='flex items-center justify-center '>
          <Image src={image} alt="placehold" width={400} height={300} className='rounded-2xl'/>
        </div>
        <div className='flex justify-between'>
            <div>{position}</div>
            <div className='bg-black rounded-2xl w-[8vh] h-[3vh] text-white flex items-center justify-center'>Details</div>
        </div>
      </div>
    </div>
  )
}

export default Card
