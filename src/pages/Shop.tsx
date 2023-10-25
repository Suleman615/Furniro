import Features from "@/components/Features";
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";


export default function Shop() {
    return (
        <>
            <PageHeading target='Shop' />

            {/***************** Sorting ************/}
            <div className=" py-4 bg-medium  flex flex-col md:flex-row items-center justify-between px-6 gap-3">
                <div className="flex items-center gap-3">
                    <span className="flex gap-2 font-semibold items-center cursor-pointer"><SlidersHorizontal size={18} /> Filter</span>
                    <p className="text-sm text-grey border-l border-grey ps-3">showing 1-16 of 36 results</p>
                </div>
                <div className="flex w-auto flex-col md:flex-row justify-between gap-3">
                    <span className="w-full flex justify-between">
                        <label htmlFor="limit">Show</label>
                        <input className="w-32 md:w-10 rounded mx-2 focus:outline-grey" type="number" name="limit" placeholder="16" />
                    </span>

                    <span className="w-full  flex  justify-between">
                        <label className="font-semibold w-14" htmlFor="sort">Sort by</label>
                        <select className="rounded mx-1 px-2 w-32 h-fit text-grey focus:outline-grey" name="sort" id="" >
                            <option value="">default</option>

                            <option value="rating">Rating</option>
                            <option value="price">Price</option>
                        </select>
                    </span>

                    <span className="w-full flex  justify-between">
                        <label className="font-semibold " htmlFor="sort">Sort</label>
                        <select className="rounded mx-1 px-2 w-32 h-fit  text-grey focus:outline-grey" name="sort" id="" >
                            <option value="default">default</option>

                            <option value="low-to-high">low to high</option>
                            <option value="high-to-low">high to low</option>
                        </select>
                    </span>

                </div>
            </div>


            {/***************** Products ************/}
            <div className="flex flex-wrap gap-3 justify-center my-10 px-6">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
            {/*************** Pagination*************/}
            <div className="flex justify-center gap-3 mb-20">
                <button className="border bg-medium px-3 py-1 rounded">1</button>
                <button className="border bg-medium px-3 py-1 rounded">2</button>
                <button className="border bg-medium px-3 py-1 rounded">3</button>
                <button className="border bg-medium px-3 py-1 rounded">Next</button>
            </div>

            <Features />




        </>
    )
}
