import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import drop_icon from '../Components/Assets/dropdown_icon.png'
import Items from '../Components/Items'

function ShopCategory(props){
    const {all_products} = useContext(ShopContext)
  return (
    <div >
        <img src={props.banner} alt="" />
        <div className=' flex justify-between items-center mt-8 ml-4 text-gray-700 text-lg font-medium'>
            <p>
                <span>Showing 1 to 12</span> Out of 36
            </p>
            <div className='flex items-center px-2 mr-2 pb-1 gap-4 font-bold bg-violet-300 text-gray-800 rounded-lg border-2 border-violet-800'>
                 Sort by <img src={drop_icon} alt=""  className='mt-2'/>
            </div>
        </div>
        <div className='flex justify-center mx-auto flex-wrap gap-11 my-20'>
            {all_products.map((item,i)=>{
                if(props.category === item.category)
                {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                }
                else{
                    return null
                }

            })}
        </div>
        <div className='flex justify-center items-center bg-gradient-to-r from-violet-200 to-violet-800 p-2 text-white w-60 text-center mx-auto rounded-xl mb-20'>
            See More ...
        </div>

    </div>
  )
}

export default ShopCategory