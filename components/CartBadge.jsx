// CartBadge.jsx
"use client";
import { useCart } from "@/context/CartProvider";

export default function CartBadge() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalItems === 0) return null;

  return (
    <span className="absolute -top-1 -right-2 bg-red-800 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
      {totalItems}
    </span>
  );
}