import React from 'react'
import SolarPanels from '../Assets/klipartz.com (1).png'


function Feature() {
  return (
    <div className=' w-full h-[screen] bg-[grey] py-20 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img src={SolarPanels} alt="/" />
      <div>
        <p className='text-[#e4d9d9] font-bold p-2 text-xl text-center md:text-5xl mt-4 md:text-left'>We are committed to providing clean renewable energy</p>
        <h1 className='text-[#d8cfcf]  p-2 text-2xl '>Our team of experts includes certified installers and technology specialists who have extensive experience in designing and installing customized systems to meet the unique needs of our clients.</h1>
      </div>
    </div>
    </div>
  )
}

export default Feature