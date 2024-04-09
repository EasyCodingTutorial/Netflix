// For Auth Layout
import { Navbar } from "./Layout/Navbar/Navbar"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>

            <section style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("/assets/MainBg.jpg")  no-repeat center center/cover`, height: "100vh" }}>
                <Navbar />
                {children}
            </section>



        </>
    )
}
export default AuthLayout

