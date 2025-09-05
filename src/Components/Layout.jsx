import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


export default function Layout() {


    return (<>
        <main className="main-section">
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </main>
    </>)
}