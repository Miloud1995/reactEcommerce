import React  from 'react'
import { useContext } from 'react'
import footer_logo from '../Components/Assets/logo_big.png'
import instagram from '../Components/Assets/instagram_icon.png'
import pintester from '../Components/Assets/pintester_icon.png'
import whatsap from '../Components/Assets/whatsapp_icon.png'
import { ModeContext } from '../Context/Mode'

function Footer(){
    const {mode,setMode} = useContext(ModeContext)
  return (
    <>
    {mode && <div className='flex flex-col justify-center items-center gap-10'>
         <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-800 mt-8' />
        <div className='flex items-center gap-5'>
            <img src={footer_logo} alt="" />
            <p className=' text-4xl text-violet-800 font-bold'>SHOPPER</p>
        </div>
        <ul className='flex text-gray-600 font-medium text-lg gap-4 '>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Company</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Products</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Offices</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>About</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Contact</li>
        </ul>
        <div className='flex items-center gap-6'>
            <div className=' p-3 pb-4'>
                <img src={instagram} alt="" />
            </div>
            <div>
                <img src={pintester} alt="" />
            </div>
            <div>
                <img src={whatsap} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-4 items-center w-full text-gray-500 mb-6 text-lg'>
        <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-800' />

            <p>Copyright @ 2023 - All Right reserved</p>
        </div>
    </div>}

    {!mode && <div className='flex flex-col justify-center items-center gap-10'>
         <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-300 mt-8' />
        <div className='flex items-center gap-5'>
            <img src={footer_logo} alt="" />
            <p className=' text-4xl text-violet-300 font-bold'>SHOPPER</p>
        </div>
        <ul className='flex text-white font-medium text-lg gap-4 '>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Company</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Products</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Offices</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>About</li>
            <li className=' hover:scale-105 duration-200 cursor-pointer'>Contact</li>
        </ul>
        <div className='flex items-center gap-6'>
            <div className=' p-3 pb-4'>
                <img src={instagram} alt="" />
            </div>
            <div>
                <img src={pintester} alt="" />
            </div>
            <div>
                <img src={whatsap} alt="" />
            </div>
        </div>
        <div className='flex flex-col gap-4 items-center w-full text-white mb-6 text-lg'>
        <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-300' />

            <p>Copyright @ 2023 - All Right reserved</p>
        </div>
    </div>}
    </>
  )
}

export default Footer