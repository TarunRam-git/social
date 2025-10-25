import Albumdis from '@/components/Albumdis';
import React from 'react'
export default async function page() {
  await new Promise(res => setTimeout(res, 300));
  return (
    
    <div>
      dashboard
      <Albumdis />
    </div>
  )
}


