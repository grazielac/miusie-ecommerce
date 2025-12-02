"use client";

import { useEffect, useState } from "react";
import getProducts from "@/lib/products/getProducts";
import Image from "next/image";
import { useCart } from "@/context/CartProvider";
import Link from "next/link";
// rendering statUs data (products.map) and ProductCard

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log("PRODUCT DATA:", data);
        setProducts(data);
      })
      .catch((err) => {
        console.error("PRODUCT ERROR:", err);
      });
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 mt-10 mb-12 gap-12 px-10">
        {/* map through products */}

        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex flex-col justify-between"
          >
            <div key={product.id} className="flex flex-col justify-between">
              <div>
                <Image
                  src={product.image_url}
                  alt={product.title}
                  className="h-140 w-full object-cover"
                  width={200}
                  height={300}
                />
                <div className="flex flex-col justify-between items-center">
                  <h2 className="text-xl tracking-tight pt-10">{product.title}</h2>
                  {/* <p>{product.description}</p> */}
                  <p className="text-md">€{(product.price / 100).toFixed(2)}</p>
                  {product.stock === 0 && (
                    <p className="text-red-400 italic">Sold Out</p>
                  )}
                </div>
              </div>

              {/* <button
              onClick={() => addToCart(product)}
              className="mt-2 px-4 py-2 rounded"
            >
              ADD ME
            </button> */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Shop;
