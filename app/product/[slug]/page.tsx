// dynamic page for each product

import Image from "next/image";
import { products } from "@/data/products";
import { useParams } from "next/navigation";

function ProductPage() {
    const { slug } = useParams() as { slug: string };
    const product = products.find((p) => p.slug === slug);

    console.log("postSlug:", slug);
    console.log("pproducts:", products);

    if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="w-full min-h-screen bg-red-200 p-10">
        <div className="w-full p-5 pb-6">
          <div>
            <div>
              <Image src={product.image} alt="title" className="rounded-lg" />
            </div>

            <div>
              <div>
                <h1 className="text-xl">{product.title}</h1>
                <h3 className="text-sm font-semibold">{product.price}</h3>
              </div>
              <div>
                <p className="text-sm">{product.description}</p>
              </div>

              {/* buttons */}
              <div>
                <button> + 1 </button>
                <button>Add to Cart</button>
              </div>
            </div>/
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
