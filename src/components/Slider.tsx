import Image from "next/image"
import { useState } from "react"


export default function Slider() {
    const [images, setImages] = useState({
        leftImage1: true,
        leftImage2: false,
        leftImage3: false,
        leftImage4: false,
        leftImage5: false,

        rightImage1: false,
        rightImage2: true,
        rightImage3: false,
        rightImage4: false,
        rightImage5: false,

    })
    return (
        <div className="flex  flex-col lg:flex-row items-center  gap-4">
            <div className="relative h-96 w-72">

                {images.leftImage1 && <Image fill={true} className="object-cover absolute" src="/assets/hero-bg.jpg" alt="" />}
                {images.leftImage2 && <Image fill={true} className="object-cover absolute" src="/assets/a1.jpg" alt="" />}
                {images.leftImage3 && <Image fill={true} className="object-cover absolute" src="/assets/a2.jpg" alt="" />}
                {images.leftImage4 && <Image fill={true} className="object-cover absolute" src="/assets/a3.jpg" alt="" />}
                {images.leftImage5 && <Image fill={true} className="object-cover absolute" src="/assets/p5.jpg" alt="" />}

            </div>
            <div >
                <div className="relative h-80 w-64 hidden lg:inline-block">


                    {images.rightImage1 && <Image fill={true} className="object-cover absolute" src="/assets/hero-bg.jpg" alt="" />}
                    {images.rightImage2 && <Image fill={true} className="object-cover absolute" src="/assets/a1.jpg" alt="" />}
                    {images.rightImage3 && <Image fill={true} className="object-cover absolute" src="/assets/a2.jpg" alt="" />}
                    {images.rightImage4 && <Image fill={true} className="object-cover absolute" src="/assets/a3.jpg" alt="" />}
                    {images.rightImage5 && <Image fill={true} className="object-cover absolute" src="/assets/p5.jpg" alt="" />}

                </div>
                <div className="my-2 flex gap-2 items-center">
                    <div className={`border w-fit h-fit p-[1px] ${(images.leftImage1) ? 'border-brown' : 'border-grey cursor-pointer'} rounded-full `}><div onClick={() => { setImages({ ...images, leftImage1: true, leftImage2: false, leftImage3: false, leftImage4: false, leftImage5: false, rightImage1: false, rightImage2: true, rightImage3: false, rightImage4: false, rightImage5: false }) }} className={`font-extrabold  text-gray-528 border border-gray-528 rounded-full  ${(images.leftImage1) ? 'bg-brown w-2 h-2' : 'bg-grey h-1.5 w-1.5 '}  `} ></div></div>
                    <div className={`border w-fit h-fit p-[1px] ${(images.leftImage2) ? 'border-brown' : 'border-grey cursor-pointer'} rounded-full `}><div onClick={() => { setImages({ ...images, leftImage1: false, leftImage2: true, leftImage3: false, leftImage4: false, leftImage5: false, rightImage1: false, rightImage2: false, rightImage3: true, rightImage4: false, rightImage5: false }) }} className={`font-extrabold  text-gray-528 border border-gray-528 rounded-full  ${(images.leftImage2) ? 'bg-brown w-2 h-2' : 'bg-grey h-1.5 w-1.5 '}  `} ></div></div>
                    <div className={`border w-fit h-fit p-[1px] ${(images.leftImage3) ? 'border-brown' : 'border-grey cursor-pointer'} rounded-full `}><div onClick={() => { setImages({ ...images, leftImage1: false, leftImage2: false, leftImage3: true, leftImage4: false, leftImage5: false, rightImage1: false, rightImage2: false, rightImage3: false, rightImage4: true, rightImage5: false }) }} className={`font-extrabold  text-gray-528 border border-gray-528 rounded-full  ${(images.leftImage3) ? 'bg-brown w-2 h-2' : 'bg-grey h-1.5 w-1.5 '}  `} ></div></div>
                    <div className={`border w-fit h-fit p-[1px] ${(images.leftImage4) ? 'border-brown' : 'border-grey cursor-pointer'} rounded-full `}><div onClick={() => { setImages({ ...images, leftImage1: false, leftImage2: false, leftImage3: false, leftImage4: true, leftImage5: false, rightImage1: false, rightImage2: false, rightImage3: false, rightImage4: false, rightImage5: true }) }} className={`font-extrabold  text-gray-528 border border-gray-528 rounded-full  ${(images.leftImage4) ? 'bg-brown w-2 h-2' : 'bg-grey h-1.5 w-1.5 '}  `} ></div></div>
                    <div className={`border w-fit h-fit p-[1px] ${(images.leftImage5) ? 'border-brown' : 'border-grey cursor-pointer'} rounded-full `}><div onClick={() => { setImages({ ...images, leftImage1: false, leftImage2: false, leftImage3: false, leftImage4: false, leftImage5: true, rightImage1: true, rightImage2: false, rightImage3: false, rightImage4: false, rightImage5: false }) }} className={`font-extrabold  text-gray-528 border border-gray-528 rounded-full  ${(images.leftImage5) ? 'bg-brown w-2 h-2' : 'bg-grey h-1.5 w-1.5 '}  `} ></div></div>

                </div>

            </div>
        </div>
    )
}
