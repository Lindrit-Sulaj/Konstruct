import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function ServicesPage() {
  return (
    <main className='mt-[70px]'>
      <section className='services-bg px-4 py-20 md:py-24 lg:py-32 text-white flex flex-col items-center'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className='text-white/80 text-[15px] md:text-base'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-white text-[15px] md:text-base'>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl lg:leading-[50px] xl:text-5xl 2xl:text-6xl 2xl:leading-[70px] xl:leading-[60px] text-center mt-2'>Our Services</h1>
      </section>
      <section className='my-10 md:my-14 lg:my-20 px-4'>
        <div className="max-w-screen-web mx-auto">
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-3 text-center'>Our wide range of services</h2>
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className='bg-white md:col-span-2 lg:col-span-1 shadow-md px-6 py-8 lg:px-10 lg:py-20 rounded-sm border lg:border-0'>
              <div className='flex items-center md:items-start gap-x-4 md:flex-col gap-y-5'>
                <span className="flex justify-center items-center w-14 h-14 lg:w-20 lg:h-20 bg-primary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 lg:size-8 text-white">
                    <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                    <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className='font-semibold text-lg md:text-xl'>Exterior and Interior Design</h3>
              </div>

              <p className='text-gray-700 mt-2'>We create a perfect balance of style and function to improve the look and feel of your space.</p>
              <Link href="/" className='inline-block mt-4'>
                <Button variant="secondary">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                </Button>
              </Link>
            </div>
            <div className='bg-white shadow-md px-6 py-8 lg:px-10 lg:py-20 rounded-sm border lg:border-0'>
              <div className='flex items-center md:items-start gap-x-4 md:flex-col gap-y-5'>
                <span className="flex justify-center items-center w-14 h-14 lg:w-20 lg:h-20 bg-primary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 lg:size-8 text-white">
                    <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                    <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className='font-semibold text-lg md:text-xl'>Construction & Planning</h3>
              </div>
              <p className='text-gray-700 mt-2'>We create a perfect balance of style and function to improve the look and feel of your space.</p>
              <Link href="/" className='inline-block mt-4'>
                <Button variant="secondary">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                </Button>
              </Link>
            </div>
            <div className='bg-white shadow-md px-6 py-8 lg:px-10 lg:py-20 rounded-sm border lg:border-0'>
              <div className='flex items-center md:items-start gap-x-4 md:flex-col gap-y-5'>
                <span className="flex justify-center items-center w-14 h-14 lg:w-20 lg:h-20 bg-primary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 lg:size-8 text-white">
                    <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                    <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className='font-semibold text-lg md:text-xl'>Maintenance</h3>
              </div>
              <p className='text-gray-700 mt-2'>We create a perfect balance of style and function to improve the look and feel of your space.</p>
              <Link href="/" className='inline-block mt-4'>
                <Button variant="secondary">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ml-2">
                  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
