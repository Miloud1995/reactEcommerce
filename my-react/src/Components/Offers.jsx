import React, { useContext } from 'react'
import exclusive_image from '../Components/Assets/exclusive_image.png'
import { ModeContext } from '../Context/Mode'

function Offers(){
    const{mode,setMode} = useContext(ModeContext)
  return (
    <>
    {mode &&<div className='flex flex-col md:flex-row h-auto py-10 md:py-0 md:h-96 max-w-5xl pl-5 mx-auto  my-20 bg-gradient-to-t from-slate-50 to-violet-600'>
        <div className='flex flex-1 flex-col justify-center px-4'>
           <h1 className=' text-5xl text-gray-800 font-semibold'>Exclusive</h1>
           <h1 className=' text-5xl text-gray-800 font-semibold py-2'>Offers for you</h1>
           <p className=' text-base font-medium text-gray-800'>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className=' w-72 h-16 rounded-lg bg-gradient-to-r from-pink-100 to-pink-300 text-white text-lg mt-8 font-medium cursor-pointer hover:bg-slate-300'>Check Now</button>
        </div>
        <div>
            <img src={exclusive_image} alt="" className=' h-96' />
        </div>
    </div>}

    {!mode &&<div className='flex flex-col md:flex-row h-auto py-10 md:py-0 md:h-96 max-w-5xl pl-5 mx-auto  my-20 bg-gradient-to-t from-slate-600 to-violet-800'>
        <div className='flex flex-1 flex-col justify-center px-4'>
           <h1 className=' text-5xl text-white font-semibold'>Exclusive</h1>
           <h1 className=' text-5xl text-white font-semibold py-2'>Offers for you</h1>
           <p className=' text-base font-medium text-white'>ONLY ON BEST SELLERS PRODUCTS</p>
           <button className=' w-72 h-16 rounded-lg bg-gradient-to-r from-pink-100 to-pink-300 text-white text-lg mt-8 font-medium cursor-pointer hover:bg-slate-300'>Check Now</button>
        </div>
        <div>
            <img src={exclusive_image} alt="" className=' h-96' />
        </div>
    </div>}
    </>
  )
}

export default Offers 