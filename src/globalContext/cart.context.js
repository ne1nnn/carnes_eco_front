import { createContext, useContext, useState } from "react";
import axios from "axios";

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
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, stock: item.stock + 1 };
        }

        return item;
      });

      setCartItems(updatedCartItems);
    }
    const updatedProduct = cartItems.find((item) => item.id === product.id);
    console.log(updatedProduct);
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

  // const handleCheckout = async (product) => {
  //   // Validar y procesar la compra
  //   // ...

  //   // Actualizar el stock del producto
  //   const productId = product.id;
  //   const newStock = product.stock - 1;

  //   try {
  //     const response = await axios.put(
  //       "http://localhost:4000/product/" + productId,
  //       {
  //         stock: newStock,
  //       }
  //     );
  //     console.log(product);
  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   // Informar al usuario que la compra se ha completado con éxito
  //   // ...
  // };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    // handleCheckout,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
