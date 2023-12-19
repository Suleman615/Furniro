import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useMyCart } from "@/contexts/cart";




interface cartProps {
    showCart: Function
}

export default function Cart({ showCart }: cartProps) {

    const { cart, setCart } = useMyCart()
    console.log(cart)




    return (
        <div className="h-m z-20 w-[100vw] h-[100vh]  top-0 right-0 bg-grey bg-opacity-60 fixed">
            <div className="absolute right-0 top-0 w-auto   md:w-80 min-h-[80%] bg-white p-y ps-6">
                <div className="flex gap-6 items-center me-2">
                    <h1 className="text-md font-semibold border-b-2  py-5 flex-grow">Shopping Cart</h1>
                    <X onClick={() => { showCart(false); document.body.style.overflow = 'unset'; }} className="inline cursor-pointer" />
                </div>


                <div className=" h-[70vh] overflow-y-scroll mb-20 thin-scrollbar pe-2 ">
                    {cart.map((p) => (<div className="my-4 pb-2 flex gap-4 items-center border-b">


                        <div className="w-20 h-20 relative">
                            <Image className="rounded-md" src={p.image} alt="asd" fill={true} />
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold w-36">{p.title}</p>
                            <p className="text-grey font-semibold" >color</p>
                            <p className="font-semibold">{p.quantity} <span className="text-grey"> X </span><span className="text-brown"> RS. 60000</span></p>
                        </div>
                        <X className="hover:bg-brown  hover:text-white p-1 cursor-pointer  rounded-full" size={28} />
                    </div>))}
                </div>




                <div className="absolute w-[100%] bg-white   left-0 bottom-0">
                    <div className="flex  border-b pb-3 px-8  justify-between">
                        <p className="font-semibold">Subtotal</p>
                        <p className="font-semibold text-brown">Rs. 70000</p>

                    </div>
                    <div className="text-xs my-3 px-6 flex justify-between">
                        <Link href="/CartPage" onClick={() => { showCart(false); document.body.style.overflow = 'unset'; }} className="btn  py-0.5 px-2 border rounded-xl ">Cart</Link>
                        <Link href="/Checkout" onClick={() => { showCart(false); document.body.style.overflow = 'unset'; }} className="btn py-0.5 px-2 border rounded-xl ">Checkout</Link>
                        <Link href="/Comparison" onClick={() => { showCart(false); document.body.style.overflow = 'unset'; }} className="btn py-0.5 px-2 border rounded-xl ">Comparison</Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
