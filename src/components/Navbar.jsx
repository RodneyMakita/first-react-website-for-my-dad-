'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import './input.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-scroll'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]

// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 lg:flex-1">
          <a href="#hero" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/40">
              <img
                alt="Mshax Enterprise logo"
                src={logo}
                className="h-6 w-6 object-contain"
              />
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
              Mshax Enterprise
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-slate-800 px-3 py-2 text-slate-100 shadow-sm ring-1 ring-white/10 hover:bg-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Popover className="relative">
            {/* <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span></span>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
            </PopoverButton> */}

            {/* <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel> */}
          </Popover>

          <a href="#hero" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='hero' spy={true} smooth={true} offset={-80} duration={500}>Home</Link>
          </a>
          <a href="#feature" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='feature' spy={true} smooth={true} offset={-80} duration={500}>Features</Link>
          </a>
          <a href="#services" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='services' spy={true} smooth={true} offset={-80} duration={500}>Services</Link>
          </a>
          <a href="#about" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='about' spy={true} smooth={true} offset={-80} duration={500}>About</Link>
          </a>
          <a href="#gallery" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='gallery' spy={true} smooth={true} offset={-80} duration={500}>Gallery</Link>
          </a>
          <a href="#faq" className="text-sm font-medium leading-6 text-slate-100 hover:text-sky-300 transition-colors">
            <Link to='faq' spy={true} smooth={true} offset={-80} duration={500}>FAQ</Link>
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-400 transition-colors">
            <Link to='contact' spy={true} smooth={true} offset={-80} duration={500}>Contact</Link>
          </a>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950/95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 ring-1 ring-sky-500/40">
                <img
                  alt="Mshax Enterprise logo"
                  src={logo}
                  className="h-5 w-5 object-contain"
                />
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-50">
                Mshax Enterprise
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full p-2.5 text-slate-200 ring-1 ring-white/10 hover:bg-slate-800"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#hero"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='hero' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                </a>
                <a
                  href="#feature"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='feature' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>Features</Link>
                </a>
                <a
                  href="#services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='services' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>Services</Link>
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>About</Link>
                </a>
                <a
                  href="#gallery"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='gallery' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                </a>
                <a
                  href="#faq"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-slate-800"
                >
                  <Link to='faq' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 bg-sky-400 hover:bg-sky-300"
                >
                  <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
