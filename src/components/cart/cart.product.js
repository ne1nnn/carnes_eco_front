import React, { useContext } from "react";
import "./cart.styles.css";
import { CartContext } from "../../globalContext/cart.context";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (id) => {
    removeFromCart(id);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <FaShoppingCart className="cart-icon" />
        <h1>Carrito de productos</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((producto, index) => (
            <tr key={index}>
              <td>{producto.title}</td>
              <td>${producto.price}</td>
              <td>{producto.stock}</td>
              <td>
                <button onClick={() => handleDelete(producto.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        Total: ${total}
        <button className="pay-button">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;
