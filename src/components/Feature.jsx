import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SolarPanel1 from '../Assets/p1 (1).png';
import SolarPanel2 from '../Assets/P1(2).png';
import SolarPanel3 from '../Assets/p1 (3).png';

function Feature() {
  const images = [SolarPanel1, SolarPanel2, SolarPanel3];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='bg-sky-50 py-16 md:py-20 lg:py-40 px-4 md:px-8' id='feature'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slider Image ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Carousel>
        <div className='flex flex-col justify-center'>
          <p className='text-[#141414] font-bold m-7 p-2 text-xl text-center md:text-5xl mt-4 md:text-left'>We are committed to providing clean renewable energy</p>
          <h1 className='text-[#161414] p-2 m-7 text-2xl text-center md:text-left'>Our team of experts includes certified installers and technology specialists who have extensive experience in designing and installing customized systems to meet the unique needs of our clients.</h1>
        </div>
      </div>
      <Analytics />
    </div>
  );
}

export default Feature;
