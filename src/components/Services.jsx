import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

function Services() {
  return (
    <div className='bg-sky-50  py-16 md:py-20 lg:py-40 px-4 md:px-8'>
        <div className='mx-auto max-w-screen-xl '>
        <div class="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl text-gray-800 md:mb-6 lg:text-5xl">Our
                        Services
                    </h2>

                    <p className="mx-auto max-w-xl text-center text-gray-500 md:text-lg lg:text-2xl">We use the latest
                        technological advancements to ensure our clients receive the best possible solutions.</p>
                </div>
                <div className='grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3'>
                <AnimationWrapper>
                <div class="group services-card" className='cursor-pointer'>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 2a4 4 0 1 0 8 0"></path>
                            <path d="M4 3h1"></path>
                            <path d="M19 3h1"></path>
                            <path d="M12 9v1"></path>
                            <path d="M17.2 7.2l.707 .707"></path>
                            <path d="M6.8 7.2l-.7 .7"></path>
                            <path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z"></path>
                            <path d="M4 17h16"></path>
                            <path d="M10 13l-1 8"></path>
                            <path d="M14 13l1 8"></path>
                        </svg>

                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Solar Panels</h3>
                        <p class="text-gray-500">We conduct site assessments to determine the feasibility of
                            installing solar panels, designing and installing solar panel systems, providing ongoing
                            maintenance.</p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                            </path>
                            <path d="M6 6v-2"></path>
                            <path d="M19 4l0 2"></path>
                            <path d="M6.5 13l3 0"></path>
                            <path d="M14.5 13l3 0"></path>
                            <path d="M16 11.5l0 3"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Power Backup System</h3>
                        <p class="text-gray-500"> installation and maintenance of a backup power system that uses
                            batteries to provide electricity during power outages or other disruptions to the electrical
                            grid. </p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5"></path>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143"></path>
                            <path d="M21 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M21 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M16 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M21 16l-5 3l5 2"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Home Automation</h3>
                        <p class="text-gray-500">We install and integrate various smart devices and
                            technologies that allow homeowners to control and automate various functions within their
                            home, such as lighting, security systems, etc </p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card " className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M8 16a3 3 0 0 1 -3 3"></path>
                            <path d="M16 16a3 3 0 0 0 3 3"></path>
                            <path d="M12 16v4"></path>
                            <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                            <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Air Conditioner</h3>
                        <p class="text-gray-500">We do maintenance, repair, and installation of air conditioning
                            systems.
                            This can include both central air conditioning systems and individual room air conditioners.
                        </p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"></path>
                            <path d="M10 18h-7"></path>
                            <path d="M21 18h-7"></path>
                            <path d="M6 15l-3 3l3 3"></path>
                            <path d="M18 15l3 3l-3 3"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Automated Gate/Garage</h3>
                        <p class="text-gray-500">We install motorized gates and garage doors, as well as ongoing
                            maintenance and repair to ensure that the system operates smoothly and safely. </p>
                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 3m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
                            <path d="M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M19 7v7a7 7 0 0 1 -14 0v-7"></path>
                            <path d="M12 14l.01 0"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">CCTV and Alarm System</h3>
                        <p class="text-gray-500">We do the installation, maintenance, and repair of
                            closed-circuit
                            television (CCTV) cameras and alarm systems in homes, businesses, and other settings.
                        </p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M2 12h9"></path>
                            <path d="M15 12h7"></path>
                            <path d="M11 5v14"></path>
                            <path d="M15 9v6"></path>
                            <path d="M3 5h4"></path>
                            <path d="M5 3v4"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Electrical Wiring (COC)</h3>
                        <p class="text-gray-500"> installation of new wiring systems, the repair of damaged or
                            malfunctioning wiring, and the maintenance of existing wiring systems to ensure that
                            they
                            are safe and up to code.</p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Electric Fencing</h3>
                        <p class="text-gray-500">We do the installation of the fencing system, the connection
                            of
                            the wiring and energizer, and the testing and maintenance of the system to ensure that
                            it
                            operates effectively and safely.</p>

                    </div>
                    </AnimationWrapper>
                    <AnimationWrapper>
                    <div class="group services-card" className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 mb-6 group-hover:text-primary" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
                        </svg>
                        <h3 class="mb-2 text-lg font-semibold md:text-xl">Asset Tracking</h3>
                        <p class="text-gray-500">An asset tracking and monitoring service involves the use of
                            technology to track and monitor the location, status, and performance of assets such as
                            vehicles, equipment, and inventory.</p>

                    </div>
                    </AnimationWrapper>
                </div>
        </div>
    </div>
  )
}

export default Services