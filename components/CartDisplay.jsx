"use client";
import { useCart } from "../context/CartProvider";
import Image from "next/image";
import CheckoutButton from "./CheckoutButton";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";
import { Forum } from "next/font/google";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

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
      <div className="p-6 lg:p-10">
        <h1 className="text-4xl mb-4 tracking-tight">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            <hr />
            {cart.map((item) => (
              // EACH PRODUCT
              <li key={item.id} className="mb-2 mt-2">
                <div className="flex flex-col-2 lg:flex-row gap-2 lg:gap-4 pt-4 justify-center items-center">
                  <div className="shrink-0 w-20 sm:w-32 lg:w-48 pl-2 ">
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

                  {/* TITLE + ADD/MINUS */}
                  <div className="sm:flex-row flex justify-between items-center w-full p-2 gap-4">
                    <div className="p-2 w-40 lg:w-1/2 flex justify-between items-center flex-col gap-10 lg:flex-row">
                      <div className={`${forum.className} text-lg`}>
                        {item.title}
                      </div>
                      <div className="flex items-center lg:p-2">
                        {/* MINUS */}
                        <button
                          onClick={() => subtractItem(item)}
                          className="p-2 hover:bg-red-100 rounded-full"
                        >
                          <HiOutlineMinus
                            size={20}
                            className="cursor-pointer"
                          />
                        </button>

                        <div className={`${forum.className} text-lg p-2`}>{item.quantity}</div>

                        {/* PLUS */}
                        <button
                          onClick={() => plusItem(item)}
                          className="p-2 hover:bg-red-100 rounded-full"
                        >
                          <HiOutlinePlus size={20} className="cursor-pointer" />
                        </button>
                      </div>
                    </div>

                    {/* PRICE + X */}
                    <div className="w-1/2 flex flex-col gap-16 justify-between items-center lg:flex-row-reverse lg:justify-between lg:ml-10 lg:items-center">
                      <div className="lg:self-auto">
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

                      <div className="flex items-center justify-center w-20 p-2">
                        <span className={`${forum.className} text-xl`}>€{(item.price / 100) * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <hr className="mt-10" />

        <div className="flex justify-between">
          <div className="w-full mt-10 flex justify-between items-center lg:justify-end lg:gap-84">
            <div className={`${forum.className} text-md`}>Subtotal</div>
            <div className={`${forum.className} text-xl`}>€{subtotalEuro}</div>
          </div>
        </div>

        <CheckoutButton items={cart} />
      </div>
    </div>
  );
}

export default CartDisplay;
