import React, { useEffect } from 'react'
import Haewon from '../assets/haewon.png'
import Minami from '../assets/minami.jpg'
import Asa from '../assets/asa.jpg'
import Card from './Card'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Cards = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className='bg-[#e4c10d] w-full py-[4rem] px-4'>
        <h1 className='text-4xl font-bold text-center mb-8'>Our members</h1>
        <div className='max-w-[1240px] flex flex-col md:flex-row justify-center items-center relative gap-8 mx-auto'>
            <Card 
              picture={Haewon} 
              name="Oh Haewon"
              quote='"가장 이상한 사람은 누구일까?"'
              delay={'200'}
              year='(2019)'
            />
            <Card 
              picture={Minami} 
              name="Hamabe Minami"
              quote='"黄色は心を温める色。"'
              delay={'400'}
              year='(2017)'
            />
            <Card 
              picture={Asa} 
              name="Enami Asa"
              quote='"黄色は希望と喜びの色です。"'
              delay={'600'}
              year='(2023)'
            />
        </div>
    </div>
  )
}

export default Cards
