import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const addProduct = () => {
    navigate("/formproduct");
  };
  const goHome = () => {
    navigate("/home");
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a onClick={goHome}>Home</a>
        </li>
        <li>
          <a onClick={addProduct}>Agregar producto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
