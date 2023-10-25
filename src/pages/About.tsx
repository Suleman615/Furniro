import PageHeading from "@/components/PageHeading";
import { url } from "inspector";


export default function About() {
    return (
        <>
            <PageHeading target="About" />

            <div className="grid  md:grid-flow-row grid-cols-2 items-center mx-2 md:mx-20 py-10 ">
                <div className="col-span-2 lg:col-span-1 text-center lg:text-left" >
                    <h3 className="text-lg font-bold">Who <span className="text-brown"> We Are...</span></h3>
                    <p className="text-grey mx-2">At <b>Furniro</b>, we are passionate about bringing convenience and style to your home furnishing needs. We understand that  furniture plays a crucial role in enhancing the quality of life, comfort, and aesthetics. Our team is dedicated to redefining the way you shop for furniture. We are more than just an online platform; we are your trusted partner in creating beautiful, functional spaces. With a commitment to quality, affordability, and seamless service, we offer a wide range of furniture options to cater to diverse tastes and requirements. Our mission is to make furnishing your home an enjoyable and hassle-free experience, just a click away. Discover the perfect pieces that resonate with your unique style at <b>Furniro</b>, where we bring the showroom to your doorstep.</p>
                </div>
                <div className="col-span-2 lg:col-span-1  flex-center ">
                    <img className=" h-full w-full mask-shape  " src="/assets/p2.jpg" alt="" />
                </div>

            </div>

            {/* *********** OUR TEAM ************ */}
            <div className="mx-2 md:mx-20 my-10">
                <h3 className="text-lg font-bold text-center">Meet Our <span className="text-brown">Team</span></h3>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* ************ Our Sponsors *********** */}
            <div className="py-10 bg-brown bg-opacity-40">
                <div className="text-center mx-2">
                    <h3 className="text-lg font-bold ">Who we are Engaged with...</h3>
                    <p className="max-w-[600px] mx-auto">We partner with humble, trusting leaders that think strategically. Businessmen and women who believe in the change they’re making, embrace their mission and want to bring in a partner to accelerate their growth.</p>
                </div>
                <div className="flex-center flex-wrap my-10 gap-5">
                    <img className="" src="/assets/logos/sponsor-1.png" alt="" />
                    <img className="" src="/assets/logos/sponsor-2.png" alt="" />
                    <img className="" src="/assets/logos/sponsor-3.png" alt="" />
                    <img className="" src="/assets/logos/sponsor-4.png" alt="" />
                    <img className="" src="/assets/logos/sponsor-5.png" alt="" />

                </div>

            </div>

        </>
    )
}
