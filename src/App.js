import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products/product";
import Navbar from "./components/navbar/navbar";
import ProductsForm from "./components/formproduct.js/form.product";
export default function App() {
  return (
    <Router>
      {/* shared header */}
      <div className="body-container-sm">
        <Navbar />
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
