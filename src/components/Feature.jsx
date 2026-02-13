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
    <section className="bg-slate-900 py-16 md:py-20 lg:py-28" id="feature">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-6 lg:px-8">
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/80 shadow-2xl shadow-sky-500/10">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3500}
              showDots={true}
              arrows={false}
            >
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Solar installation ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Why choose Mshax
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Clean, reliable power tailored to your home or business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Our certified team designs and installs solar and backup systems that maximise
            efficiency, resilience, and long-term value. From the first assessment to
            ongoing support, we make clean energy simple and dependable.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-sky-200">Certified installers</p>
              <p className="mt-1 text-sm text-slate-300">
                Experienced specialists with a track record of successful residential and
                commercial projects.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold text-sky-200">Custom-fit systems</p>
              <p className="mt-1 text-sm text-slate-300">
                Every design is tailored to your roof, usage patterns, and future growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </section>
  );
}

export default Feature;
