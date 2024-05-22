import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <section className="px-4 my-10 lg:my-14 xl:my-20">
      <div className="max-w-screen-web w-full mx-auto flex gap-x-8">
        <div className="w-1/2 flex items-end">
          <div className="w-1/2 relative">
            <Link href="/about" className='absolute hidden lg:block -top-8 -right-12 bg-white p-4 rounded-full'>
              <Button size="icon" className='w-20 h-20 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </Button>
            </Link>
            <img src="./images/building-area.jpg" alt="Building area" />
          </div>

          <div className='w-1/2 p-4 -ml-10 bg-white -mb-16 z-50'>
            <img src="./images/architect-teamwork.jpg" alt="Architect Teamwork" />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className='text-lg md:text-xl font-semibold text-primary'>About Us</h3>
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-3'>Where craft meets quality</h2>
          <Separator className='w-1/3 max-w-28 h-1 bg-primary my-5' />
          <p className='text-lg text-gray-700'>At Construction, we're all about top-notch craftsmanship and creative construction solutions. With years of experience, our skilled team is dedicated to bringing your vision to life. We hold ourselves to the highest standards, ensuring every project we take on is completed perfectly and exceeds your expectations.</p>
          <p className="text-lg mt-2 text-gray-700">We specialize in these type of buildings:</p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-2 mt-4">
            {["Commercial", "Residential", "Educational", "Hospital", "Bridge & Road", "Pavement"].map(b => (
              <li key={b} className='flex gap-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
