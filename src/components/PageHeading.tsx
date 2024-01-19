import { ChevronRight } from "lucide-react";
import Image from "next/image";
interface pageHeadingProps {
    target: string
}
export default function PageHeading({ target }: pageHeadingProps) {
    return (
        <>
            <div className="h-[40vh] mb-16  pt-32 bg-cover  flex flex-col justify-center items-center relative ">
                <Image fill={true} className=" mt-16 absolute -z-10 object-cover opacity-70 " src="/assets/a1.jpg" alt="" />
                <h3 className="text-2xl font-bold text-center text-black ">{target}</h3>
                <p className="font-bold">Home <ChevronRight className="inline" size={18} /> <span className="font-semibold">{target}</span></p>
            </div>

        </>

    )
}
