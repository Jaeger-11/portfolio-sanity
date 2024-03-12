"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
const Navbar = () => {
    const {theme, setTheme} = useTheme();
    return (
        <nav className="px-4 md:px-0 md:max-w-[90%] lg:max-w-[80%] md:py-4 mt-6 mx-auto flex justify-between items-center font-playfair">
            <Link href={'/'} className="text-sm md:text-2xl text-gray-500 font-julee">Damxy</Link>

            <div className="flex gap-3 md:gap-6 uppercase items-center text-xs md:text-sm">
                <Link href={'/about'}>About</Link>
                <Link href={'/#projects'}>Projects</Link>
                <Link href={'/contact'}>Contact</Link>
                <div onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark'); console.log(theme)}}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="cursor-pointer">
                        <path className="" d="M15.4608 11.4609C14.8403 11.649 14.1819 11.7501 13.5 11.7501C9.77208 11.7501 6.75 8.72802 6.75 5.0001C6.75 4.31816 6.85113 3.65983 7.0392 3.03931C4.26756 3.87937 2.25 6.45412 2.25 9.5001C2.25 13.228 5.27208 16.2501 9 16.2501C12.046 16.2501 14.6207 14.2325 15.4608 11.4609Z" stroke="#121214" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg> */}
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"></path></svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar