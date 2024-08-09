import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaGitSquare, FaLinkedin, FaDribbbleSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='py-16 px-4 gap-16 max-w-[1240px] mx-auto flex flex-col text-white justify-center items-center md:flex-row'>
        <div className='md:w-[40%] w-full text-sm lg:text-base'>
            <h4 className='text-2xl text-[#e4c10d] font-bold'>YELLOW.</h4>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis ea esse nemo ipsa ad, laudantium, dolore quia, minus fugit molestiae mollitia </p>
            <div className='flex gap-4'>
                <FaFacebookSquare size={30} />
                <FaTwitterSquare size={30} />
                <FaInstagramSquare size={30} />
                <FaGitSquare size={30} />
                <FaLinkedin size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='flex md:w-[50%] w-full justify-between text-sm lg:text-base'>
            <ul className='flex flex-col gap-2'>
                <li className='text-[#e4c10d] opacity-50'>Solutions</li>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
            </ul>
            <ul className='flex flex-col gap-2'>
                <p className='text-[#e4c10d] opacity-50'>Support</p>
                <p>Pricing</p>
                <p>Documentation</p>
                <p>Guides</p>
                <p>API Status</p>
            </ul>
            <ul className='flex flex-col gap-2'>
                <p className='text-[#e4c10d] opacity-50'>Company</p>
                <p>About</p>
                <p>Blog</p>
                <p>Jobs</p>
                <p>Press Partners</p>
            </ul>
            <ul className='flex flex-col gap-2'>
                <p className='text-[#e4c10d] opacity-50'>Legal</p>
                <p>Terms</p>
                <p>Agreements</p>
                <p>Privacy</p>
                <p>Statements</p>
            </ul>
        </div>
    </div>
  )
}

export default Footer