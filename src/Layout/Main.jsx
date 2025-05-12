import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Nav from "../components/Shared/Navbar/Nav";



const Main = () => {
    return (
        <div className="font-outfit">
            <div className="h-16">
                <Nav />
            </div>
            <div className="min-h-[calc(100vh-285px)]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;
