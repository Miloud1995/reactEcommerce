import { createContext } from "react";
import all_product from '../Components/Assets/all_product'


export const ShopContext = createContext([])

const ShopContextProvider = (props)=>{
   const all_products = all_product
    return(
        <ShopContext.Provider value={{all_products}}>
        {props.children}
        </ShopContext.Provider>
    )
    

}
export default ShopContextProvider