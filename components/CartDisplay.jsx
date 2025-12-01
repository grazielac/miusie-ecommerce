"use client";
import { useCart } from "../context/CartProvider";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";

function CartDisplay() {
  const { cart } = useCart();

  //calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

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
                  {/* TEXT */}
                  <div className="w-full">
                    <div className="flex gap-4 w-1/2 justify-around items-center border-b mb-8 ">
                      <p>Products</p>
                      <p>Description</p>
                      <p>Quantity</p>
                      <p>Price</p>
                      <p>Delete</p>
                    </div>
                  </div>
                  <div className="flex gap-8 pl-8">
                    <div>
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={200}
                          height={200}
                          className="rounded-md"
                        />
                      )}
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

        <div className="mt-4 font-bold text-lg">Subtotal: £{subtotal}</div>

        <div className="flex items-center justify-center">
          <CheckoutButton
            items={cart}
            className="bg-red-300 rounded-full px-4 py-2"
          ></CheckoutButton>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
