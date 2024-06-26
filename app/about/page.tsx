import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import FAQ from '@/sections/faq'
import Cta from '@/sections/cta'

export default function AboutPage() {
  return (
    <main>
      <section className='py-20 px-4 mt-[70px]'>
        <div className="flex justify-center">
          <Badge>About</Badge>
        </div>

        <h1 className='font-extrabold text-2xl md:text-3xl lg:text-4xl lg:leading-[50px] xl:text-5xl 2xl:text-6xl 2xl:leading-[70px] xl:leading-[60px] mt-4 max-w-xl mx-auto text-center'>Unveiling Our Vision and Mission</h1>
        <p className='text-lg text-gray-700 max-w-xl mx-auto text-center mt-4'>For more than twenty years we've been working in the construction & architecture space. It's not just what we do — it's who we are.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 lg:grid-rows-6 max-w-screen-xl mx-auto gap-y-2 lg:gap-y-6 gap-x-2 lg:gap-x-4 mt-10">
          <img className='rounded-2xl col-span-2 md:col-span-4 lg:row-span-2 w-full h-full object-cover object-top' src="https://ik.imagekit.io/0s9lwb2yr/tr:w-800,h-300/explaining-sketch_V0S49ZOKQ.jpg?updatedAt=1716579211826" alt="Construction Team" />
          <div className="rounded-2xl py-8 lg:py-0 lg:row-start-3 bg-primary text-white flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='size-8 text-white' fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
            </svg>
          </div>
          <div className="rounded-2xl py-8 lg:py-0 lg:row-start-4 bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='size-8' viewBox="0 0 24 24">
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </div>
          <div className="rounded-2xl py-8 lg:py-0 lg:row-start-3 lg:col-start-2 bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='size-8' viewBox="0 0 24 24">
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
            </svg>
          </div>
          <div className="rounded-2xl py-8 lg:py-0 lg:row-start-4 lg:col-start-2 bg-gray-100  flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className='size-8' viewBox="0 0 24 24">
              <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
            </svg>
          </div>
          <div className="rounded-2xl lg:col-span-2 gap-y-8 lg:gap-y-0 lg:row-start-5 lg:row-span-2 bg-gray-100 flex flex-col justify-between p-6">
            <h5 className='font-semibold text-3xl lg:text-4xl'>2</h5>
            <div>
              <h4 className='font-semibold text-xl'>Offices</h4>
              <p className='mt-1 text-gray-700'>We have an office in Prizren and one in Prishtina.</p>
            </div>
          </div>
          <div className="rounded-2xl lg:col-span-2 gap-y-8 lg:gap-y-0 lg:col-start-3 lg:row-start-3 lg:row-span-4 bg-yellow-300 flex flex-col justify-between p-6">
            <h5 className='font-semibold text-3xl lg:text-4xl'>53</h5>
            <div>
              <h4 className='font-semibold text-xl'>Team Members</h4>
              <p className='mt-1 text-gray-800'>Our team consists of 50 experts in architecture, construction, and maintenance.</p>
            </div>
          </div>
          <div className="rounded-2xl col-span-2 gap-y-8 lg:gap-y-0 lg:col-start-5 bg-gray-950 lg:row-span-4 text-white flex flex-col justify-between p-6">
            <h5 className="font-semibold text-3xl lg:text-4xl">100%</h5>
            <div>
              <h4 className='font-semibold text-xl'>Dedication</h4>
              <p className='mt-1 text-gray-300'>Our team is dedicated to delivering outstanding results with every project.</p>
            </div>
          </div>
          <div className="rounded-2xl col-span-2 gap-y-8 lg:gap-y-0 lg:col-start-7 lg:row-span-2 bg-gray-100 flex flex-col justify-between p-6">
            <h5 className="font-semibold text-3xl lg:text-4xl">100+</h5>
            <div>
              <h4 className='font-semibold text-xl'>Projects</h4>
              <p className='mt-1 text-gray-800'>With over 100 projects completed, we have the experience you can trust.</p>
            </div>
          </div>
          <div className="rounded-2xl lg:col-start-7 gap-y-8 lg:gap-y-0 col-span-2 lg:row-start-3 lg:row-span-2 bg-gray-100 flex flex-col justify-between p-6">
            <h5 className="font-semibold text-3xl lg:text-4xl">100%</h5>
            <div>
              <h4 className='font-semibold text-xl'>Creativity</h4>
              <p className='mt-1 text-gray-800'>Our projects reflect 100% creativity, bringing unique visions to life.</p>
            </div>
          </div>
          <img className='rounded-2xl col-span-2 md:col-span-4 lg:row-span-2 w-full h-full object-cover object-top' src="https://ik.imagekit.io/0s9lwb2yr/tr:w-800,h-300/pexels-enginakyurt-1463917_prOAkyyns.jpg" alt="Construction site" />
        </div>
      </section>
      <section className='px-4 my-8 md:my-14 lg:my-20'>
        <div className="max-w-screen-web flex flex-col gap-y-4 md:flex-row mx-auto">
          <div className='w-full md:w-1/2'>
            <h3 className='text-[15px] md:text-base uppercase text-gray-500 tracking-wide font-medium'>About Us</h3>
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 lg:mt-3'>Who We Are</h2>
          </div>

          <div className='w-full md:w-1/2'>
            <p className='text-lg text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus! Quis, quia repellat ad, sunt molestias error ut voluptatibus illum, ipsum temporibus nobis itaque perferendis quisquam fugiat minus libero. Laborum.</p>
            <p className='text-lg text-gray-700 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, soluta! Magnam, sed eaque asperiores mollitia consectetur assumenda possimus aspernatur, necessitatibus aperiam reprehenderit repudiandae voluptatum ullam expedita ipsa corporis alias dolores!</p>
          </div>
        </div>
      </section>
      <section className="px-4 my-8 md:my-14 lg:my-20">
        <div className="max-w-screen-web flex flex-col gap-y-4 md:flex-row mx-auto">
          <div className="w-full md:w-1/2">
            <h3 className='text-[15px] md:text-base uppercase text-gray-500 tracking-wide font-medium'>Our Mission</h3>
            <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 lg:mt-3 max-w-md'>Leading the Way in Architecture</h2>
          </div>

          <div className='w-full md:w-1/2'>
            <p className='text-lg text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, minus! Quis, quia repellat ad, sunt molestias error ut voluptatibus illum, ipsum temporibus nobis itaque perferendis quisquam fugiat minus libero. Laborum.</p>
            <p className='text-lg text-gray-700 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, soluta! Magnam, sed eaque asperiores mollitia consectetur assumenda possimus aspernatur, necessitatibus aperiam reprehenderit repudiandae voluptatum ullam expedita ipsa corporis alias dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

      </section>
      <section className="px-4 py-10 md:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-screen-web mx-auto">
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 lg:mt-3 max-w-md'>Our values</h2>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-8 mt-6">
            <div className='max-w-lg md:max-w-none'>
              <Separator className='w-1/3 max-w-20 h-1 bg-primary' />
              <h3 className="font-bold text-lg lg:text-xl mt-4">Quality Craftsmanship</h3>
              <p className='text-gray-300 mt-2'>We are committed to delivering the highest standards of quality in every project, ensuring lasting and exceptional results.</p>
            </div>
            <div className='max-w-lg md:max-w-none'>
              <Separator className='w-1/3 max-w-20 h-1 bg-primary' />
              <h3 className="font-bold text-lg lg:text-xl mt-4">Customer Focus</h3>
              <p className='text-gray-300 mt-2'>Your satisfaction is our priority. We listen to your needs and work closely with you to bring your vision to life.</p>
            </div>
            <div className='max-w-lg md:max-w-none'>
              <Separator className='w-1/3 max-w-20 h-1 bg-primary' />
              <h3 className="font-bold text-lg lg:text-xl mt-4">Integrity</h3>
              <p className='text-gray-300 mt-2'>We operate with honesty and transparency, building trust with our clients through every step of the construction process.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-16 lg:py-20 px-2 lg:px-4 text-white">
        <div className="max-w-screen-web mx-auto flex justify-center gap-4 lg:gap-0 lg:justify-between flex-wrap">
          <img src="./images/logo1.svg" alt="Client logo 1" />
          <img src="./images/logo2.svg" alt="Client logo 2" />
          <img src="./images/logo3.svg" alt="Client logo 3" />
          <img src="./images/logo4.svg" alt="Client logo 4" />
        </div>
      </section>
      <section className="px-4 my-10 md:my-14 lg:my-20 xl:my-24">
        <div className="max-w-screen-lg mx-auto">
          <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 lg:mt-3 text-center'>Meet the team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-10 gap-x-4 gap-y-10">
            <div>
              <img src="https://ik.imagekit.io/0s9lwb2yr/image_64Ypf4VnN.png" className='w-full h-60 md:h-80 object-cover object-top' alt="John Smith" />
              <h3 className='font-bold text-lg md:text-xl text-center mt-6'>John Smith</h3>
              <h6 className='text-center text-gray-700'>Co-founder & CEO</h6>
            </div>
            <div>
              <img src="https://ik.imagekit.io/0s9lwb2yr/image_H0Mhq_Z0d.png?updatedAt=1716636199542" className='w-full h-60 md:h-80 object-cover object-top' alt="Emily Davis" />
              <h3 className='font-bold text-lg md:text-xl text-center mt-6'>Emily Davis</h3>
              <h6 className='text-center text-gray-700'>Lead architect</h6>
            </div>
            <div>
              <img src="https://ik.imagekit.io/0s9lwb2yr/image_KNNVgebfY.png?updatedAt=1716636336423" className='w-full h-60 md:h-80 object-cover object-top' alt="Michael Brown" />
              <h3 className='font-bold text-lg md:text-xl text-center mt-6'>Michael Brown</h3>
              <h6 className='text-center text-gray-700'>Senior Construction Engineer</h6>
            </div>
            <div>
              <img src="https://ik.imagekit.io/0s9lwb2yr/image_JxAdkC_XN.png?updatedAt=1716636534829" className='w-full h-60 md:h-80 object-cover object-top' alt="Daniel Thompson" />
              <h3 className='font-bold text-lg md:text-xl text-center mt-6'>Daniel Thompson</h3>
              <h6 className='text-center text-gray-700'>Site Supervisor</h6>
            </div>
          </div>
        </div>

      </section>
      <FAQ />
      <Cta />
    </main>
  )
}
