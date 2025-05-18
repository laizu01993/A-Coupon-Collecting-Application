import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Brands from "../pages/Brands/Brands";
import Login from "../pages/login/login";
import SignUp from "../pages/SignUp/SignUp";
import BrandsCoupon from "../components/BrandsCoupon/BrandsCoupon";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



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
            },
            {
                path: '/brand/:id',
                element:<PrivateRoute><BrandsCoupon></BrandsCoupon></PrivateRoute>,
                loader: async ({params}) =>{
                    const res = await fetch('/coupons.json');
                    const data = await res.json();
                    const brandData = data.find(brand => brand._id === params.id);
                    return brandData;
                }
            }
        ]
    }
    
    
])

export default router;
