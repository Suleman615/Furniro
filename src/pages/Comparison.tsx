import CompareProductCard from "@/components/CompareProductCard";
import PageHeading from "@/components/PageHeading";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import { useCompare } from "@/contexts/compare";

const Noproduct = () => {
    return (
        <div className="w-[280px] h-48 flex-col flex-center gap-2 ">
            <h3 className="text-lg font-bold">Add A Product</h3>
            <select className="w-44 py-2 ps-2 rounded bg-brown focus:outline-brown text-white font-semibold " name="" id="">
                <option value="">Choose a Product</option>
            </select>
        </div>
    )
}

export default function Comparison() {

    const pro = [2, 3, 0]

    // const { compare } = useCompare()
    // console.log(compare)


    return (
        <>
            <PageHeading target="Product Comparison" />
            <div className="py-10 flex justify-center gap-10">
                <div className="w-[250px] pe-20 p-3 h-48 ">
                    <h3 className="font-bold  text-md ">Go to Product page for more Products</h3>
                    <Link href="/Shop" className="text-grey border-b-2 border-grey w-fit  font-semibold cursor-pointer hover:text-brown hover:border-brown">View More</Link>
                </div>
                {pro.map(product => (
                    (product) ? <CompareProductCard /> : <Noproduct />

                ))}



            </div>
        </>
    )
}
