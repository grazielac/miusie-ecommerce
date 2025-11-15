import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-amber-100">
        <div className="w-full gap-6">
          <ProductList />
        </div>
      </div>
    </>
  );
}
