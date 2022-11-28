import React from 'react'

function Navbar() {
  return (
    <>
        <nav className='h-16 bg-black sticky top-0 flex'>
            <div className='h-full w-52 text-white flex items-center text-2xl pl-5'>JK</div>
            <div className='w-full  flex'>
                <div className='flex justify-start items-start'>
                    <button className='w-24 text-white hover:text-gray-300 transition-all duration-200'>Aria</button>
                    <button className='w-24 text-white hover:text-gray-300 transition-all duration-200'>Axes</button>
                </div>
                <div className='flex justify-end items-end flex-auto '>
                    <button className='w-60 text-white hover:text-gray-300 transition-all duration-200'>Create Your Keypad</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
