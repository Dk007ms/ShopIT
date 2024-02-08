import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";
import MainHeader from "./MainHeader";

export default function AppRoutes() {
  return (
    <div className="routes w-screen  overflow-x-hidden overflow-y-auto">
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
