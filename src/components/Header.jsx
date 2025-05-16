import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    

    const handleLogout = () =>{
        logOut()
        .then(() =>{
            console.log('user logout successfully')
        })
        .catch(error => console.log('ERROR',error.message))
    };
    return (
        <div className="w-11/12 mx-auto my-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
                <img src="https://i.ibb.co.com/tTrTkG0K/discount-ribbon-banner-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration.jpg" alt="Logo" className="w-10 h-10" />
                <span>Discount PRO</span>
            </div>
            {/* Navigation */}
            <nav className="flex gap-6 items-center text-gray-700 font-medium">
                <Link to="/">Home</Link>
                <Link to="/brands">Brands</Link>
                <Link>My Profile</Link>
                <Link>About Dev</Link>
            </nav>
            {/* auth section */}
            {user ?
                
                    (<div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full " src={user.photoURL} />
                        <span>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-sm bg-red-200 text-red-800">Logout</button>
                    </div>)
                 : (<div className="font-medium">
                    <Link to="/login">Login</Link>
                    <br />
                    <Link
                        to="/register">Register</Link>
                </div>)}

        </div>
    );
};

export default Header;