import React from 'react'
import {useState} from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/IMG-20240107-WA0051.jpg'
import { Link} from "react-scroll";
import { Analytics } from '@vercel/analytics/react';


function Navbar() {
  const [nav,setNav] = useState(true);
  const handleNav = () =>{
  setNav(!nav)
  }
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  return (
    
    <div className='fixed top-0 w-full z-40 bg-black opacity-70 border-b-2 border-none lg:pt-10 md:pt-11 flex justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-screen-4xl mx-auto' id='navbar'>
      <img className=' mx-[9px] my-[-11px] md:my-[-199]' src={logo} width={130} height={177} alt="" to='#'/>
        <h1 className='flex'></h1>

        <ul className='hidden md:flex font-black outline-none ]'>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300' ><Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='feature' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Feature</Link></li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Services</Link></li>
            <li className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link></li>
            <il className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='gallery' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Gallery</Link></il>
            <il className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='faq' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>FAQ</Link></il>
            <il className='p-4 text-white hover:cursor-pointer hover:text-blue-300'><Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link></il>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} color="white"/> : < TiThMenuOutline size={30} color="white" /> }
          </div>
          <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-[56%] rounded-md bg-[#000000] bg-opacity-90 ease-in-out duration-300' : 'fixed left-[-100%]' }>
    <h1 className='w-full text-3xl font-bold text-[#] m-4'><img to='hero' src={logo} width={100} height={177} alt="" /></h1>
    <ul className='uppercase flex-col items-center sm:flex-col sm:items-center lg:flex'>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='feature' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Feature</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Services</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='gallery' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Gallery</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='faq' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>FAQ</Link></li>
        <li className='p-4 text-lg font-semibold text-white transition-all hover:text-blue-300'><Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link></li>
    </ul>
</div>
        <Analytics />
        </div>
  )
}

export default Navbar