import React from 'react'

const GlobalCutomers = ({image,name,percentage,style}) => {
  return (
    <div className='flex  w-full m-2 md:justify-center md:items-center  '>
     <img src={image} width={30} height={30} className='rounded-full mx-2 md:w-[1.5rem] md:h-[1.5rem]' />
     <div className='mx-2  w-full'>
        <div className='flex flex-row justify-between'>
        <p className='font-semibold text-sm md:text-xs'>{name}</p>
        <p className= ' text-sm md:text-xs'>{percentage}</p>
        </div>
        <div className='border border-slate-400  h-1 md:h-1 w-full rounded-full'>
            <div className={`bg-blue-800 ${style} rounded-full  h-1 md:h-1`}></div>
        </div>
     </div>
    </div>
  )
}

export default GlobalCutomers
