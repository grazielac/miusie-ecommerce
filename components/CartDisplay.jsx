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
                  <div className="bg-gray-200 flex gap-8 pl-8">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                    <div>
                      <div className="bg-amber-200 mt-8">
                        <div className="font-bold">
                          {item.title} x {item.quantity}
                        </div>
                        <div>
                          <span>£{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p>Subtotal</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-red-300 rounded-full px-4 py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
