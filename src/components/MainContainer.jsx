import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
import TargetContainer from './TargetsContainer'
import { useSelector } from 'react-redux'


function MainContainer() {

  const sideBarOpened = useSelector((store)=>store.dashboard.openSideBar)
  return (
    <div className='bg-radial-[at_20%_100%] from-sky-50 via-indigo-200 to-blue-300 to-90%   h-[90%] w-[95%] flex flex-1 justify-center items-center mx-6 p-2 rounded-3xl  '>
      <div className=' bg-white h-[3rem] w-[3rem] w-full  h-full rounded-2xl overflow-y-auto scroll-hidden     '>
    <Navbar/>
  
    <Sidebar/>
    <div className={`  ${sideBarOpened ? '  sm:ml-16' :'ml-0 '}`}>
    <CardContainer/>
    <TargetContainer/>
    </div>
   
   
 

      </div>
    </div>
  )
}
export default MainContainer
