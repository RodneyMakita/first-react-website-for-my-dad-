import React from 'react';
import { AnimationWrapper } from 'react-hover-animation';
import { Analytics } from '@vercel/analytics/react';

function About() {
  return (
    <div
      style={{
        overflow: 'hidden', // This will remove the scrollbar
        width: '100%',
        height: '100%'
      }}
      className='text-white'
      id='About'
    >
      <div className='bg-sky-50 py-16 sm:py-20 lg:py-28 px-4 md:px-8' id='about'>
        <div className="mx-auto max-w-screen-lg">
          <div className="mb-10 md:mb-14 lg:max-w-2xl md:max-w-xl mx-auto">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-3xl md:mb-6 lg:text-5xl">
              About Us
            </h1>
            <p className="text-gray-500 text-center sm:text-lg lg:text-2xl">
              Shakes Enteprises is a leading provider of comprehensive smart home solutions, including solar panel
              installations, home automation, CCTV installations and more.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center  ">
            <AnimationWrapper>
              <div className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100">
                <h3 className="mb-2 text-lg font-semibold md:text-2xl">Our Mission</h3>
                <p className="mb-4 text-gray-500">Our mission is to simplify and enhance the lives of our clients by
                  integrating cutting-edge technology into their homes and businesses </p>
              </div>
            </AnimationWrapper>
            <AnimationWrapper>
              <div className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100">
                <h3 className="mb-2 text-lg font-semibold md:text-2xl">Our Commitment</h3>
                <p className="mb-4 text-gray-500">To use only the highest quality products and stay up-to-date with
                  the latest industry advancements to ensure the best possible service.</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
        <Analytics />
      </div>
    </div>
  );
}

export default About;
