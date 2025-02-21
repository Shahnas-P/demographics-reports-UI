import { EllipsisVertical ,TrendingUp ,Users} from 'lucide-react'
import React from 'react'
const Card = () => {
  return (
    <div className='border-2 border-slate-200 rounded-xl py-4  my-3 mx-3 p-4  sm:py-5 sm:p-5 md:py-6 md:p-7 lg:py-8 lg:py-8'>
     <div className='flex  justify-between'>
      <div className='flex flex-row '>
        <p className='font-semibold '>Audience</p>
        <div className='bg-slate-400  mx-2 px-2 rounded-full text-slate-700'>New</div>
      </div>
      <EllipsisVertical className='text-slate-300' />
     </div>
     <h2 className='text-3xl font-bold mt-2'>1,878</h2> 

     <div className='flex justify-evenly'>
     
      <div className='flex flex-col'>
      
        <p className='whitespace-nowrap'> <span className='text-green-400'> <TrendingUp className='inline-block' /> + 12% </span> vs last month</p>
      </div>
      <div className='mx-4' ><Users  /></div>
     </div>
    </div>
  )
}

export default Card
