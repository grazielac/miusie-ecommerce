"use client";
import { useCart } from "../context/CartProvider";
import Image from "next/image";

function CartDisplay() {
  const { cart } = useCart();

  return (
    <div>
      <div className="pb-2 pt-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

        <div className="">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="mb-2">
                  <span className="flex">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-md" />
                      {item.title} x {item.quantity}
                    </div>
                  </span>
                  <span>£{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
