import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CartProvider } from "@/contexts/cart"
// import { CompareProvider } from "@/contexts/compare"
export default function Layout({ children }: any) {
    return (
        <>
            <CartProvider>
                {/* <CompareProvider> */}
                <Navbar />
                {children}
                {/* </CompareProvider> */}
            </CartProvider>
            <Features />
            <Footer />
        </>
    )
}