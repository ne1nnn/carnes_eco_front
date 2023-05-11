import React, { useContext, useState } from "react";
import "./cart.styles.css";
import { CartContext } from "../../globalContext/cart.context";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="barra-vertical animated slideInRight">
      <div>
        <h1>Carrito de productos</h1>
        <ul>
          {cartItems.map((producto, index) => (
            <li key={index}>{producto.title}</li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Cart;
