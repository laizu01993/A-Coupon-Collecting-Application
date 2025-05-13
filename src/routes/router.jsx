import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Brands from "../pages/Brands/Brands";
import Login from "../pages/login/login";
import SignUp from "../pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/brands",
                element: <Brands></Brands>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<SignUp></SignUp>
            }
        ]
    }
    
    
])

export default router;
