import React, { useContext } from 'react'
import hand_icon from '../Components/Assets/hand_icon.png'
import arrow_icon from '../Components/Assets/arrow.png'
import hero_image from '../Components/Assets/hero_image.png'
import { ModeContext } from '../Context/Mode'

function Hero(){
    const{mode}=useContext(ModeContext)
  return (
    <>
    {mode && <div className='  flex flex-col md:flex-row bg-gradient-to-r from-slate-100 to-violet-900'>
        <div className='flex flex-1 flex-col justify-center gap-2 py-20 md:py-0 pl-10 md:pl-40 line-clamp-2'>
            <h2 className=' text-gray-900 text-4xl font-bold'>New Arrivals Only</h2>
            <div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <p className='text-4xl md:text-7xl text-gray-700 font-bold'>New</p>
                    <img className=' w-12 md:w-24' src={hand_icon} alt="hand_icon" />
                </div>
                <p>Collection</p>
                <p>Collection for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-2 w-40 h-8 md:h-12 rounded-lg md:mt-7 bg-gradient-to-b from-red-100 to-red-700 text-white p-1 font-medium'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow_icon" />
            </div>

        </div>
        <div className='flex flex-1 items-center justify-center '>
           <img src={hero_image} alt="" className=' w-56 md:w-96' />
        </div>
    </div>}

    {!mode && <div className='  flex flex-col md:flex-row bg-gradient-to-r from-slate-400 to-violet-900'>
        <div className='flex flex-1 flex-col justify-center gap-2 py-20 md:py-0 pl-10 md:pl-40 line-clamp-2'>
            <h2 className=' text-gray-900 text-4xl font-bold'>New Arrivals Only</h2>
            <div>
                <div className='flex items-center gap-2 md:gap-4'>
                    <p className='text-4xl md:text-7xl text-gray-700 font-bold'>New</p>
                    <img className=' w-12 md:w-24' src={hand_icon} alt="hand_icon" />
                </div>
                <p>Collection</p>
                <p>Collection for everyone</p>
            </div>
            <div className='flex justify-center items-center gap-2 w-40 h-8 md:h-12 rounded-lg md:mt-7 bg-gradient-to-b from-red-100 to-red-700 text-white p-1 font-medium'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="arrow_icon" />
            </div>

        </div>
        <div className='flex flex-1 items-center justify-center '>
           <img src={hero_image} alt="" className=' w-56 md:w-96' />
        </div>
    </div>}
    </>
  )
}

export default Hero