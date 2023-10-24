import ProductCard from "./ProductCard";


export default function Products() {
    return (

        <div className="flex flex-col items-center mb-6">
            <p className="text-center font-bold text-lg ">Our Products</p>
            <div className="flex flex-wrap justify-center gap-4 my-10  px-0 md:px-20 lg:px-44 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />


            </div>
            <button className="px-4 py-1  text-brown font-semibold  border border-brown hover:bg-brown hover:text-white ">Show More</button>
        </div>
    )
}
