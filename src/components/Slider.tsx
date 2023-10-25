import { Dot } from "lucide-react"

export default function Slider() {
    return (
        <div className="flex gap-4">
            <div className="relative">
                <img className="h-96 w-72" src="/assets/hero-bg.jpg" alt="" />
            </div>
            <div >
                <div className="relative">
                    <img className="h-80 w-64" src="/assets/hero-bg.jpg" alt="" />

                </div>
                <div>
                    <p className={`text-xl font-extrabold text-gray-500 border border-gray-500 rounded-full  w-fit h-2px`}>.</p>
                    <span></span><span></span><span></span>
                </div>

            </div>
        </div>
    )
}
