import React from 'react'
import New_collection from '../Components/Assets/new_collections'
import Items from './Items'

function NewCollection(){
  return (
    <div  className='flex flex-col gap-6 mt-10 mx-auto py-8'>
        <h1 className=' text-center text-3xl text-gray-400 font-medium'>NEW COLLECTION</h1>
        <hr className=' w-2/3 mx-auto h-2 rounded-lg bg-violet-800' />
        <div className='flex flex-col md:flex-row flex-wrap  gap-8 my-10 mx-auto max-w-5xl   '>
            {New_collection.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}
        </div>
    </div>
  )
}

export default NewCollection 
