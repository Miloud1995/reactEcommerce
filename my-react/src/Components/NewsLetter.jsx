import React from 'react'

function NewsLetter(){
  return (
    <div className='flex flex-col max-w-4xl mt-40 py-20 items-center justify-center mx-auto  mb-8 gap-10 bg-gradient-to-l from-violet-100 to-violet-800'>
        <h1 className='text-gray-700 text-4xl font-medium'>Get Exclusive Offers On Your Email</h1>
        <p className='text-gray-700 text-lg'>Subscribe to our NewsLetter and Stay updated</p>
        <div className='flex items-center justify-between bg-white rounded-lg max-w-2xl w-96 px-16 h-12'>
            <input type="email" placeholder='your email adress' className='w-fill px-4 border-0 outline-none' />
            <button className=' w-24 rounded-xl text-white cursor-pointer h-8 px-4 bg-violet-700'>Subscibe</button>
        </div>
    </div>
  )
}

export default NewsLetter