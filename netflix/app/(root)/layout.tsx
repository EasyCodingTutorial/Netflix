import Footer from "./Layout/Footer/Footer"
import Navbar from "./Layout/Navbar/Navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
export default RootLayout