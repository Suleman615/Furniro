import Image from "next/image"

export default function CategoryCard() {
    return (
        <div className=" h-96 w-72  bg-light rounded">
            <div className="w-[100%] h-[90%] relative ">
                <Image fill={true} className="rounded  " src="/assets/hero-bg.jpg" alt="" />
            </div>
            <p className="text-center text-md mt-3 font-semibold">Room</p>
        </div>
    )
}
