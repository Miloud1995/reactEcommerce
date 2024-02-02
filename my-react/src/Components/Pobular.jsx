import React, { useContext } from 'react'
import Data_product from '../Components/Assets/data'
import Items from './Items'
import data_product from '../Components/Assets/data'
import { ModeContext } from '../Context/Mode'

function Pobular(){
    const{mode,setMode} = useContext(ModeContext)
  return (
    <>
    {mode &&<div className='flex flex-col gap-6 mt-10 mx-auto py-8'>
        <h1 className=' text-center text-3xl text-gray-700 font-medium'>POPULAR IN WOMEN</h1>
        <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-800' />
        <div className='flex flex-col md:flex-row  gap-8 my-10 mx-auto max-w-5xl   '>
         {data_product.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
    </div>}

    {!mode &&<div className='flex flex-col gap-6  mx-auto py-8 bg-slate-800'>
        <h1 className=' text-center text-3xl text-white font-medium'>POPULAR IN WOMEN</h1>
        <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-300' />
        <div className='flex flex-col md:flex-row  gap-8 my-10 mx-auto max-w-5xl   '>
         {data_product.map((item,i)=>{
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
        </div>
    </div>}
    </>
  )
}

export default Pobular 