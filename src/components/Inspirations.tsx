
export default function Inspirations() {
  return (
    <div className="grid grid-flow-col grid-cols-12 px-10">
      <div className="col-span-4 bg-light flex flex-col justify-center  px-16">
        <p className="text-xl font-bold leading-8">50+ Beautiful rooms <br /> inspiration</p>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="px-4 py-1  my-6 text-brown font-semibold  border border-brown hover:bg-brown hover:text-white w-fit ">Show More</button>
      </div>
      <div className="col-span-8 bg-grey">
        <div></div>
      </div>
    </div>
  )
}
