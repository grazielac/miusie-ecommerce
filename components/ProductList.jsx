"use client";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
      <div className="w-full h-screen bg-amber-100">
        {/* all products */}
        <div className=" bg-red-200 w-full p-6">
          <h2 className="text-xl">MUGS</h2>

          <div className="grid grid-cols-4 gap-6">
            {/* map through products */}
            {products.map((product) => (
              <div key={product.id} className="mb-8">
                <ProductCard product={product} />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
