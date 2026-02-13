import React from 'react';
import Typed from 'react-typed';
import coverMobile from '../Assets/bg-mobile.jpg';
import coverDesktop from '../Assets/bg-desktop.jpg';
import { Link } from "react-scroll";
import { Analytics } from '@vercel/analytics/react';

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
      id="hero"
    >
      <style>{`
        .hero-background {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .hero-background {
            background-image: url(${coverMobile});
          }
        }

        @media (min-width: 769px) {
          .hero-background {
            background-image: url(${coverDesktop});
          }
        }
      `}</style>

      <div className="hero-background" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950/95" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200 shadow-sm backdrop-blur">
            Welcome to Mshax Enterprise
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Your one-stop partner for
            <span className="block bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
              reliable smart energy & security
            </span>
          </h1>
          <div className="mt-4 text-lg text-slate-200/90 sm:text-xl">
            <Typed
              className="font-semibold text-sky-200"
              strings={['Solar installations', 'Security solutions', 'Household services']}
              typeSpeed={30}
              backSpeed={40}
              loop
            />
          </div>
          <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Empowering homes and businesses with clean energy, smart automation, and protection that works around the clock.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Explore services
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur transition hover:border-sky-400 hover:text-sky-200"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
      <Analytics />
    </section>
  );
}

export default Hero;
