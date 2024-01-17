import { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { Menu, Heart, UserCircleIcon, SearchIcon, BaggageClaim } from 'lucide-react';
import Cart from "./Cart";
import { useMyCart } from "@/contexts/cart";


export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const [showCart, setShowCart] = useState(false)





    const { cart, setCart } = useMyCart();


    return (
        <>
            <nav className="flex bg-light flex-col sm:flex-row  justify-between items-center px-2 md:px-6 fixed  w-full bg-opacity-70 z-20">

                <div className="flex justify-between items-center  w-full md:w-auto">
                    <Link className="relative h-16 w-28" href='/'><Image fill={true} className=" object-contain" src="/assets/logo-name-black.png" alt="" /></Link>

                    <span onClick={() => { setShowNavbar(!showNavbar) }} className="visible sm:hidden  "><Menu /></span></div>
                <div className={` ${(showNavbar) ? 'visible flex' : 'hidden'}  sm:flex flex-col sm:flex-row gap-2 sm:gap-10`}>
                    <Link className="hover:text-brown font-semibold" href='/'>Home</Link>
                    <Link className="hover:text-brown font-semibold" href='/Shop'>Shop</Link>
                    <Link className="hover:text-brown font-semibold" href='/About'>About</Link>
                    <Link className="hover:text-brown font-semibold" href='./Contact'>Contact</Link>

                </div>
                <div className="hidden md:flex gap-6">
                    <a className="hover:text-brown font" href="" target="_blank"><UserCircleIcon /></a>
                    <a className="hover:text-brown font" href="" target="_blank"><SearchIcon /></a>
                    <a className="hover:text-brown  font" href="" target="_blank"><Heart /></a>
                    <button onClick={() => { setShowCart(true); document.body.style.overflow = 'hidden'; }} className="hover:text-brown relative"  ><span className="absolute bg-red-600 rounded-full px-2 -top-3 text-white">{cart.length}</span> <BaggageClaim /></button>
                </div>
            </nav>
            {showCart && <Cart showCart={setShowCart} />}

        </>

    )
}
