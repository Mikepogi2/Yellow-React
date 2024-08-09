import React from 'react'

const Letter = () => {
  return (
    <div className="flex flex-col justify-start md:flex-row md:justify-around items-center py-16 gap-6">
      <div className='sm:ml-4 text-white'>
        <h1 className='sm:text-2xl md:text-3xl text-xl text-white font-bold'>Want to get featured and be <span className='text-[#e4c10d]'>yellow?</span></h1>
        <p className='text-white'>be a better person by subscribing to our newsletter</p>
      </div>

      <div>
        <div>
          <input type="text" className='rounded-md p-2 px-4 w-[150px] md:w-[200px]' placeholder='Enter your email'/>
          <button className='bg-[#e4c10d] text-[#141302] rounded-md p-2 px-2 ml-4 font-bold md:px-4'>Notify Me</button>
        </div>

        <div className='pt-4'>
        <p className='text-white'>We use cookies for better functionality.</p>
        <a href="/" className='text-[#e4c10d] border-b border-b-[#e4c10d]'>Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Letter