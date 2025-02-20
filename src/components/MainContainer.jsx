import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import TargetContainer from './TargetsContainer'

function MainContainer() {
  return (
    <div className='bg-radial-[at_20%_100%] from-sky-50 via-indigo-200 to-blue-300 to-90%   h-[90%] w-[95%] flex flex-1 justify-center items-center mx-6 p-2 rounded-3xl  '>
      <div className=' bg-white h-[3rem] w-[3rem] w-full  h-full rounded-2xl '>
    {/* <Navbar/> */}
    <Sidebar/>
    {/* <CardContainer/>
    <TargetContainer/> */}

      </div>
    </div>
  )
}
export default MainContainer
