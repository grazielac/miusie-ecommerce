"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

function CartProvider({ children }) {
  // store the cart // cart starts empty on server + client
  const [cart, setCart] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      localStorage.removeItem("cart");
      return [];
    }
  });
  

// save cart when changed
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

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
// delete an item by ID
  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
