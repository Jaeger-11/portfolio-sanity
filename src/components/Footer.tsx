import React from 'react';
import Link from 'next/link';

const Footer = () => {
    let currentDate = new Date()
  return (
    <footer className='my-10 max-w-[90%] lg:max-w-[80%] mx-auto md:flex justify-between'>
        <section className="flex gap-6 uppercase items-center text-xs md:text-sm font-playfair" >
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Projects</Link>
            <Link href={'/'}>Contact</Link>
        </section>

        <p className='font-julee'>copyright @{currentDate.getFullYear()}</p>
    </footer>
  )
}

export default Footer