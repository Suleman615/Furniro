import Image from "next/image"
import { Star } from "lucide-react"
export default function CompareProductCard() {
    return (
        <>
            <div className="w-[280px] py-2  h-auto">
                <div className="h-40  w-full relative">
                    <Image fill={true} className="rounded-md " src='/assets/a1.jpg' alt="" />
                </div>

                <h4 className="text-md pt-1 ps-2  font-bold ">Asgaard Sofa</h4>
                <h5 className="font-semibold ps-2">Rs. &75000.00</h5>
                <span className=" ps-2 flex items-center gap-1">4.7 <Star className="text-yellow-500" size={20} fill="yellow" /> <span className="border-l border-grey text-grey ps-2 ">204 views</span> </span>

            </div>
        </>)
}

