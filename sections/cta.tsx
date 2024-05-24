import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Cta() {
  return (
    <section className='cta py-16 md:py-20 lg:py-24 text-white flex flex-col items-center gap-y-4'>
      <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>Let's start working together!</h2>
      <Link href="/">
        <Button>Get in touch</Button>
      </Link>
    </section>
  )
}
