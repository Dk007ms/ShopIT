import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedinState } from "../redux/Slices/LoginSlice";
import logo from "../assets/shop.png";
import cartImage from "../assets/shopping-cart.png";
import "./navbar.css";
import { logOut } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";
import "./toastStyles.css";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { isLoggedin } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.clear();
    dispatch(logOut());
    dispatch(setLoggedinState(false));
    navigate("/");
    toast.success("Signed Out Successfully", {
      autoClose: 2000,
      draggable: true,
      bodyClassName: "toastbody",
      className: "toastbody",
      style: {
        borderRadius: "1rem",
      },
    });
  };

  return (
    <div className="bg-gray-800 fixed w-screen z-10">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 text-white relative">
        <Link to="/" className="flex items-center">
          <img className="h-10 mr-2" src={logo} alt="Logo" />
          <span className="font-bold text-xl">ZenithMart</span>
        </Link>
        <div className="hidden lg:flex items-center">
          <NavLink to="/" className="mr-4 hover:text-yellow-500">
            Home
          </NavLink>
          {isLoggedin ? (
            <button onClick={logout} className="mr-4 hover:text-yellow-500">
              LogOut
            </button>
          ) : (
            <>
              <NavLink to="/login" className="mr-4 hover:text-yellow-500">
                Login
              </NavLink>
              <NavLink to="/signup" className="mr-4 hover:text-yellow-500">
                Signup
              </NavLink>
            </>
          )}
        </div>
        <div className="flex items-center w-max">
          <NavLink to="/cart" className="mr-4 hover:text-yellow-500">
            <span className="cartCount relative top-2 left-5 bg-black text-white border-s border-white rounded-full w-6 h-6 inline-block text-center z-10">
              {cart.reduce((count, item) => count + item.quantity, 0)}
            </span>
            <img
              className="w-12 object-contain relative bottom-3"
              src={cartImage}
              alt="Cart"
            />
          </NavLink>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block hover:text-white focus:text-white focus:outline-none transition-transform"
            >
              <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
                <div className="hamburger-icon-line"></div>
                <div className="hamburger-icon-line"></div>
                <div className="hamburger-icon-line"></div>
              </div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-gray-800 mt-2 rounded-md border border-gray-700">
            <div className="py-2">
              <NavLink
                to="/"
                className="block text-white text-lg px-4 py-2 hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              {isLoggedin ? (
                <button
                  onClick={logout}
                  className="block text-white text-lg px-4 py-2 hover:bg-gray-700"
                >
                  Logout
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="block text-white text-lg px-4 py-2 hover:bg-gray-700"
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="block text-white text-lg px-4 py-2 hover:bg-gray-700"
                    onClick={toggleMenu}
                  >
                    Signup
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
