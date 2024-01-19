

export default function Hero() {
    return (
        <div className="w-full h-[90vh] bg-[url('/assets/hero-bg.jpg')] bg-cover bg-no-repeat flex justify-end items-center ">

            <div className="h-auto bg-medium rounded-lg p-4 w-80 mx-2 sm:mx-0  sm:me-24 lg:me-72 ">
                <p className="text-md font-semibold">New Arrival</p>
                <p className="text-xl font-bold text-brown leading-8 my-4">Discover Our <br /> New Collection</p>
                <p className="text-sm text-grey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="btn rounded my-2 bg-medium">Buy Now</button>
            </div>

        </div>
    )
}
