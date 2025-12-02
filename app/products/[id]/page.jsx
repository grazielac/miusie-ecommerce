// dynamic page for each product
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
import getProducts from "@/lib/products/getProducts";

// DYNAMIC PAGE FOR EACH PRODUCT

async function ProductPage({ params }) {
  const { id } = await params;
  // const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  // get all products
  const products = await getProducts();

  const product = products.find((p) => String(p.id) === String(id));

  // const { addToCart } = useCart();

  console.log("postSlug:", id);
  console.log("params:", params);
  console.log(products);

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <>
      <div className="w-full bg-[#FBF7F6] p-10">
        <div className="w-full">
          <div className="sm:flex pt-8">
            <div className="pt-6 sm:pl-10 ">
              <Image
                src={product.image_url}
                alt={product.title}
                width={500}
                height={200}
                className="rounded-3xl sm:w-250"
              />
            </div>

            <div className="w-full sm:pl-14">
              <div className="pt-6 sm:pt-14">
                <h1 className="text-2xl sm:text-3xl pb-2">{product.title}</h1>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  €{(product.price / 100).toFixed(2)}
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
