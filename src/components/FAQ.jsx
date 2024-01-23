import React from 'react'
import { Analytics } from '@vercel/analytics/react';

function FAQ() {
  return (
    <div className=' bg-sky-50 py-16 sm:py-20 lg:py-28 px-11' id='faq'>
        <div>

<h2 className="py-[20%] md:py-[8%] mb-2 text-center text-2xl font-bold md:text-3xl text-gray-800  lg:text-5xl">
    Answers to our Frequently Asked Questions.
</h2>
<div className="space-y-6 max-w-screen-lg mx-auto transition-all ">
                    <details className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100 faq-card [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="pt-4 py-6 font-medium md:text-lg">
                                What are the benefits of solar energy?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Solar energy is a renewable energy source that can help reduce your carbon footprint, lower
                            your electricity bills, and increase the value of your property. Solar panels also require
                            minimal maintenance and have a lifespan of 25-30 years.
                        </p>
                    </details>

                    <details className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100 group faq-card [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="pt-4 py-4 font-medium text-gray-900 md:text-lg">
                                How much does a solar panel system cost?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            The cost of a solar panel system varies depending on factors such as the size of the system,
                            the location of the installation, and the quality of the equipment used. contact us for a
                            quote.
                        </p>
                    </details>

                    <details className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100 group faq-card [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="pt-4 font-medium text-gray-900 md:text-lg">
                                How long does it take to install a solar panel system
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            The installation timeline for a solar panel system can vary depending on the size of the
                            system and the complexity of the installation. Typically, a residential installation can
                            take anywhere from 1 to 3 days.
                        </p>
                    </details>

                    <details className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100 group faq-card [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="pt-4 font-medium text-gray-900 md:text-lg">
                                What happens to excess energy produced by solar panels?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Excess energy produced by solar panels can be stored in a battery backup system or sold back
                            to the grid through a process called net metering.
                        </p>
                    </details>

                    <details className="flex flex-col rounded-lg shadow p-4 md:p-6 bg-sky-50 border border-gray-100 group faq-card [&amp;_summary::-webkit-details-marker]:hidden">
                        <summary className="flex items-center justify-between cursor-pointer">
                            <h2 className="font-medium text-gray-900 md:text-lg">
                                How long do solar panels last?
                            </h2>

                            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Solar panels have a lifespan of 25-30 years. However, the inverter, which converts the DC
                            power produced by the panels into AC power for your home, may need to be replaced every
                            10-15 years.
                        </p>
                    </details>
                </div>
</div>
<Analytics />
    </div>
    
  )
}

export default FAQ