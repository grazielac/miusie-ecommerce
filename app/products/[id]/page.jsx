
// dynamic page for each product
import Image from "next/image";
import getProducts from "@/lib/products/getProducts";
import ProductActions from "@/components/ProductActions"


// DYNAMIC PAGE FOR EACH PRODUCT

async function ProductPage({ params }) {
  const { id } = params;
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
      <div className="w-full p-10">
        <div className="w-full">
          <div className="sm:flex pt-8">
            <div className="w-full mr-14">
              <Image
                src={product.image_url}
                alt={product.title}
                width={500}
                height={200}
                className="rounded-2xl sm:w-250"
              />
            </div>

            <div className="w-full">
              <div className="pt-8">
                <h1 className="text-4xl lg:text-5xl tracking-tight pb-4">{product.title}</h1>
                <h2 className="text-xl sm:text-2xl">
                  €{(product.price / 100).toFixed(2)}
                </h2>
              </div>

              {/* DESC */}
              <div className="pt-12 mb-12">
                <h3>Description</h3>
                <hr />
                <p className="pt-4 text-sm ">{product.description}</p>
              </div>

              {/* BUTTONS */}
              {/* client-only */}
              <ProductActions product={product} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
