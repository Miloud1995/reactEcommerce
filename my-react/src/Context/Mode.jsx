import { createContext, useState } from "react";



export const ModeContext = createContext([])

const ModeContextProvider = (props)=>{
   const [mode,setMode]=useState(true)
    return(
        <ModeContext.Provider value={{mode ,setMode}}>
        {props.children}
        </ModeContext.Provider>
    )
    

}
export default ModeContextProvider