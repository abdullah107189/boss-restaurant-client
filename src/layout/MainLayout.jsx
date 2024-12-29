import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import './mainLayout.css'
const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <div className="my-container">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default MainLayout;