import React, { useContext } from "react";
import "./cart.styles.css";
import { CartContext } from "../../globalContext/cart.context";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleDelete = (id) => {
    removeFromCart(id);
  };
  // const handleBuy = (product) => {
  //   handleCheckout(product);
  // };
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
            <th className="no-margen">Producto</th>
            <th className="no-margen">Precio</th>
            <th className="no-margen">Cant.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((producto, index) => (
            <tr key={index}>
              <td className="no-margen">{producto.title}</td>
              <td className="no-margen">${producto.price}</td>
              <td className="no-margen">{producto.stock}</td>
              <td className="no-margen">
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
