import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'


function Breadcrums(props){
  const {prduct} = props;
  return (
    <div>
      Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category}
      <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums