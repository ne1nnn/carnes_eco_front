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
    const existingProduct = cartItems.find(item => item.id === product.id);
    console.log("From AddtoCart" + existingProduct);
    
    if (!existingProduct) {
      setCartItems([...cartItems, {...product, stock: 1}]);
    } else {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === product.id) {
          return {...item, stock: item.stock + 1};
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  };
  
  const removeFromCart = (id) => {
    console.log("From removeProductCart", id);
    setCartItems(cartItems.filter((producto) => producto.id !== id));
  };

  const updateCartItem = (productId, stock) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, stock } : item
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
