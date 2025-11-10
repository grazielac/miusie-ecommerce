"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

function CartProvider({ children }) {
  // store the cart
  const [cart, setCart] = useState([]);

  // function that takes an item and adds it to the cart
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
