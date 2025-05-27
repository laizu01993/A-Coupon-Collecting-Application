

import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  //  Hide Header for routes not listed
  if (!["/", "/brands", "/my-profile", "/about", "/login", "/register"].includes(location.pathname)) {
    return null;
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        // console.log("user logout successfully");
      })
    // .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <header className=" sticky top-0 z-50 bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-md border-b border-blue-200">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <img
            src="https://i.ibb.co.com/tTrTkG0K/discount-ribbon-banner-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration.jpg"
            alt="Logo"
            className="w-10 h-10"
          />
          <span>Discount PRO</span>
        </div>

        {/* Hamburger for small devices */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-blue-800"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/my-profile">My Profile</Link>
          <Link>About Dev</Link>
        </nav>

        {/* Auth Section - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt="User"
              />
              <span>{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-200 text-red-800"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="font-medium text-blue-800">
              <Link to="/login">Login</Link> |{" "}
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 text-center border-t border-blue-200">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/brands" onClick={() => setMenuOpen(false)}>Brands</Link>
          <Link to="/my-profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
          <Link onClick={() => setMenuOpen(false)}>About Dev</Link>

          {user ? (
            <div className="mt-4 space-y-2">
              <img
                className="w-10 h-10 rounded-full mx-auto"
                src={user.photoURL}
                alt="User"
              />
              <p>{user.displayName}</p>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="btn btn-sm bg-red-200 text-red-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="mt-4 space-x-4">
              <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
