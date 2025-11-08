"use client";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: string;
  title: string;
  price: string;
  image: StaticImageData;
  slug: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

function CartProvider({ children }: { children: ReactNode }) {
  // store the cart
  const [cart, setCart] = useState<CartItem[]>([]);

  // function that takes an item and adds it to the cart
  function addToCart(product: Product) {
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
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
