import { Check, ChevronRight, X, Star, StarHalf } from "lucide-react"
import { useRouter } from "next/router"
import { products } from "@/utils"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMyCart } from "@/contexts/cart";



export default function ProductDetail() {
    const param = useRouter()
    const { pid } = param.query;
    let product = products.filter((p) => (p.webID == pid))[0]

    const { cart, setCart } = useMyCart()



    const [currentColor, setCurrentColor] = useState(product.displayColor[0].replace(' ', '_'))
    let checkcolors: String[] = ['bg-[Green]', 'bg-[Red]', 'bg-[Blue]', 'bg-[Black]', 'bg-[Navy]', 'bg-[White]', 'bg-[Gray]', 'bg-[Grey]', 'bg-[Silver]', 'bg-[Crimson]', 'bg-[Purple]', 'bg-[Indigo]', 'bg-[Aqua]', 'bg-[Yellow]', 'bg-[Brown]', 'bg-[Chocolate]', 'bg-[Pink]', 'bg-[Olive]']
    var colorClasses: String[] = []
    var availableColors: String[] = []
    let rating: string[] = ['', '', '', '', '']



    let variableRating: number = product.rating.avgRating - Math.floor(product.rating.avgRating)
    rating = rating.slice(0, +Math.floor(product.rating.avgRating))

    try {


        let colors = product.availableColr
        let tempcolors: string[] = []
        colors.forEach((col) => {
            const cols = col.split(" ")
            tempcolors.push(...cols)
        })
        colorClasses = checkcolors.filter((element) => (tempcolors.includes(element.slice(4, -1))))
        availableColors = colorClasses.map((c) => (product.availableColr.filter((col => col.includes(c.slice(4, -1))))[0]))

        product.productTitle = product.productTitle.split("®")[product.productTitle.split("®").length - 1]

    } catch (e: any) { (console.log("eror is  " + e)) }



    const updateCart = () => {
        var products
        products = {
            id: product.webID,
            image: product.image.url,
            title: product.productTitle,
            quantity: 1,
        }
        cart.push(products)
        setCart(cart)
        console.log(cart)
    }




    return (
        <>
            <div className=" pt-16 mb-4 ">
                <div className="bg-medium  py-6 px-4 ">
                    <p className="text-grey">Home  <ChevronRight className="inline text-black" size={18} /> Shop <span className="border-l border-grey px-4 ms-4 text-black font-semibold">{product.productTitle}</span></p>
                </div>
            </div>

            <div className=" flex gap-3 mx-0 sm:mx-6 flex-col  md:flex-row mb-6">
                <div className="w-[100%] md:w-[40%] rounded-xl h-fit  my-6 gap-4 py-2 bg-light">


                    {/* *********** Images ************* */}
                    <div className="w-[100%] flex  justify-center">
                        {colorClasses.length > 1 && <div className="w-[20%] px-4 hidden sm:visible  sm:flex  md:hidden xl:visible xl:flex flex-col justify-between">
                            <div className="h-20 w-20 relative  rounded">
                                <Image className="rounded-lg" src={`https://media.kohlsimg.com/is/image/kohls/${product.webID}_${availableColors[0].replace(' ', '_')}?wid=180&hei=180&op_sharpen=1`} alt="product" fill={true} />
                            </div>
                            {colorClasses.length > 1 && <div className="h-20 w-20 relative  rounded">
                                <Image className="rounded-lg" src={`https://media.kohlsimg.com/is/image/kohls/${product.webID}_${availableColors[1].replace(' ', '_')}?wid=180&hei=180&op_sharpen=1`} alt="product" fill={true} />
                            </div>}
                            {colorClasses.length > 2 && <div className="h-20 w-20 relative  rounded">
                                <Image className="rounded-lg" src={`https://media.kohlsimg.com/is/image/kohls/${product.webID}_${availableColors[2].replace(' ', '_')}?wid=180&hei=180&op_sharpen=1`} alt="product" fill={true} />
                            </div>}
                            {colorClasses.length > 3 && <div className="h-20 w-20 relative  rounded">
                                <Image className="rounded-lg" src={`https://media.kohlsimg.com/is/image/kohls/${product.webID}_${availableColors[3].replace(' ', '_')}?wid=180&hei=180&op_sharpen=1`} alt={product.image.url} fill={true} />
                            </div>}

                        </div>}

                        <div className="w-[75%] min-h-[400px]  relative">
                            <span className="right-2 top-2 absolute w-10 h-10 text-white flex justify-center items-center text-sm rounded-full z-10 bg-red-500">-{product.prices[0].statusCode}%</span>

                            {colorClasses.length > 1 ?
                                <Image className="rounded-xl" fill={true} src={`https://media.kohlsimg.com/is/image/kohls/${product.webID}${(currentColor == 'Multi') ? '' : '_' + currentColor}?wid=180&hei=180&op_sharpen=1`} alt='product' /> :
                                <Image className="rounded-xl" src={product.image.url} alt="Alter" fill={true} />}
                        </div>
                    </div>
                    <div className=" flex justify-center gap-2 flex-wrap py-4 ps-4 ">
                        {colorClasses.map((c, index) => (
                            <p onClick={() => setCurrentColor(availableColors[index].replace(" ", "_"))} key={index} className={`h-6 w-6 rounded-full ${c} cursor-pointer`}></p>))}

                    </div>
                </div>

                {/* ********** Details ************ */}
                <div className=" w-[100%] md:w-[60%] ps-10 pe-4 md:ps-20 flex flex-col justify-center">
                    <h3 className="text-xl w-auto md:w-80 font-semibold">{product.productTitle}</h3>
                    <p className="font-semibold text-grey">RS. 4000 </p>
                    <div className="flex justify-start items-center">
                        {rating.map(() => (
                            <Star strokeWidth={0} size={15} fill="gold" />
                        ))}
                        {variableRating == 0 ? '' : <StarHalf size={15} strokeWidth={0} fill="gold" />

                        }<span className="ps-2 ms-2 font-semibold text-grey border-l-2 border-grey">{product.rating.count} sold</span>
                    </div>
                    <p className="text-grey font-semibold"> Pick Up: {product.isAvailableforPickUp ? <Check className="inline" color="green" /> : <X className="inline" color="red" />}</p>
                    <p className="text-grey font-semibold"> Shipping: {product.isAvailableforShip ? <Check className="inline" color="green" /> : <X className="inline" color="red" />}</p>


                    {/* ************* Buttons *********** */}
                    <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 mt-10 mb-2  border-b-2 w-fit pb-10 ">
                        <button className="flex gap-4 rounded-xl border-2 border-brown text-brown  items-center "><span className="px-2.5 text-lg border-e py-1 border-brown rounded-s-lg hover:bg-brown hover:text-white font-medium">-</span>0<span className="px-2 border-s text-lg py-1 border-brown  rounded-e-lg hover:bg-brown hover:text-white font-medium">+</span></button>
                        <button onClick={() => updateCart()} className="btn my-0 rounded-lg visible md:hidden lg:block  px-10">Add To Cart</button>
                        <Link href="/Comparison" className="btn my-0 rounded-lg   px-10">+ Compare</Link>
                    </div>

                    <div className="flex justify-start gap-4 flex-wrap">
                        {(product.valueAddedBadges == null) ? " " : (product.valueAddedBadges.realTime.map((tag) => (<p className="bg-light px-2 py-0.5 rounded">{tag.replace('_', " ").toUpperCase()}</p>)))}
                    </div>
                </div>
            </div>
        </>
    )
}
