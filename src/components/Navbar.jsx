import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/shop.png";
import cartImage from "../assets/shopping-cart.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 text-white">
        <Link to="/" className="flex items-center">
          <img className="h-10 mr-2" src={logo} alt="Logo" />
          <span className="font-bold text-xl">ShopIT</span>
        </Link>
        <div className="flex items-center">
          <NavLink to="/" className="mr-4 hover:text-yellow-500">
            Home
          </NavLink>
          <NavLink to="/cart" className="mr-4 hover:text-yellow-500">
            <img className="h-8" src={cartImage} alt="Cart" />
          </NavLink>
          <NavLink to="/login" className="mr-4 hover:text-yellow-500">
            Login
          </NavLink>
          <NavLink to="/signup" className="mr-4 hover:text-yellow-500">
            Signup
          </NavLink>
        </div>
      </nav>
    </div>
  );
}