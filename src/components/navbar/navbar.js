import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const addProduc = () => {
    navigate("/formproduct");
  };
  const goHome = () => {
    navigate("/home");
  };

  return (
    <nav>
      <ul>
        <li>
          <a onClick={addProduc}>PRODUCTOS</a>
        </li>
        <li>
          <a onClick={goHome}>Home</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
