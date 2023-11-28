import PageHeading from "@/components/PageHeading";
import { useState } from "react";

export default function Checkout() {
    const [paymentMethod, setpaymentMethod] = useState('')

    return (
        <>
            <PageHeading target="Checkout" />
            <div className="flex flex-col md:flex-row mx-2 md:mx-10 xl:mx-40 py-20 gap-20">
                <div className="" >
                    <p className="text-xl text-center sm:text-left font-bold">Billing Details</p>
                    <form className="mt-10 flex flex-col gap-8 ms-5 md:ms-0" action="submit">
                        <span className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                            <span className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="firstName">First Name</label>
                                <input className="border w-66 rounded-lg ps-2  py-2  text-grey font-normal  focus:outline-brown" placeholder="Enter First Name" type="text" name="firstName" id="" required />
                            </span>
                            <span className="flex flex-col gap-2 font-semibold">
                                <label htmlFor="lastName">Lastt Name</label>
                                <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Enter Last Name" type="text" name="lastname" id="" />
                            </span>
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="company">Company Name(Optional)</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Company" type="text" name="company" id="" />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="country">Country/Region</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Country / Region" type="text" name="country" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="address">Street Address</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Street Address" type="text" name="address" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="city">Town / City</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="City" type="text" name="city" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="province">Province</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Province" type="text" name="province" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="zip">Zip Code</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Zip Code" type="number" name="zip" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="phone">Phone</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Phone" type="tel" name="phone" id="" required />
                        </span>
                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="email">Email Address</label>
                            <input className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Email Address" type="email" name="email" id="" required />
                        </span>

                        <span className="flex flex-col gap-2 font-semibold">
                            <label htmlFor="info">Additional Information</label>
                            <textarea className="border  rounded-lg ps-2  py-2 text-grey font-normal  focus:outline-brown" placeholder="Additional Information" name="info" id="" rows={4}></textarea>
                        </span>


                    </form>


                </div>

                <div className="flex-grow w-full px-10 pt-10 ">
                    <span className="flex justify-between font-semibold text-lg">
                        <p>Product</p>
                        <p>Subtotal</p>
                    </span>

                    <span className="flex justify-between font-semibold items-center my-4">
                        <span className="flex items-center gap-4"> <p className="text-grey w-36">Simply Vera Vera Wang 800 Thread Count Egyptian Cotton Sheet Set or Pillowcases </p> <p>X 1</p></span>
                        <p>Rs.456789</p>
                    </span>

                    <span className="flex justify-between font-bold text-md border-b pb-6">
                        <p>Total</p>
                        <p className="text-brown">Rs.567890</p>
                    </span>
                    <input onClick={() => setpaymentMethod('bank')} className="mt-6 mb-2 mx-2 cursor-pointer" type="radio" name="bank-transfer" id="" />
                    <label className="font-semibold" htmlFor="bank-transfer">Direct Bank Transfer</label><br />
                    {paymentMethod == 'bank' && <p className="mx-2 font-semibold text-grey">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                    <input onClick={() => setpaymentMethod('cash')} className="my-2 mx-2 cursor-pointer" type="radio" name="bank-transfer" id="" />
                    <label className="font-semibold" htmlFor="bank-transfer">Cash On Delivery</label>
                    {paymentMethod == 'cash' && <p className="mx-2 font-semibold text-grey">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                    {<p className="mx-2 text-justify my-6">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold hover:text-brown cursor-pointer">privacy policy</span>.</p>}
                    <button className="border px-10 xl:px-20 font-semibold rounded-lg py-4 border-brown hover:bg-brown hover:text-white mx-2 lg:mx-20 focus:outline-brown">Place Order</button>
                </div>
            </div>
        </>
    )
}
