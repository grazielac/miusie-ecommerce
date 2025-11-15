"use client";
import { useCart } from "@/context/CartProvider";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();      

  return (
    <div>
      <div className=" flex justify-center-safe gap-8 sm:justify-evenly pb-8 sm:mt-10 sm:w-3/5">
      
        <button className="border-red-300 border py-2 px-14 rounded-full cursor-pointer">
          + 1
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#820C18] text-white py-2 px-14 rounded-full cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddToCartButton;


