"use client";
import { useCart } from "../context/CartProvider";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";

function CartDisplay() {
  const { cart, removeFromCart } = useCart();
  const { subtractItem, plusItem } = useCart();

  console.log(cart);

  //calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const subtotalEuro = subtotal / 100;

  return (
    <div>
      <div className="p-10">
        <h1 className="text-4xl mb-4 tracking-tight">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            <hr />
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                <div className="flex gap-8 pl-8 pt-8">
                  <div>
                    {item.image_url && (
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={200}
                        height={100}
                        className="rounded-md"
                      />
                    )}
                  </div>
                  <div className="flex justify-between items-center w-full p-2 gap-4">
                    <div className=" p-2 w-60">
                      <div className="font-bold">{item.title}</div>
                    </div>
                    <div className="flex items-center justify-center w-16 p-2">
                      {/* MINUS */}
                      <button
                        onClick={() => subtractItem(item)}
                        className="p-2 hover:bg-red-100 rounded-full"
                      >
                        <HiOutlineMinus size={20} className="cursor-pointer" />
                      </button>

                      <div className="p-4">{item.quantity}</div>

                      {/* PLUS */}
                      <button
                        onClick={() => plusItem(item)}
                        className="p-2 hover:bg-red-100 rounded-full"
                      >
                        <HiOutlinePlus size={20} className="cursor-pointer" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center w-20 p-2">
                      <span>€{(item.price / 100) * item.quantity}</span>
                    </div>

                    <div className="p-2">
                      <div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 hover:bg-red-100 rounded-full"
                        >
                          <HiOutlineXMark
                            size={24}
                            className="cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <hr className="mt-10" />

        <div className="flex justify-end ">
          <div className="mt-10 flex gap-75">
            <div className="text-md">Subtotal</div>
            <div>€{subtotalEuro}</div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CheckoutButton
            items={cart}
            className="rounded-full px-4 py-2"
          ></CheckoutButton>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
