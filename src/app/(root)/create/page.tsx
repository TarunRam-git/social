"use client";
import Bbox from '@/components/Bbox'
import Roundbox from '@/components/Roundbox'
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { Submit } from '@/back/Create'
import { useTransition } from "react";
import { title } from 'process';
const page = () => {
    const [isPending, startTransition] = useTransition();
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [image,setImage] = useState("")
    async function handlesubmit(){
        startTransition(async()=>{
            await Submit(title,desc,image);

        });
    }
  return (
    <div className='bg-white'>
        <div className="bg-[#EE2B69] h-[25vh] flex flex-col items-center gap-3 p-15"> 
            <Bbox text='SUBMIT YOUR EXPERIENCE!' />
        </div>
        <div className='flex flex-col items-center justify-center gap-[3vh] p-10 bg-white '>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black text-xl font-extrabold '>TITLE</h1>
            <Roundbox value={title} onChange={(e)=>setTitle(e.target.value)} text='Title' />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black text-xl font-extrabold '>DESCRIPTION</h1>
            <Roundbox value={desc} onChange={(e)=>setDesc(e.target.value)} text='Short description of your idea' height='h-[14vh]'/>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black text-xl font-extrabold '>CATEGORY</h1>
            <Roundbox text='Choose your category' />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black text-xl font-extrabold '>IMAGE/VIDEO LINK</h1>
            <Roundbox value={image} onChange={(e)=>setImage(e.target.value)} text='Image/video link' />
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-black text-xl font-extrabold '>EXPERIENCE</h1>
            <Roundbox text='Briefly describe your experience' height='h-[19vh]' />
        </div>
        <div >
        <button onClick={handlesubmit} className='w-[60vh] outline-4 outline-black rounded-3xl text-white flex items-center p-2 text-xl h-[5vh] bg-[#EE2B69] justify-center font-bold gap-2'> SUBMIT <Send/></button>
        
        </div>
        </div>
    </div>
  )
}

export default page
