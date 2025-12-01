import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div>
      <Image src="/logo.png" alt="image" width={200} height={200}></Image>
      <ProductCard />
    </div>
  );
}

export default Home;
