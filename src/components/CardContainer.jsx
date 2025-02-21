import React, { useEffect, useState } from 'react'
import Card from './Card'
import {  TrendingUp ,Users ,TrendingDown ,Eye ,Grid2x2 ,DollarSign} from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;
const secretKey = import.meta.env.VITE_SECRET_KEY;



const CardContainer = () => {
  const [audience  ,setAudience] = useState('')
  const [visitors,setvisitors] = useState('')
  const [ Conversion ,setConversion] = useState('')
  const [totalRate ,setTotalRate] = useState('')

  const fetchData =async ()=>{
    const response = await fetch( apiUrl + secretKey)
    const json = await response?.json()
    const {VND ,MGA,KRW,INR} = json?.rates
    setAudience(MGA)
    setvisitors(KRW)
    setConversion(VND)
    setTotalRate(INR)
  }
  
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div className='w-full flex justify-center '>
     <div className=' max-w-[1280px]  grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  mr-2    lg:my-2 xl:my-1 ' >
      <Card cardName="Audience" data={audience} placeholder={"New"} placeholderStyle={"text-indigo-500 bg-indigo-200 text-sm"} trendingIconStyle={"text-green-400"} trendingIcon={ <TrendingUp className='inline-block' /> } icon={<Users  />} percentage={12} />
      <Card cardName="Visitors" data={visitors} trendingIcon={<TrendingDown className='inline-block' />} trendingIconStyle={"text-red-400"} icon={<Eye />} percentage={-8} />
      <Card cardName="Conversion " data={Conversion } trendingIconStyle={"text-green-400"} trendingIcon={ <TrendingUp className='inline-block' /> } percentage={+8.9}  icon={<Grid2x2 />} />
      <Card cardName={"Total Rate"} placeholder={"Beta"} placeholderStyle={"text-red-500 bg-red-200 text-sm"} data={totalRate} trendingIconStyle={"text-green-400"} trendingIcon={ <TrendingUp className='inline-block' /> } percentage={+77} icon={<DollarSign />} />
     </div>
    </div>
  )
}

export default CardContainer
