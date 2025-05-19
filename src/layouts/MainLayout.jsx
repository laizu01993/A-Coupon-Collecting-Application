import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
            <Toaster position="top-right" reverseOrder={false}></Toaster>
        </div>
    );
};

export default MainLayout;