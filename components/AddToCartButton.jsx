"use client";
import { useCart } from "@/context/CartProvider";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();      

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-8 sm:justify-evenly pb-8 sm:mt-10 sm:w-3/5">
      
        <button className="border-red-300 text-sm border py-2 px-12 rounded-full cursor-pointer">
          -  1  +
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#820C18] text-white text-sm py-2 px-10 rounded-full cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCartButton;


