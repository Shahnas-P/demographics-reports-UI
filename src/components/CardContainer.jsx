import React from 'react'
import Card from './Card'
const CardContainer = () => {
  return (
    <div className='w-full flex justify-center '>
     <div className=' max-w-[1280px]  grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  mr-2    lg:my-3 ' >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
    </div>
  )
}

export default CardContainer
