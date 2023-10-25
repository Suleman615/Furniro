import Features from "@/components/Features";
import PageHeading from "@/components/PageHeading";
import { Clock9, MapPin, PhoneCall } from "lucide-react";


export default function Contact() {
    return (
        <>
            <PageHeading target="Contact" />
            <div className="py-10">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">Get In Touch With US</h3>
                    <p className="max-w-[30em] mx-auto text-grey text-sm font-semibold">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mx-3 my-10 md:mx-40">
                    <div className="flex flex-col ms-0 md:ms-20  flex-grow gap-8 my-6">

                        <div className="flex gap-3">
                            <MapPin />
                            <div className="-mt-1">
                                <p className="text-md font-semibold">Adress</p>
                                <p className="text-grey text-sm leading-4">236 5th SE Avenue, <br /> New York NY10000,<br /> United States</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <PhoneCall />
                            <div className="-mt-1">
                                <p className="text-md font-semibold">Phone</p>
                                <p className="text-grey text-sm leading-4">Mobile: +(84) 546-6789</p>
                                <p className="text-grey text-sm leading-4">Hotline: +(84) 546-6789</p>                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Clock9 />
                            <div className="-mt-1">
                                <p className="text-md font-semibold">Working Time</p>
                                <p className="text-grey text-sm leading-4">Monday-Friday: 09:00 - 22:00</p>
                                <p className="text-grey text-sm leading-4">Saturday-Sunday: 09:00 - 20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex-center flex-grow  ">

                        {/* ************ Contact Form ************* */}

                        <form className="flex w-[400px] mx-auto flex-col" action="" method="post">
                            <span className="form-span">
                                <label htmlFor="name">Name</label>
                                <input className="form-input" type="text" name="name" />
                            </span>
                            <span className="form-span">
                                <label htmlFor="mail">Email Address</label>
                                <input className="form-input" type="email" name="mail" />
                            </span>
                            <span className="form-span">
                                <label htmlFor="subject">Subject</label>
                                <input className="form-input" type="text" name="subject" />
                            </span>
                            <span className="form-span">
                                <label htmlFor="message">Name</label>
                                <textarea className="form-input" name="message" id="" cols={20} rows={6}></textarea>
                            </span>

                            <button className="btn  ms-6  rounded">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            <Features />
        </>
    )
}
