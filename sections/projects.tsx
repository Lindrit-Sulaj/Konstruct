import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Projects() {
  return (
    <section className="bg-gray-900 lg:pt-10 pb-20 lg:pb-28 px-4">
      <div className="max-w-screen-web mx-auto">
        <h3 className='text-[17px] md:text-lg lg:text-xl font-semibold text-cyan-400 md:text-center lg:text-left'>Projects</h3>
        <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 text-white md:text-center lg:text-left'>Take a look at our best projects</h2>
        <p className='text-white/80 mt-2 text-lg md:text-center lg:text-left max-w-lg md:mx-auto lg:max-w-none lg:mx-0'>We are experienced in completing projects, from small to large in any city of your choice.</p>
        <div className="grid grid-cols-1 md:max-w-xl lg:max-w-none mx-auto gap-y-10 md:gap-y-12 lg:grid-cols-5 gap-x-10 mt-10 px-2 md:px-6 lg:px-0">
          <div className="lg:col-span-2 bg-white rounded-sm relative">
            <img loading="lazy" src="./images/residential-zone1.jpg" className='rounded-t-sm' alt="Residential zone" />
            <div className="px-5 py-6 md:p-8">
              <p className='text-gray-700'>Architecture & Building</p>
              <h4 className='font-bold text-lg md:text-xl mt-1'>Planning & Construction of Residential Zone</h4>
              <p className='text-gray-700 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="absolute -top-6 -right-6 w-20 flex items-center justify-center rounded-full h-20 bg-gray-900">
              <Link href="/" className="w-16 h-16 bg-primary flex items-center justify-center rounded-full">
                <Button size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-y-3">
            <div className="bg-white md:h-1/2 flex flex-col md:flex-row items-center relative rounded-sm">
              <img loading="lazy" src="./images/residential-zone2.jpg" className='h-full w-full md:w-1/2 rounded-l-sm' alt="Residential zone" />
              <div className='px-5 w-full md:w-1/2 py-6 md:py-4'>
                <p className='text-gray-700'>Architecture & Building</p>
                <h4 className='font-bold text-lg md:text-xl mt-1'>Exterior design of city building</h4>
                <p className='text-gray-700 mt-2 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[4.5rem] flex items-center justify-center rounded-full h-[4.5rem] bg-gray-900">
                <Link href="/" className="w-14 h-14 bg-primary flex items-center justify-center rounded-full">
                  <Button size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white md:h-1/2 flex flex-col md:flex-row items-center relative rounded-sm">
              <img loading="lazy" src="./images/residential-zone3.jpg" className='h-full w-full md:w-1/2 rounded-l-sm' alt="Residential zone" />
              <div className='px-5 w-full md:w-1/2 py-6 md:py-4'>
                <p className='text-gray-700'>Architecture & Building</p>
                <h4 className='font-bold text-lg md:text-xl mt-1'>Exterior design of city building</h4>
                <p className='text-gray-700 mt-2 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[4.5rem] flex items-center justify-center rounded-full h-[4.5rem] bg-gray-900">
                <Link href="/" className="w-14 h-14 bg-primary flex items-center justify-center rounded-full">
                  <Button size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
