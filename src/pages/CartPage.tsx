import PageHeading from '@/components/PageHeading'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/assets/a3.jpg'
import React from 'react'
import { Trash2 } from 'lucide-react'

import { useMyCart } from '@/contexts/cart'

export default function CartPage() {

    const { cart, setCart } = useMyCart()

    return (
        <>
            <PageHeading target='Cart' />

            <div className='my-28 mt-56 md:mt-28 flex flex-col lg:flex-row gap-10 px-10  min-h-56'>

                <div className='ps-0 flex flex-row md:flex-col  md:ps-10'>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-2 bg-white md:bg-medium py-4 ps-2 md:ps-36 lg:ps-40 pe-4 lg:pe-10 font-semibold w-auto lg:w-fit'>
                        <p className='h-16 md:h-fit w-32 lg:w-36 '>Product</p>
                        <p className='h-16 md:h-fit w-32 lg:w-36'>Price</p>
                        <p className='h-16 md:h-fit w-32 lg:w-36'>Quantity</p>
                        <p className='h-16 md:h-fit w-32 lg:w-36'>Subtotal</p>
                    </div>


                    {cart.map((p) => (<div className='my-4 flex flex-col md:flex-row gap-2 font-semibold text-grey items-center'>
                        <div className='-mt-36 md:mt-0 -ms-48 md:ms-0 h-32 w-32  relative'>
                            <Image className='rounded-xl' src={image} fill={true} alt='fghj' />
                        </div>
                        <p className='h-16 md:h-fit ms-0 lg:ms-6  w-32 lg:w-36'>Effortless Stretch Pull-On Straight-Leg Pants</p>
                        <p className='h-16 md:h-fit w-32 lg:w-36'>Rs. 4546667</p>
                        <p className='h-16 md:h-fit w-32 lg:w-36 '><span className='border rounded  px-4 py-1'>2</span></p>
                        <p className='h-16 md:h-fit w-32 lg:w-36'>Rs. 4546667</p>
                        <Trash2 className='hover:text-brown cursor-pointer' />
                    </div>))}






                </div>



                <div className='bg-medium h-fit flex flex-col items-center py-2 px-16 font-semibold'>
                    <p className=' text-lg  text-center'>Cart Totals</p>
                    <p className='py-10'>Total <span className='text-brown  ps-16'>Rs. 56789</span></p>
                    <Link href="/Checkout" className='btn rounded-xl '>Checkout</Link>
                </div>
            </div>
        </>
    )
}
