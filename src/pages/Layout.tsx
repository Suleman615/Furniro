import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CartProvider } from "@/contexts/cart"
export default function Layout({ children }: any) {
    return (
        <>
            <CartProvider>
                <Navbar />
                {children}
            </CartProvider>
            <Features />
            <Footer />
        </>
    )
}