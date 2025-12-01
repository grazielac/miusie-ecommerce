"use client";

import { useEffect, useState } from "react";
import getProducts from "@/lib/products/getProducts";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import { supabaseClient } from "@/lib/supabaseClient";

// rendering statis data (products.map) and ProductCard

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div id="shop" className="grid grid-cols-3 gap-4">
        {/* map through products */}
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <Image
              src={product.image_url}
              alt={product.title}
              className="h-40 w-full object-cover"
              width={200}
              height={800}
            />
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p>€{(product.price / 100).toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 rounded"
            >ADD ME</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;
