

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
                    <div className="h-72 ps-4 py-2 ">
                        <img className="object-cover w-full h-full" src="/assets/p5.jpg" alt="" />
                    </div>
                    <div className=" h-72 flex">
                        <div className=" w-[40%]">
                            <img className="object-cover h-full " src="/assets/p4.jpg" alt="" />
                        </div>
                        <div className="flex-grow h-60 p-2 w-[50%]">
                            <img className="object-cover h-full " src="/assets/p10.jpg " alt="" />
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className="col-span-8 py-2 md:py-20 w-full md:col-span-2 p-3 flex items-center">
                    <img className="h-full w-full object-cover" src="/assets/p7.jpg" alt="" />

                </div>

                {/* Right Images */}
                <div className="col-span-8 md:col-span-3 ">
                    <div className="flex h-80">
                        <div className="h-full pt-8 flex-1">
                            <img className="h-full w-full object-cover" src="/assets/p8.jpg" alt="" />
                        </div>
                        <div className="h-full px-4  flex-1">
                            <img className="h-full w-full object-cover" src="/assets/p4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="  flex my-2 ">
                        <div className="h-56 w-36    ">
                            <img className="h-full w-full object-cover" src="/assets/p8.jpg" alt="" />
                        </div>
                        <div className="h-36 w-48 m-2 ">
                            <img className="h-full w-full object-cover" src="/assets/p1.jpg" alt="" />
                        </div>
                        <div className="h-44 w-36    ">
                            <img className="h-full w-full object-cover" src="/assets/p7.jpg" alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}
