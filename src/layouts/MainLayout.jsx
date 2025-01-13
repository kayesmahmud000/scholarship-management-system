import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-24 min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
            <Footer/>
           
        </div>
    );
};

export default MainLayout;