import React from 'react'
import Typed from 'react-typed';
import { Link, animateScroll as scroll } from "react-scroll";
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';

function Hero() {
  const [nav,setNav] = useState(true);
  const handleNav = () =>{
  setNav(!nav)
  }
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)
  return (
    <div style={{backgroundImage: 'url(https://crefstech.co.za/img/hero.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '110vh'}}className='text-white   ' id='hero'>
        <div className='max-w-screen-2xl mt-[-40px] w-full h-screen mx-auto text-center  flex flex-col justify-center '>
        <p className='text-[#e9f0ed] font-bold p-2 md:text-4xl text-3xl font-sans mt-[150px]'>Welcome To Mshax Enteprise.</p>
        <h1 className='text-[#e9f0ed] md:text-2xl sm:text-6xl text-1xl font-bold font-sans pt-6'>Your One-Stop Solution For Reliable </h1>
        <Typed className='md:text-2xl sm:text-6xl text-1xl font-bold'
                    strings={['Solar Installations.', 'Security Solutions.','Household Services.']}
                    typeSpeed={20}
                    backSpeed={36}
                    loop
                />
                <div className='text-[[#3f9e76] font-bold p-2 md:text-4xl text-3xl pt-5 '>
                    <p>Empowering Homes, Securing Futures.</p>
                    
                </div>

                <button className='bg-[#ebf1ee] w-[150px] rounded-lg mx-auto font-black my-6 py-2 text-[black] transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-black hover:text-white ' ><Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Explore Services</Link></button>
        </div>
        <Analytics />

    </div>
  )
}

export default Hero