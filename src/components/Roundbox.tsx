import React from 'react'

const Roundbox = ({height="h-[5vh]",text,bgcol="bg-white",value,onChange} : {height?: string,text:string,bgcol?:string,value?:string,onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div>
    <div className={`${height} ${bgcol} w-[60vh] outline-4 outline-black rounded-3xl text-black flex items-start p-2 text-xl px-6`}>
      <input placeholder={text} value={value} onChange={onChange} className='outline-none w-full mt-1'></input>
    </div>
    </div>
  )
}

export default Roundbox
