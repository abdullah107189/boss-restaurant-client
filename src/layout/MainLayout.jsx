import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './mainLayout.css'
import { useEffect, useState } from "react";
const MainLayout = () => {
    const location = useLocation()
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        if (location.pathname === "/login") {
            setIsHidden(true)
        }
        else if (location.pathname === "/register") {
            setIsHidden(true)
        }
        else {
            setIsHidden(false)
        }
    }, [location.pathname])

    return (
        <div className="max-w-screen-xl mx-auto ">
            {isHidden || <Navbar></Navbar>}
            <div className="my-container ">
                <Outlet></Outlet>
            </div>
            {isHidden || <Footer></Footer>}
        </div >
    );
};

export default MainLayout;