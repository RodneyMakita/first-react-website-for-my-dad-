import React from 'react'
import SolarPanels from '../Assets/klipartz.com (1).png'
import { Analytics } from '@vercel/analytics/react';
import SimpleImageSlider from "react-simple-image-slider";


function Feature() {
  return (
    
    <div className=' bg-sky-50  py-16 md:py-20 lg:py-40 px-4 md:px-8' id='feature'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img src={SolarPanels} alt="/" />
      <div>
        <p className='text-[#141414] font-bold m-7 p-2 text-xl text-center md:text-5xl mt-4 md:text-left'>We are committed to providing clean renewable energy</p>
        <h1 className='text-[#161414]  p-2 m-7 text-2xl '>Our team of experts includes certified installers and technology specialists who have extensive experience in designing and installing customized systems to meet the unique needs of our clients.</h1>
      </div>
    </div>
    <Analytics />
    </div>
  )
}

export default Feature