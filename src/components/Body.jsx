import React, { useEffect } from 'react'
import Portrait from '../assets/home.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Body = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-in-out'
    });
  }, [])
  return (
    <div className='w-full px-4 py-16 bg-[#e4c10d]'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center md:flex-row'>
          <img src={Portrait} alt="/" className='mx-auto my-4 w-[600px]' data-aos="fade-right"/>
          <div className='flex flex-col justify-center' data-aos="fade-left">
            <p className='uppercase text-white font-bold text-xl'>Yellow with White</p>
            <h1 className='font-bold text-2xl md:text-4xl sm:text-3xl py-2'>Become a 'yellow' person</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aliquid asperiores unde incidunt officiis aliquam adipisci fugiat repellendus, aut magnam deserunt dicta animi soluta temporibus. Eligendi rerum impedit obcaecati doloribus.</p>
            <button className='bg-[#141302] w-[200px] mx-auto rounded-md p-3 font-bold my-5 text-[#e4c10d] md:mx-0 hover:bg-white hover:text-black ease-out duration-300'>Begin the Tour</button>
          </div>
        </div>
    </div>
  )
}

export default Body