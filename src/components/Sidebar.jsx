import React from 'react'
import { House , ChartNoAxesColumnIncreasing ,UserRound,Calendar,Zap, BellRing,Settings} from 'lucide-react';
function Sidebar() {
  return (
    <div className='absolute  max-h-[39rem] h-full m-2 flex flex-1 flex-col justify-between bg-slate-50 rounded-xl '>
      <div className=' h-[50%] flex  flex-col justify-between p-2 items-center '>
        <img width={25} src='./logo.jpeg' />
        <div className=' p-2 rounded-full  bg-slate-200  '>
        <House   className="text-slate-600    "/>

        </div>
      <ChartNoAxesColumnIncreasing  className="text-slate-600 " />
      <UserRound  className="text-slate-600 "/>
      <Calendar className="text-slate-600 " />
      <Zap className="text-slate-600 " />
      <BellRing  className="text-slate-600 "/>
      </div>
      <div className='flex flex-col   h-[13%] justify-evenly'>
      
        <Settings />
        
        <img width={30} className='rounded-full' c src='./profile.jpeg'/>
       
      </div>
    </div>
  )
}

export default Sidebar
