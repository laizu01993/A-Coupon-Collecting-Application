import { Link } from "react-router-dom";

const Header = () => {
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
            <div className="font-medium">
                <Link to="login">Login</Link>
                <br />
                <Link 
                to="register">Register</Link>
            </div>
        </div>
    );
};

export default Header;