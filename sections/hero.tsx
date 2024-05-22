import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='flex justify-between h-screen'>
      <div className='w-2/3 flex justify-center items-center'>
        <div className="xl:w-3/4 2xl:w-[60%]">
          <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl lg:leading-[50px] xl:text-5xl 2xl:text-6xl 2xl:leading-[70px] xl:leading-[60px]'>We are your trusted construction company in Kosovo</h1>
          <p className='text-lg text-gray-800 mt-5'>Are you looking for a professional construction company in Prizren? Well, you are in the right place. With years of experience in the industry, we have worked with hundreds of clients and built over 100 residential zones and houses.</p>
          <Link href="/" className='inline-block mt-5'><Button size="lg">Contact us</Button></Link>
          <div className='flex gap-x-10 flex-wrap mt-10'>
            <div>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>100+</p>
              <p className='text-gray-700'>Projects completed</p>
            </div>
            <div>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>53+</p>
              <p className='text-gray-700'>Team members</p>
            </div>
            <div>
              <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>20</p>
              <p className='text-gray-700'>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 relative">
        <Link href="/" className='absolute top-[55%] -translate-y-1/2 -left-6'>
          <Button size="icon" className='w-24 h-24 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Button>
        </Link>
        <img className='h-full w-full object-cover' src="../images/construction-worker.jpg" alt="" />
      </div>
    </section>
  )
}
