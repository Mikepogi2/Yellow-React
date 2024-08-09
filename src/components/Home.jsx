import React from 'react'
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[900px] h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#ffff47] font-bold p-2 md:text-3xl text-2xl'>Ikaw, Ikaw ang aking Dilaw</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 px-2 text-white'>My torch is yellow.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-white'>Yellow also represents</p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-white' strings={['Sunshine.', 'Joy.', 'Hope.']} typeSpeed={80} backSpeed={110} loop/>
            </div>
            <p className='md:text-2xl text-md font-bold md:py-4 text-pretty text-white'>'Kung mayro'n mang kulay ang nag-sisilbing tanglaw ikaw, <span className='text-[#ffff47]'>ikaw ay dilaw</span>'</p>
            <button className='bg-[#ffff47] w-[200px] mx-auto rounded-md p-3 font-bold my-5 text-[#141302] hover:bg-white hover:text-black duration-300 ease-in-out'>Begin the Tour</button>
        </div>
    </div>
  )
}

export default Home