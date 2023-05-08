import React from "react";
import "./navbar.styles.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
        <li>
          <Box
            className="box"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Box>
        </li>
        <li>
          <a>
            <ShoppingCartIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
