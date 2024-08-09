import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Card = ({ picture, name, quote, delay, year }) => {
    useEffect(() => {
        Aos.init({
            easing: 'ease-in-out',
        });
    }, [])

  return (
    <div>
      <div data-aos="fade-right" data-aos-delay={delay}>
        <div className='group py-5 px-5 bg-white shadow-2xl hover:grayscale-0 hover:pb-[10rem] grayscale duration-300 ease-in-out transition-all'>
            <img className='max-w-[400px] w-[100%] h-full object-cover' src={picture} alt="/" />
            <div className='group-hover:opacity-100 opacity-0 duration-200 ease-in-out absolute bottom-10 left-6'>
              <h1 className='text-2xl sm:text-2xl md:text-[26px] font-bold text-[#e4c10d]'>{ name }</h1>
              <p>{ quote }</p>
              <p>- { name } { year }</p>
              <p className='text-xs'>She didn't actually said that</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card