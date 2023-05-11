import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products/product";
import Navbar from "./components/navbar/navbar";
import CartProducts from "./components/cart/cart.product";
import ProductsForm from "./components/formproduct.js/form.product";
import { useState } from "react";

export default function App() {
  const [mostrarCart, setMostrarCart] = useState(false);

  function toggleCart() {
    setMostrarCart(!mostrarCart);
  }

  return (
    <Router>
      {/* shared header */}
      <div className="body-container-sm">
        <Navbar toggleCart={toggleCart} />
        {mostrarCart && <CartProducts />}

        <Routes>
          {/* auth */}
          {/* <Route path="/" element={<LoginForm />} /> */}
          <Route path="/home" element={<Products />} />
          <Route path="/formproduct" element={<ProductsForm />} />
          {/* home */}
          <Route path="/" element={<Products />} />
          {/* catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}
