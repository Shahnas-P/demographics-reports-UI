import React from 'react'
import TargetHead from './TargetHead'
import Map from './Map'
import { Dot } from 'lucide-react'
import GlobalDetails from './GlobalDetails'
const TargetsContainer = () => {
  return (
    <div className=' xl:mx-18 flex flex-col   border-2 border-slate-300  rounded-xl '>

     <TargetHead/>
     <div  className='lg:h-[40vh] flex flex-col lg:flex-row '>
     <div className="  lg:w-4/6 w-full lg:border-r-2 lg:border-slate-300">
    <Map />
  </div>

  <div className="lg:w-2/6 w-full">
    <GlobalDetails />
  </div>
     </div>
    </div>
  )
}

export default TargetsContainer
