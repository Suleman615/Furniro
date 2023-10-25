import Category from "@/components/Category";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Inspirations from "@/components/Inspirations";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Products />
      <Inspirations />
      <Gallery />
    </>
  )
}
