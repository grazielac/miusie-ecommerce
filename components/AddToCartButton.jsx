"use client";
import { useCart } from "@/context/CartProvider";
import { HiOutlineMinus } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";

function AddToCartButton({ product, quantity }) {
  const { addToCart } = useCart();
  const [onquantity, setQuantity] = useState(1);

  function minusItem() {
    setQuantity((product) => product - 1);
  }

  function addItem() {
    setQuantity((product) => product + 1);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-8 sm:justify-evenly pb-8 sm:mt-10 sm:w-3/5">
        <div className="flex flex-col sm:flex-row sm:gap-4 lg:gap-18 gap-2 items-center">

          {/* ADD/MINUS ITEM */}
          <div className="flex items-center justify-center w-34 text-sm px-8 border sm:px-12 sm:py-2 lg:px-16 rounded-full">
            {/* minues */}
            <button
              onClick={minusItem}
              className="p-2 hover:bg-red-100 rounded-full"
            >
              <HiOutlineMinus size={20} className="cursor-pointer" />
            </button>

            <div className="px-2">{onquantity}</div>

            {/* add */}
            <button
              onClick={addItem}
              className="p-2 hover:bg-red-100 rounded-full"
            >
              <HiOutlinePlus size={20} className="cursor-pointer" />
            </button>
          </div>

          <button
            onClick={() => addToCart(product, onquantity)}
            className="bg-[#820C18] text-white text-sm w-38 px-8 py-3 sm:px-12 sm:py-2  lg:px-12 rounded-full cursor-pointer hover:bg-red-200 hover:text-[#4C3A2C]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartButton;
