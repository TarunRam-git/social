"use client";
import React from 'react'
import Image from 'next/image'
import { signIn, signOut,useSession } from 'next-auth/react'
const navbar = () => {
  const { data: session } = useSession();
  return (
    <header className='px-5 py-3 bg-white rounded-t-2xl'>
      <nav className='flex justify-between items-center '>
      
        <Image src="/logo.png" alt="not found" width={70} height={10}/>
        <h1 className='text-black text-3xl ml-[8%]'>GILIGILI</h1>
        <div className='flex items-center gap-6 text-black'>

        <div>Create</div>
        <button onClick={()=>signOut()}>Logout</button>
        {session ? (
          <div className='flex flex-col gap-2'>
            {session.user?.name}
             <Image className='items-center' src={session.user?.image || "/logo.png"} alt="image" width={20} height={20}/>
          </div>
        ) 

          : (<button onClick={()=>signIn("github")}>Sign In</button >)
        }
        </div>
      
      </nav>
    </header>
  )
}

export default navbar
