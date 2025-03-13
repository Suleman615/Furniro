import PageHeading from "@/components/PageHeading";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

import { useState } from "react";


export default function About() {
    const [team1, setTeam1] = useState(true)
    const [team2, setTeam2] = useState(false)

    return (
        <>
        <Head>
        <title>Furniro | About</title>
        <meta name="description" content="Welcome to https://furnirofurniture.vercel.app/About . Read the latest blogs and explore exciting content." />
        <meta name="keywords" content="ecommerce, shop,furniture, lifestyle" />
        <meta name="author" content="Ghulam Suleman" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Furniro | About" />
        <meta property="og:description" content="Visit to read about us at https://furnirofurniture.vercel.app/About" />
        {/* <meta property="og:image" content="https://https://furnirofurniture.vercel.app/" /> */}
        <meta property="og:url" content="https://https://furnirofurniture.vercel.app/About" />
        <meta property="og:type" content="website" />


        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content="Furniro | About" />
        <meta property="og:description" content="Visit to read about us at https://furnirofurniture.vercel.app/About" />
        {/* <meta name="twitter:image" content="https://https://furnirofurniture.vercel.app/" /> */}

        {/* Favicon */}
        {/* <link rel="icon" href="images/favicon.svg" /> */}

      </Head>
      
            <PageHeading target="About" />

            <div className="grid  md:grid-flow-row grid-cols-2 items-center mx-2 md:mx-20 py-10 ">
                <div className="col-span-2 lg:col-span-1 text-center lg:text-left" >
                    <h3 className="text-lg font-bold">Who <span className="text-brown"> We Are...</span></h3>
                    <p className="text-grey mx-2">At <b>Furniro</b>, we are passionate about bringing convenience and style to your home furnishing needs. We understand that  furniture plays a crucial role in enhancing the quality of life, comfort, and aesthetics. Our team is dedicated to redefining the way you shop for furniture. We are more than just an online platform; we are your trusted partner in creating beautiful, functional spaces. With a commitment to quality, affordability, and seamless service, we offer a wide range of furniture options to cater to diverse tastes and requirements. Our mission is to make furnishing your home an enjoyable and hassle-free experience, just a click away. Discover the perfect pieces that resonate with your unique style at <b>Furniro</b>, where we bring the showroom to your doorstep.</p>
                </div>
                <div className="col-span-2 lg:col-span-1  flex-center ">
                    <div className="relative  min-h-[320px] min-w-[320px]"><Image fill={true} className="  mask-shape  " src="/assets/p2.jpg" alt="" /></div>
                </div>

            </div>

            {/* *********** OUR TEAM ************ */}
            <div className=" mx-2 md:mx-20 my-10">
                <h3 className="text-lg font-bold text-center">Meet Our <span className="text-brown">Team</span></h3>
                <div className="relative h-[1100px] w-full lg lg:h-96 py-10 flex  items-center">

                    <ChevronLeft size={18} onClick={() => { setTeam1(true); setTeam2(false) }} className={`${(team1) ? 'bg-light ' : 'bg-brown cursor-pointer'}  absolute left-1 top-[40%] z-10 h-8 w-8 rounded-full `} />



                    {/* ************ Team 1**************** */}

                    {team1 && <>
                        <div className="absolute w-full  flex flex-col items-center lg:flex-row justify-center gap-6 ">
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/ceo.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2">(CEO) <span className="text-brown">Krishan gopal</span></p>
                            </div>
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/coo.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2" >(COO) <span className="text-brown">Gujjar</span></p>
                            </div>
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/cto.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2">(CTO) <span className="text-brown">Gabbr</span></p>
                            </div>
                        </div>
                    </>}

                    {/* ************ Team 2**************** */}
                    {team2 && <>
                        <div className="absolute w-full  flex flex-col items-center lg:flex-row justify-center gap-6 ">
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/fo.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2">(FO) <span className="text-brown">Alizbath</span></p>
                            </div>
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/pro.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2" >(PRO) <span className="text-brown">Sambara</span></p>
                            </div>
                            <div className="w-60 md:w-72 lg:w-60  h-auto  pb-2">
                                <div className="h-48 relative"><Image fill={true} className=" rounded-lg object-cover" src="/assets/hr.jpg" alt="" /></div>
                                <p className="pe-0 md:pe-6 ps-2 w-56 font-semibold py-1">Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                <p className="font-semibold ps-2">(HR) <span className="text-brown">Kanwal</span></p>
                            </div>
                        </div></>}



                    <ChevronRight size={18} onClick={() => { setTeam1(false); setTeam2(true) }} className={`${(team2) ? 'bg-light ' : 'bg-brown cursor-pointer'}  absolute right-1 z-10 top-[40%] h-8 w-8 rounded-full `} />

                </div>
            </div>

            {/* ************ Our Sponsors *********** */}
            <div className="py-10 bg-brown bg-opacity-40">
                <div className="text-center mx-2">
                    <h3 className="text-lg font-bold ">Who we are Engaged with...</h3>
                    <p className="max-w-[600px] mx-auto">We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
                </div>
                <div className="flex-center flex-wrap my-10 gap-5">
                    <Image width={150} height={60} className="" src="/assets/logos/sponsor-1.png" alt="" />
                    <Image width={150} height={60} className="" src="/assets/logos/sponsor-2.png" alt="" />
                    <Image width={150} height={60} className="" src="/assets/logos/sponsor-3.png" alt="" />
                    <Image width={150} height={60} className="" src="/assets/logos/sponsor-4.png" alt="" />
                    <Image width={150} height={60} className="" src="/assets/logos/sponsor-5.png" alt="" />

                </div>

            </div>

        </>
    )
}
