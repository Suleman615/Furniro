import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
            <Features />
            <Footer />
        </>
    )
}