import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {

    const [ nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='absolute top-0 w-full'>
        <div className='flex justify-between items-center px-4 h-24 mx-auto max-w-[1240px]'>
            <h1 className='text-3xl font-bold text-[#ffff47]'>Dilaw</h1>
            <ul className='hidden gap-4 text-xl font-bold md:flex text-white'>
                <li>My Home</li>
                <li>Yellow</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <button onClick={handleNav} className='cursor-pointer block md:hidden'>
                { nav ? <AiOutlineClose size={20} color='white'/> : <AiOutlineMenu size={20} color='white'/>}
            </button>

            <div className={ nav ? 'fixed top-0 left-0 text-xl font-semibold h-full w-[60%] border-r border-r-slate-400 bg-transparent backdrop-blur-lg ease-in-out duration-500' : 'fixed top-0 left-[-100%] text-xl font-semibold h-full w-[40%] border-r border-r-slate-400 bg-white ease-in-out duration-500'}>
                <h1 className='text-3xl font-bold text-[#ffff47] p-4'>Dilaw</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600 text-sm text-white'>My Home</li>
                    <li className='p-4 border-b border-gray-600 text-sm text-white'>Yellow</li>
                    <li className='p-4 border-b border-gray-600 text-sm text-white'>Resources</li>
                    <li className='p-4 border-b border-gray-600 text-sm text-white'>About</li>
                    <li className='p-4 border-b border-gray-600 text-sm text-white'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar