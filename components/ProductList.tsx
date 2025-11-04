import { products } from "@/data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
      <div className="w-full h-screen bg-amber-100">
        <div>
          <h2 className="text-xl">MUGS</h2>
        </div>

        {/* all products */}
        <div className="w-full bg-red-200 h-screen">
          {/* map through products */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              slug={product.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
