import React, { useState } from "react";
import "./cart.styles.css";

function Cart() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div className="barra-vertical">
      <div>
        <h1>Carrito de productos</h1>
        <ul>
          {productos.map((producto, index) => (
            <li key={index}>{producto.nombre}</li>
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Cart;
