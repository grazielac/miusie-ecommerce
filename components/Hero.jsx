import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="relative lg:hidden h-full lg:w-full bg-amber-100">
        {/* MOBILE IMAGE */}
        <Image
          src="/hero.png"
          alt="hero image"
          width={400}
          height={200}
          className="object-contain mx-auto"
        ></Image>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden relative lg:block h-screen w-full">
         <Image
          src="/hero.png"
          alt="hero image"
          fill
          className="object-cover object-bottom"
        ></Image>
      </div>
    </div>
  );
}

export default Hero;
