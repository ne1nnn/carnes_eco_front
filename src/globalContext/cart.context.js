import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItem: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    console.log("From removeProductCart", id);
    setCartItems(cartItems.filter((producto) => producto.id !== id));
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
