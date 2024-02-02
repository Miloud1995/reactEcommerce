import React, { useState } from 'react'
import '../Pages/login.css'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {Link, Outlet} from "react-router-dom"

function LoginSingup(){
    const [eye,Seteye] = useState(true)
  return (

    <div>
         <Outlet/>
        <div className='FormLogin flex flex-col justify-center items-center  '>
            <h1 className=' text-gray-600 text-3xl font-bold py-6'>Singup</h1>
            <form className='shadow-md shadow-stone-800 p-8 mb-8'>
                <div className='flex justify-start items-center py-4 w-full '>
                
                <input type="text" id='name' name='name' placeholder='Your Name' className=' opacity-70 border-s-2 outline-none border-gray-300 px-4 py-2 w-full' />
                </div>
                <div className='flex justify-start items-center py-4 w-full '>
                
                <input type="email" id='email' name='email' placeholder='Your Email'className=' opacity-70 border-s-2 outline-none border-gray-300 px-4 py-2 w-full' />
                </div>
                <div className='flex justify-start items-center py-4 w-full '>
                
                <input type={eye? "password" : "text"} id='password' name='password' placeholder='Your Password'className=' w-full opacity-70 border-s-2 outline-none border-gray-300 px-4 py-2' />
                 <span className='bg-white py-2 px-1 opacity-70' onClick={()=>{Seteye(!eye)}}>{eye?<FaEye  size={23}/> : <FaEyeSlash size={23}/>}</span>
                </div>

                <div className='flex justify-center items-center gap-5 mt-2'>
                    <input type="checkbox" name='' id='' />
                    <p className='text-gray-700'>
                        I agree of the terms of use and privacy policy
                    </p>
                </div>

                <div className='flex justify-center py-7'>
                    <button type='submit' className=' px-7 py-2 rounded-xl bg-gradient-to-r text-white from-violet-100 to-violet-800'>SingUp</button>
                </div>
                <div className='flex justify-center'>
                    <p className='text-gray-700'>already have an acount   <Link to="loginform" className=' text-violet-800 font-bold cursor-pointer'>Login here</Link></p>
                </div> 
               
                
            </form>
           
        </div>
    </div>
  )
}

export default LoginSingup