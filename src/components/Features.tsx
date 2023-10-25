import { Trophy, CheckCircle, Truck, CalendarClock } from "lucide-react";

export default function Features() {
    return (
        <div className="flex flex-wrap bg-medium py-6 px-4 justify-around">
            <div className="flex items-center gap-2 py-6 mx-2">
                <Trophy size={40} />
                <span>
                    <h3 className="text-md font-semibold">High Quality</h3>
                    <p className="text-sm text-grey">crafted from top materials</p>
                </span>
            </div>
            <div className="flex items-center gap-2 py-6 mx-2">
                <CheckCircle size={40} />
                <span>
                    <h3 className="text-md font-semibold">Warrenty Protection</h3>
                    <p className="text-sm text-grey">Over 2 years</p>
                </span>
            </div>
            <div className="flex items-center gap-2 py-6 mx-2">
                <Truck size={40} />
                <span>
                    <h3 className="text-md font-semibold">Free Shipping</h3>
                    <p className="text-sm text-grey">Order over 150$</p>
                </span>
            </div>
            <div className="flex items-center gap-2 py-6 mx-2">
                <CalendarClock size={40} />
                <span>
                    <h3 className="text-md font-semibold">24 / 7 Support</h3>
                    <p className="text-sm text-grey">Dedicated support</p>
                </span></div>
        </div>
    )
}
