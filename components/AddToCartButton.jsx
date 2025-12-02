"use client";
import { useCart } from "@/context/CartProvider";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-8 sm:justify-evenly pb-8 sm:mt-10 sm:w-3/5">

        <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 items-center">
          <button className="border-red-300 border text-sm py-2 px-14 sm:px-12 lg:py-2 lg:px-16 rounded-full cursor-pointer">
            - 1 +
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-[#820C18] text-white text-sm py-2 px-8 sm:px-12 lg:py-2 lg:px-16 rounded-full cursor-pointer hover:bg-red-200 hover:text-[#4C3A2C]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToCartButton;
