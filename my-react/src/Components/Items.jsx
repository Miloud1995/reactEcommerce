import React, { useContext } from 'react'
import { ModeContext } from '../Context/Mode'

function Items(props){
    const {mode,setMode} = useContext(ModeContext)
  return (
    <>
    {mode && <div className=' w-80 scale-105 duration-200'>
        <img src={props.image} alt=""  className='opacity-80 hover:opacity-100 hover:scale-105 duration-300 shadow-md shadow-violet-800'/>
        <h2 className=' text-base text-gray-700 pt-3'>{props.name}</h2>
        <div className='flex justify-between gap-2'>
            <div className=' text-gray-700 font-medium text-base'>
              $ {props.new_price}
            </div>
            <div className=' text-red-400 font-medium text-base  line-through'>
            $ {props.old_price}
            </div>
        </div>
    </div>}

    {!mode && <div className=' w-80 scale-105 duration-200 bg-gray-800'>
        <img src={props.image} alt=""  className='opacity-80 hover:opacity-100 hover:scale-105 duration-300 shadow-md shadow-violet-800'/>
        <h2 className=' text-base text-white py-3 px-3'>{props.name}</h2>
        <div className='flex justify-between gap-2 px-3 py-3'>
            <div className=' text-white font-medium text-base'>
              $ {props.new_price}
            </div>
            <div className=' text-red-400 font-medium text-base  line-through'>
            $ {props.old_price}
            </div>
        </div>
    </div>}
    </>
  )
}

export default Items