import React from 'react'
import Link from 'next/link'
import { Separator } from './ui/separator'

export default function Footer() {
  return (
    <footer className='bg-primary py-10 md:py-14 px-4'>
      <div className="max-w-screen-web mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-6 gap-x-4">
        <div className='md:col-span-2'>
          <div className='text-white inline-block'>
            <p className='font-bold text-2xl'>Konstruct</p>
            <Separator className='w-1/2 h-1' />
          </div>
          <p className='text-white/80 mt-4 max-w-sm'>We are your trusted construction company in Prizren, with over 20 years of experience and with hundreds of projects completed.</p>
          <ul className='mt-4'>
            <li className='my-4'>
              <a href="/" className='flex gap-x-2 items-center text-white font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                sulajlindrit@gmail.com
              </a>
            </li>
            <li className='my-4'>
              <a href="/" className='flex gap-x-2 items-center text-white font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +383 49 905 144
              </a>
            </li>
            <li className="my-4">
              <a href="#" className='flex gap-x-2 items-center text-white font-medium'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Prizren, Kosova
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg text-center md:text-left">Company</h3>
          <ul className='mt-4 text-white/90'>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Home</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">About</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Projects</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Imprint</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg text-center md:text-left">Services</h3>
          <ul className='mt-4 text-white/90'>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">All</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Interior & Exterior</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Construction</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Planning</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Maintenance</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white text-lg text-center md:text-left">Social</h3>
          <ul className='mt-4 text-white/90'>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Instagram</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Facebook</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">Youtube</Link>
            </li>
            <li className='my-3 text-center md:text-left'>
              <Link href="/">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-web mx-auto border-t border-t-white/30 mt-4 pt-3">
        <p className='font-medium text-white'>Konstruct LLC - © Copyright { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}
