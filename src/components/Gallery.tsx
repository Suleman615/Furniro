import Image from "next/image"

export default function Gallery() {
    return (
        <div className="my-20">
            <div className="text-center">
                <p className="text-sm font-semibold text-grey">share your setup with</p>
                <p className="text-md font-bold">#FurniroFurniture</p>
            </div>

            <div className="grid grid-flow-row grid-cols-8 my-10">

                {/* left Images  */}
                <div className="col-span-8 md:col-span-3">
                    <div className="h-72 ms-4 my-2 relative ">
                        <Image fill={true} className="object-cover " src="/assets/p5.jpg" alt="" />
                    </div>
                    <div className=" h-72 flex">
                        <div className=" w-[40%] relative">
                            <Image fill={true} className="object-cover " src="/assets/p4.jpg" alt="" />
                        </div>
                        <div className="flex-grow h-60 m-2 w-[50%] relative">
                            <Image fill={true} className="object-cover " src="/assets/p10.jpg " alt="" />
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className="col-span-8 my-2 md:my-20 min-w-80 h-96  md:col-span-2 mx-3 flex items-center relative">
                    <Image fill={true} className="object-cover" src="/assets/p7.jpg" alt="" />

                </div>

                {/* Right Images */}
                <div className="col-span-8 md:col-span-3 ">
                    <div className="flex h-80">
                        <div className="h-full mt-8 flex-1 relative">
                            <Image fill={true} className="object-cover" src="/assets/p8.jpg" alt="" />
                        </div>
                        <div className="h-full mx-4  flex-1 relative">
                            <Image fill={true} className="object-cover" src="/assets/p4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="  flex mt-10 ">
                        <div className="h-56 w-36  relative  ">
                            <Image fill={true} className="object-cover" src="/assets/p8.jpg" alt="" />
                        </div>
                        <div className="h-36 w-48 m-2 relative">
                            <Image fill={true} className="object-cover" src="/assets/p1.jpg" alt="" />
                        </div>
                        <div className="h-44 w-36  relative  ">
                            <Image fill={true} className="object-cover" src="/assets/p7.jpg" alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}
