import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='my-10 md:max-w-[90%] lg:max-w-[80%] mx-auto'>
        <section className="flex gap-6 uppercase items-center text-xs md:text-sm font-playfair" >
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Projects</Link>
            <Link href={'/'}>Contact</Link>
        </section>

        <p></p>
    </footer>
  )
}

export default Footer