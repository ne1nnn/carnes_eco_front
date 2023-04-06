import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Product from "./components/products/product";
import Navbar from "./components/navbar/navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Product />
  </React.StrictMode>
);
