import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import { products as src } from "@/utils";
import { FetchFurniture } from "../api";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchFurnitureProps } from "@/types";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";



export default function Shop() {
    const [limit, setLimit] = useState(16)
    const [offset, setOffset] = useState(1)
    const [sortBy, setSortBy] = useState('default')
    const [sortOrder, setSortOrder] = useState('default')
    const [products, setProducts] = useState(src)
    const [keyword, setKeyword] = useState('furniture')




    // console.log(products[0])




    // const router = useRouter()

    // const handleUpdateParams = (e: { title: string, value: string }) => {
    //     const pathname = updateSearchParams(e.title, e.value.toLocaleLowerCase())
    //     router.push(pathname)

    // }



    return (
        <>
            <PageHeading target='Shop' />

            {/***************** Sorting ************/}
            <div className=" py-4 bg-medium  flex flex-col md:flex-row items-center justify-between px-6 gap-3">
                <div className="flex items-center gap-3">
                    <div>
                        <label className="font-semibold" htmlFor="keyword">Search Keyword</label>
                        <input onChange={(e) => { setKeyword(e.target.value) }} className="w-32 ps-2 rounded mx-2 focus:outline-grey" type="text" name="keyword" placeholder="Furniture" />
                    </div>
                    <p className="text-sm text-grey border-l border-grey ps-3">showing 1-{limit}</p>
                </div>
                <div className="flex w-auto flex-col md:flex-row justify-between gap-3">
                    <span className="w-full flex justify-between">
                        <label htmlFor="limit">Show</label>
                        <input onChange={(e) => { setLimit(+e.target.value) }} className="w-32 md:w-10 rounded mx-2 focus:outline-grey" type="number" name="limit" placeholder="16" />
                    </span>

                    <span className="w-full  flex  justify-between">
                        <label className="font-semibold w-14" htmlFor="sort">Sort by</label>
                        <select onChange={(e) => { setSortBy(e.target.value) }} className="rounded mx-1 px-2 w-32 h-fit text-grey focus:outline-grey" name="sort" id="" >
                            <option value="">default</option>

                            <option value="rating">Rating</option>
                            <option value="price">Price</option>
                        </select>
                    </span>

                    <span className="w-full flex  justify-between">
                        <label className="font-semibold " htmlFor="sort">Sort</label>
                        <select onChange={(e) => { setSortOrder(e.target.value) }} className="rounded mx-1 px-2 w-32 h-fit  text-grey focus:outline-grey" name="sort" id="" >
                            <option value="default">default</option>

                            <option value="low-to-high">low to high</option>
                            <option value="high-to-low">high to low</option>
                        </select>
                    </span>

                </div>
            </div>


            {/***************** Products ************/}
            <div className="flex flex-wrap gap-3 justify-center my-10 px-6">

                {products.map((p) => (<ProductCard key={+p.webID} ID={p.webID} title={p.productTitle.split("®")[p.productTitle.split("®").length - 1]} colors={p.availableColr} srcImage={p.image.url} stars={p.rating.avgRating} statusCode={+p.prices[0].statusCode} />
                ))}



            </div>


            {/*************** Pagination*************/}
            <div className="flex justify-center gap-3 mb-20">
                <button className="border bg-medium px-3 py-1 rounded">1</button>
                <button className="border bg-medium px-3 py-1 rounded">2</button>
                <button className="border bg-medium px-3 py-1 rounded">3</button>
                <button className="border bg-medium px-3 py-1 rounded">Next</button>
            </div>





        </>
    )
}
