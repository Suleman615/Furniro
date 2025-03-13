import Category from "@/components/Category";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Inspirations from "@/components/Inspirations";
import Products from "@/components/Products";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>Furniro | Home</title>
        <meta name="description" content="Welcome to Furniro. Explore the latest products." />
        <meta name="keywords" content="ecommerce, shop,furniture, lifestyle" />
        <meta name="author" content="Ghulam Suleman" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Furniro | Home" />
        <meta property="og:description" content="Explore and purchase  on Furniro." />
        <meta property="og:image" content="https://furnirofurniture.vercel.app/assets/logo-white.png" />
        <meta property="og:url" content="https://furnirofurniture.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Furniro" />



        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Furniro | Home" />
        <meta name="twitter:description" content="Explore and purchase  on Furniro" />
        <meta name="twitter:image" content="https://furnirofurniture.vercel.app/assets/logo-white.png" />

        {/* Favicon */}
        <link rel="icon" href="assets/favicon.png" />

      </Head>

      <Hero />
      <Category />
      <Products />
      <Inspirations />
      <Gallery />
    </>
  )
}
