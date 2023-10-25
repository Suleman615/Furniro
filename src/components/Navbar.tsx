import { useState } from "react";
import Link from "next/link"
import { Menu, Heart, UserCircleIcon, SearchIcon, BaggageClaim } from 'lucide-react';


export default function Navbar() {
    const [showNavbar, setShoeNavbar] = useState(false)
    return (
        <nav className="flex bg-light flex-col sm:flex-row  justify-between items-center px-2 md:px-6 fixed w-full bg-opacity-70 z-10">

            <div className="flex justify-between items-center  w-full md:w-auto">
                <Link href='/Home'><img className="h-16 w-28 object-contain" src="/assets/logo-name-black.png" alt="" /></Link>

                <span onClick={() => { setShoeNavbar(!showNavbar) }} className="visible sm:hidden  "><Menu /></span></div>
            <div className={` ${(showNavbar) ? 'visible flex' : 'hidden'}  sm:flex flex-col sm:flex-row gap-2 sm:gap-10`}>
                <Link className="hover:text-brown font-semibold" href='/Home'>Home</Link>
                <Link className="hover:text-brown font-semibold" href='/Shop'>Shop</Link>
                <Link className="hover:text-brown font-semibold" href='/About'>About</Link>
                <Link className="hover:text-brown font-semibold" href='./Contact'>Contact</Link>

            </div>
            <div className="hidden md:flex gap-6">
                <a href="" target="_blank"><UserCircleIcon /></a>
                <a href="" target="_blank"><SearchIcon /></a>
                <a href="" target="_blank"><Heart /></a>
                <a href="" target="_blank"><BaggageClaim /></a>
            </div>
        </nav>


    )
}
