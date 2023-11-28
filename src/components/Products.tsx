import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/utils";

let src = products.slice(1, 8)

export default function Products() {
    return (

        <div className="flex flex-col items-center mb-6">
            <p className="text-center font-bold text-lg ">Our Products</p>
            <div className="flex flex-wrap justify-center gap-4 my-10  px-0 md:px-20 lg:px-32 ">
                {src.map((p) => (<ProductCard key={+p.webID} ID={+p.webID} title={p.productTitle} colors={p.availableColr} srcImage={p.image.url} stars={p.rating.avgRating} statusCode={+p.prices[0].statusCode} />
                ))}


            </div>
            <Link href='/Shop' className="btn">Show More</Link>
        </div>
    )
}
