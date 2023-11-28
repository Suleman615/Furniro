import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Share2, ArrowLeftRight, Heart, Star, StarHalf } from "lucide-react"
import { productDetailProps } from "@/types"
import { useMyCart } from "@/contexts/cart"


export default function ProductCard({ ID, title, colors, srcImage, stars, statusCode }: productDetailProps) {
    const [focus, setFocus] = useState(false)

    let checkcolors: String[] = ['bg-[Green]', 'bg-[Red]', 'bg-[Blue]', 'bg-[Black]', 'bg-[Navy]', 'bg-[White]', 'bg-[Gray]', 'bg-[Grey]', 'bg-[Silver]', 'bg-[Crimson]', 'bg-[Purple]', 'bg-[Indigo]', 'bg-[Aqua]', 'bg-[Yellow]', 'bg-[Brown]', 'bg-[Chocolate]', 'bg-[Pink]', 'bg-[Olive]']
    var colorClasses: String[] = []
    let rating: string[] = ['', '', '', '', '']
    let variableRating: number = stars - Math.floor(stars)
    rating = rating.slice(0, +Math.floor(stars))

    const { cart, setCart } = useMyCart();

    const updateCart = () => {
        var product = {
            id: ID,
            Image: srcImage,
            title: title,
            quantity: 1,
        }


    }



    try {


        let tempcolors: String[] = []
        colors.forEach((col) => {
            const cols = col.split(" ")
            tempcolors.push(...cols)
        })

        colorClasses = Array.from(new Set(checkcolors.filter((element) => (tempcolors.includes(element.slice(4, -1))))))

    } catch (e: any) { (console.log("eror is  " + e)) }




    return (
        <Link href={`/ProductDetail/${ID}`} onMouseEnter={() => { setFocus(true) }} onMouseLeave={() => setFocus(false)} className=" bg-light w-64  flex flex-col relative  ">
            <span className="right-2 top-2 absolute w-10 h-10 text-white flex justify-center items-center text-sm rounded-full z-10 bg-red-500">-{statusCode}%</span>
            <div className="h-72 relative bg-medium"><Image fill={true} src={srcImage} alt="" /></div>

            <div className="p-3 flex  flex-grow flex-col  ">
                <p className="text-md font-semibold">{title}</p>
                <div className=" flex justify-start gap-2 flex-wrap py-2">
                    {colorClasses.map((c, index) => (
                        <div key={index} className={`h-6 w-6 rounded-full  ${c}`}></div>))}
                </div>

                <div className="flex justify-start ">
                    {rating.map(() => (
                        <Star strokeWidth={0} size={15} fill="gold" />
                    ))}
                    {variableRating == 0 ? '' : <StarHalf size={15} strokeWidth={0} fill="gold" />

                    }
                </div>




                <p className="font-semibold   ">RP. 7000 $</p>
            </div>
            {focus &&
                <div className="absolute flex flex-col  bg-grey justify-center items-center w-full h-full top-0 bg-opacity-40">
                    <button onClick={() => updateCart()} className="bg-white border-0 z-10 btn">Add To Cart</button>
                    <div className="flex text-white gap-3 text-sm  ">
                        <span className="flex items-center  hover:text-brown"><Share2 size={16} />Share</span>
                        <Link href="/Comparison" className="flex items-center  hover:text-brown"><ArrowLeftRight size={16} />Compare</Link>
                        <span className="flex items-center  hover:text-brown"><Heart size={16} />Like</span>
                    </div>

                </div>
            }


        </Link>
    )
}
