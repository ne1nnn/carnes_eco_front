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
    const existingProduct = cartItems.find((item) => item.id === product.id);
   

    if (!existingProduct) {
      setCartItems([...cartItems, { ...product, stock: 1 }]);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, stock: item.stock + 1 };
        }

        return item;
      });

      console.log("From AddtoCart");

      setCartItems(updatedCartItems);
    }
    const updatedProduct = cartItems.find(
      (item) => item.id === product.id
    );

    if (updatedProduct.stock > updatedProduct.stock) {
      console.log("No hay más stock disponible para este producto");
    }
    
  };

  const removeFromCart = (id) => {
    setCartItems(
      cartItems.map((producto) =>
        producto.id === id && producto.stock > 0
          ? { ...producto, stock: producto.stock - 1 }
          : producto
      )
    );
    const productoEliminado = cartItems.find((producto) => producto.id === id);
    console.log(
      "From removeProductCart  || ",
      ` El nuevo stock de ${productoEliminado.title} es: ${productoEliminado.stock}`
    );

    if (productoEliminado.stock === 1) {
      setCartItems(cartItems.filter((producto) => producto.id !== id));
    }
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
