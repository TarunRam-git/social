import Image from 'next/image'
import React from 'react'
interface SearchboxProps {
  lol: string;
  hehelol: (lol: string) => void;
}

const Searchbox: React.FC<SearchboxProps> = ({lol,hehelol}) => {
  return (
    <div className='bg-white h-[5vh] w-[40vh] rounded-3xl outline-black outline-4 flex justify-between items-center p-4'>
      <input className='font-bold text-black focus:outline-none ' placeholder='Search for idea' value={lol} onChange={e=>hehelol(e.target.value)}/>
      <Image src="/search.png" alt="search" width={30} height={30}/>
    </div>
  )
}

export default Searchbox
