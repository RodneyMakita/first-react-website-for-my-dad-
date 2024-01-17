import React from 'react'
import {useState} from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/IMG-20240107-WA0051.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
import { Analytics } from '@vercel/analytics/react';

function Navbar() {
  const [nav,setNav] = useState(true);
  const handleNav = () =>{
  setNav(!nav)
  }
  return (
    
    <div className='fixed top-0 w-full z-40 bg-black opacity-70 border-b-2 border-none lg:pt-10 md:pt-11 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-screen-4xl mx-auto'>
      <img className=' mx-[9px] my-[-11px] md:my-[-199]' src={logo} width={130} height={177} alt="" />
        <h1 className='flex'></h1>

        <ul className='hidden md:flex font-black outline-none ]'>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300' >Home</li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'>Company</li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'>Resources</li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'>About</li>
            <il className='p-4 text-white hover:cursor-pointer hover:text-blue-300'>Contact</il>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} color="white"/> : < TiThMenuOutline size={30} color="white" /> }
          </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-[50%]  rounded-md bg-[#000000] bg-opacity-90 ease-in-out duration-300' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-3xl font-bold text-[#] m-4'><img src={logo} width={100} height={177} alt="" /></h1>
          <ul className='uppercase  gap-12 lg:flex '>
            <li className='p-4 text-lg font-semibold text-white  transition-all hover:text-blue-300 '>Home</li>
            <li className='p-4 text-lg font-semibold text-white  transition-all '>Company</li>
            <li className='p-4 text-lg font-semibold text-white  transition-all '>Resources</li>
            <li className='p-4 text-lg font-semibold text-white  transition-all '>About</li>
            <il className='p-4 text-lg font-semibold text-white transition-all '>Contact</il>
        </ul></div>
        <Analytics />
        </div>
  )
}

export default Navbar