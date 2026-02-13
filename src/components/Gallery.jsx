import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import p1 from '../Assets/IMG-20240107-WA0046.jpg';
import p2 from '../Assets/IMG-20240107-WA0047.jpg';
import p3 from '../Assets/IMG-20240107-WA0048.jpg';
import p4 from '../Assets/IMG-20240107-WA0050.jpg';
import p5 from '../Assets/IMG-20240304-WA0013.jpg';
import p6 from '../Assets/IMG-20240304-WA0014.jpg';
import p7 from '../Assets/IMG-20240304-WA0015.jpg';
import p8 from '../Assets/IMG20230128200857.jpg';

function Gallery() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-28" id="gallery">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Our work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
            Recent installations & projects
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-slate-300 md:text-base lg:text-lg">
            A closer look at the solar, security, and smart home solutions we’ve delivered
            for our clients.
          </p>
        </div>
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-14 md:grid-cols-4 md:gap-5 xl:gap-6">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className="group relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-900/60 md:h-64"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                loading="lazy"
                alt={`Project ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70 group-hover:opacity-80" />

              <span className="relative mx-4 mb-3 inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-white/10 md:text-sm">
                Project {index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Analytics />
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex((lightboxIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
}

export default Gallery;
