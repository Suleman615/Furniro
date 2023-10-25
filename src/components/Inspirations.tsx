import Slider from "./Slider";

export default function Inspirations() {
  return (
    <div className="grid grid-flow-col grid-cols-12 items-center px-16 bg-light">
      <div className="col-span-5  flex flex-col justify-center  px-16">
        <p className="text-xl font-bold leading-8">50+ Beautiful rooms <br /> inspiration</p>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="px-4 py-1  my-6 text-brown font-semibold  border-2 border-brown hover:bg-brown hover:text-white w-fit ">Show More</button>
      </div>
      <div className="col-span-7 bg-grey-100">
        <div className="flex justify-center items-center p-4">
          <Slider />
        </div>
      </div>
    </div>
  )
}
