import React, { useContext, useState } from 'react'
import logo from '../Components/Assets/logo.png'
import cart_icon from '../Components/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import{FaBars,FaTimes} from 'react-icons/fa'
import { ModeContext } from '../Context/Mode'



function NavBar(){
    const[nav,Setnav] = useState(false);
    
    const{mode,setMode} = useContext(ModeContext)
  return (
    <>
    
        
   {mode && <div className=' flex justify-around p-1 shadow-md shadow-gray-500 '>
           <div onClick={()=>{Setnav(!nav)}}  className='md:hidden cursor-pointer hover:text-slate-200 hover:scale-205 duration-200 z-10 mt-2 '>
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        <div className='flex items-center gap-2'>
            <img src={logo} className='w-11 h-11 md:w-16 md:h-16' alt="logo" />
            <p className=' text-violet-800 text-xl md:text-2xl font-bold'>SHOPPER</p>
        </div>
        <ul className=' hidden md:flex items-center gap-3 list-none text-gray-700 '>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500  items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/">Shop</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/men">Men</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/women">Women</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/kids">Kids</Link></li>
        </ul>
       

          {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-violet-600 to-violet-100 text-white'>
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700 '><Link to="/" onClick={()=>{Setnav(false)}} smooth duration={500}>Shop</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Men"  onClick={()=>{Setnav(false)}} smooth duration={500}>Men</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Women"  onClick={()=>{Setnav(false)}} smooth duration={500}>Women</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Kids"  onClick={()=>{Setnav(false)}} smooth duration={500}>Kids</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/login"  onClick={()=>{Setnav(false)}}  smooth duration={500}>Login</Link></li>
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/loginform"  onClick={()=>{Setnav(false)}}  smooth duration={500}>Register</Link></li> 
           
              
          </ul>}



        <div className='flex items-center gap-8 '>
           <Link to='/login' className=' hidden md:flex'><button className=' w-24 h-9 rounded-xl text-gray-600 hover:bg-violet-800 duration-200 cursor-pointer active:bg-slate-400 hover:text-white outline-0 border-2  border-gray-400'>Login</button></Link> 
            <Link to="/cart"><img src={cart_icon} className='w-5 md:w-8 h-5 md:h-8' alt="cart-icon" /></Link>
            <div className=' w-4 h-4 flex items-center justify-center -mt-7 -ml-8 rounded-xl bg-red-600 text-white'>0</div>
            {mode &&<div className='border-2 border-gray-700 w-9 h-5 rounded-xl cursor-pointer'>
                <div onClick={()=>{setMode(!mode)}} className=' bg-black w-4 rounded-xl h-4 cursor-pointer'>
                </div>
            </div>}

            {!mode &&<div className='border-2 border-gray-700 w-9 h-5 rounded-xl bg-black hover:cursor-pointer'>
                <div onClick={()=>{setMode(!mode)}} className=' bg-white ml-4 w-4 rounded-xl h-4 hover:cursor-pointer'>
                </div>
            </div>}
            
            
            
        </div>
        
    </div>}

    {!mode && <div className=' flex justify-around p-1 shadow-md shadow-gray-500 bg-slate-600 text-white'>
           <div onClick={()=>{Setnav(!nav)}}  className='md:hidden cursor-pointer hover:text-slate-200 hover:scale-205 duration-200 z-10 mt-2 '>
              {nav ? <FaTimes size={30} color='white' /> : <FaBars size={30} color='white' />}
          </div>
        <div className='flex items-center gap-2'>
            <img src={logo} className='w-11 h-11 md:w-16 md:h-16' alt="logo" />
            <p className=' text-violet-200 text-xl md:text-2xl font-bold'>SHOPPER</p>
        </div>
        <ul className=' hidden md:flex items-center gap-3 list-none text-white '>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500  items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/">Shop</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/men">Men</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/women">Women</Link></li>
            <li className='flex flex-col visited:border-b-2 visited:border-red-500 items-center gap-2 justify-center cursor-pointer hover:scale-105 duration-200'><Link to="/kids">Kids</Link></li>
        </ul>
       

          {nav &&
          <ul className='flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen bg-gradient-to-b from-violet-600 to-violet-100 text-white'>
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700 '><Link to="/" onClick={()=>{Setnav(false)}} smooth duration={500}>Shop</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Men"  onClick={()=>{Setnav(false)}} smooth duration={500}>Men</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Women"  onClick={()=>{Setnav(false)}} smooth duration={500}>Women</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/Kids"  onClick={()=>{Setnav(false)}} smooth duration={500}>Kids</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/login"  onClick={()=>{Setnav(false)}}  smooth duration={500}>Login</Link></li> 
              <li className='px-4 cursor-pointer capitalize text-white hover:scale-105 duration-200 py-6 text-4xl hover:border-b-2 border-violet-700'><Link to="/loginform"  onClick={()=>{Setnav(false)}}  smooth duration={500}>Register</Link></li>
              
          </ul>}



        <div className='flex items-center gap-8 '>
           <Link to='/login' className=' hidden md:flex'><button className=' w-24 h-9 rounded-xl text-white hover:bg-violet-800 duration-200 cursor-pointer active:bg-slate-400 hover:text-white outline-0 border-2  border-gray-400'>Login</button></Link> 
            <Link to="/cart"><img src={cart_icon} color='white' className='w-5 md:w-8 h-5 md:h-8' alt="cart-icon" /></Link>
            <div className=' w-4 h-4 flex items-center justify-center -mt-7 -ml-8 rounded-xl bg-red-600 text-white'>0</div>
            {mode &&<div className='border-2 border-gray-100 w-9 h-5 rounded-xl'>
                <div onClick={()=>{setMode(!mode)}} className=' bg-black w-4 rounded-xl h-4'>
                </div>
            </div>}

            {!mode &&<div className='border-2 border-gray-700 w-9 h-5 rounded-xl bg-black'>
                <div onClick={()=>{setMode(!mode)}} className=' bg-white ml-4 w-4 rounded-xl h-4'>
                </div>
            </div>}
            
            
            
        </div>
        
    </div>}
    </>
  )
}

export default NavBar