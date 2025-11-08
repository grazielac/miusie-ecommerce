import { products } from "@/data/products";
import ProductCard from "./ProductCard";

function AddToCart() {
  return (
    <>
      <div>
        <h1>YOUR BAG</h1>
      </div>

      <div className="flex justify-around pb-2">
        <h3>Products</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>Delete</h3>
      </div>

      <div className="border-t-2 border-gray-400"></div>

      {/* PRODUCTS */}
      <div></div>
    </>
  );
}

export default AddToCart;
