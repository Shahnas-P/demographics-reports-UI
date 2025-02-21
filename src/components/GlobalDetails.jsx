import React from 'react'
import GlobalCutomers from './GlobalCutomers'
import usa from '/usa.png'
import brazil from '/brazil.png'
import canada from '/canada.png'
import france from '/france.png'
import japan from '/japan.png'
import {MoveUpRight} from 'lucide-react'
const GlobalDetails = () => {
  return (
    <div>
     
        <div className='p-4 md:p-2'>
          <h1 className='text-4xl font-bold'>98,2k</h1>
          <p className=' text-sm py-2 md:py-0 md:text-xs text-slate-400'>Global customers worldwide</p>
        </div>
        <div className='flex flex-col gap-2 md:gap-1 justify-start m-2 md:mt-[-0.3rem]'>
        <GlobalCutomers  image={usa} name={"United States"} percentage={"90%"} style={'w-53'}  />
        <GlobalCutomers image={brazil} name={"Brazil"} percentage={"75%"} style={'w-45'} />
        <GlobalCutomers image={japan} name={"Japan"} percentage={"40%"} style={'w-30'}/>
        <GlobalCutomers image={canada} name={"Canada"} percentage={"30%"} style={'w-25'}/>
        <GlobalCutomers image={france} name={"France"} percentage={"15%"} style={'w-15'}/>
        <div className="flex justify-center items-center" >
          <p className="text-md md:text-xs text-blue-800 ">See AllDemographics</p> &nbsp;
          <MoveUpRight className="text-slate-500 font-semibold  " size={15}/>
        </div>

        </div>
       
      

    </div>
  )
}

export default GlobalDetails
