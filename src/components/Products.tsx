import Link from "next/link";
import ProductCard from "./ProductCard";


export default function Products() {
    return (

        <div className="flex flex-col items-center mb-6">
            <p className="text-center font-bold text-lg ">Our Products</p>
            <div className="flex flex-wrap justify-center gap-4 my-10  px-0 md:px-20 lg:px-32 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />


            </div>
            <Link href='/Shop' className="btn">Show More</Link>
        </div>
    )
}
