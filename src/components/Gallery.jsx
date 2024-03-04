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
import p8 from '../Assets/IMG-20240107-WA0049.jpg';

function Gallery() {
  const images = [p1, p2, p3, p4 ,p5 ,p6 ,p7 ,p8 ];
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
    <div className='bg-sky-50 py-16 sm:py-20 lg:py-28' id='gallery'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10'>
          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl text-gray-800 lg:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-xl text-center md:text-lg lg:text-2xl">
            A showcase of our latest projects
          </p>
        </div>
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-12 md:grid-cols-4 md:gap-6 xl:gap-8">
          {images.map((image, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                loading="lazy"
                alt={`Photo by Rudolph Timba ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
            </a>
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
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </div>
  );
}

export default Gallery;
