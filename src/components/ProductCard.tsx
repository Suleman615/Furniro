import { useState } from "react"
import Image from "next/image"
import { Share2, ArrowLeftRight, Heart } from "lucide-react"


export default function ProductCard({ prop }: any) {
    const [focus, setFocus] = useState(false)

    return (
        <div onMouseEnter={() => { setFocus(true) }} onMouseLeave={() => setFocus(false)} className=" bg-light w-64 relative  ">
            <span className="right-2 top-2 absolute w-8 h-8 flex justify-center items-center text-sm rounded-full bg-red-500">new</span>
            <div className="h-72 relative"><Image fill={true} src="/assets/hero-bg.jpg" alt="" /></div>
            <div className="p-3">
                <p className="text-md font-semibold">Lolito</p>
                <p className="text-sm text-grey">Luxury Big sofa</p>
                <p className="font-semibold">RP. 7000 $</p>
            </div>
            {focus &&
                <div className="absolute flex flex-col  bg-grey justify-center items-center w-full h-full top-0 bg-opacity-40">
                    <button className="bg-white text-brown text-sm px-6 py-2 font-semibold cursor-pointer">Add To Cart</button>
                    <div className="flex text-white gap-3 text-sm  ">
                        <span className="flex items-center cursor-pointer hover:text-brown"><Share2 size={16} />Share</span>
                        <span className="flex items-center cursor-pointer hover:text-brown"><ArrowLeftRight size={16} />Compare</span>
                        <span className="flex items-center cursor-pointer hover:text-brown"><Heart size={16} />Like</span>
                    </div>

                </div>
            }


        </div>
    )
}
