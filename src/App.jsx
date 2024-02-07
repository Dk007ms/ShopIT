import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

export default function App() {
  console.log("hello i am app");
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}
