import React from 'react'
import logo1 from '../Assets/logo.png'
import { Analytics } from '@vercel/analytics/react';

function CustomFooter() {
  return (
    <div>
      <footer
        className="w-full border-t border-slate-800 bg-slate-950/95 text-slate-300"
        id="footer"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between md:py-14 lg:px-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-50"
              aria-label="Mshax Enterprise home"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/40">
                <img src={logo1} alt="Mshax Enterprise logo" width={22} height={22} />
              </span>
              <span>Mshax Enterprise</span>
            </a>
            <p className="max-w-sm text-sm text-slate-400">
              Smart energy, security, and home services that keep your property running
              smoothly and safely.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-8 md:flex-row md:justify-end">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:justify-start">
              <a href="#services" className="hover:text-sky-300 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-sky-300 transition-colors">
                About
              </a>
              <a href="#faq" className="hover:text-sky-300 transition-colors">
                FAQ
              </a>
              <a href="#gallery" className="hover:text-sky-300 transition-colors">
                Gallery
              </a>
              <a href="/privacy-policy" className="hover:text-sky-300 transition-colors">
                Privacy Policy
              </a>
            </nav>

            <div className="flex flex-col items-center gap-3 md:items-end">
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:bg-slate-800 hover:text-sky-300"
                >
                  <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:bg-slate-800 hover:text-sky-300"
                >
                  <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit our LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 ring-1 ring-white/10 transition hover:bg-slate-800 hover:text-sky-300"
                >
                  <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-slate-500 text-center md:text-right">
                © {new Date().getFullYear()} Mshax Enterprise (Pty) Ltd. All rights reserved.
                <br className="hidden sm:inline" /> Developed by SRT Dynamics
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default CustomFooter