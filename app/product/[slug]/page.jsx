// dynamic page for each product
"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";


// DYNAMIC PAGE FOR EACH PRODUCT 

function ProductPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const product = products.find((p) => p.slug === slug);


  // const { addToCart } = useCart();

  console.log("postSlug:", slug);

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="w-full bg-[#FBF7F6] p-10">
        <div className="w-full">
          <div className="sm:flex pt-8">
            <div className="pt-6 sm:pl-10 ">
              <Image
                src={product.image}
                alt="title"
                width={500}
                height={200}
                className="rounded-3xl sm:w-250"
              />
            </div>

            <div className="w-full sm:pl-14">
              <div className="pt-6 sm:pt-14">
                <h1 className="text-2xl sm:text-3xl pb-2">{product.title}</h1>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {product.price}
                </h2>
              </div>
              <div>
                <p className="py-10 text-sm">{product.description}</p>
              </div>

              {/* buttons */}
              <AddToCartButton product={product} />
              {/* <div className=" flex justify-center-safe gap-8 sm:justify-evenly pb-8 sm:mt-10 sm:w-3/5">
                  <button className="border-red-300 border py-2 px-14 rounded-full cursor-pointer">
                    + 1
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#820C18] text-white py-2 px-14 rounded-full cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
