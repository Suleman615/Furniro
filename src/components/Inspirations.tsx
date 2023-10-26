import Slider from "./Slider";

export default function Inspirations() {
  return (
    <div className="grid grid-flow-row grid-cols-12 items-center relative  md:px-16 bg-light">


      <div className="col-span-11 md:col-span-5  flex flex-col justify-center px-2 md:px-0  lg:px-16 text-center md:text-start">
        <p className="text-xl font-bold leading-8">50+ Beautiful rooms <br /> inspiration</p>
        <p className="w-56 mx-auto md:mx-0">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="btn mx-auto md:mx-0 bg-light ">Show More</button>
      </div>

      <div className="col-span-11  md:col-span-7  mx-auto md:mx-0">
        <div className="flex justify-center items-center p-4">
          <Slider />
        </div>
      </div>
    </div>
  )
}
