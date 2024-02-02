import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums'

function Products(){
    const {all_products} = useContext(ShopContext)
    const {product_id}= useParams()
    const product = all_products.find((e)=>e.id===Number(product_id))
  return (
   <div>
    <Breadcrums product={product} />
   </div>
  )
}

export default Products 