import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Nav from "../components/Shared/Navbar/Nav";



const Main = () => {
    return (
        <div className="font-poppins">
            <div className="h-28">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-285px)] mt-5">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
