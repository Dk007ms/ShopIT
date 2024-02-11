import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import "react-toastify/dist/ReactToastify.css";
import "./components/toastStyles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
      <ToastContainer bodyClassName="toastbody" className="toastbody" />
    </BrowserRouter>
  </>
);
