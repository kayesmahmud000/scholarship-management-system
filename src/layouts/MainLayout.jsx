import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import Container from "../components/Container";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-24 min-h-[calc(100vh-10px)]">
                <Container>
                    <Outlet />
                </Container>
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;