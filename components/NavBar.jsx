"use client"
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Forum } from "next/font/google";
import { useCart } from "@/context/CartProvider";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

function NavBar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="text-sm flex gap-4 justify-around pt-4 pb-4">
        <div className="w-full flex justify-between items-center">
          {/* LEFT LINKS */}
          <div className="flex gap-8 ml-12">
            <Link href="/" className={`${forum.className} text-lg`}>
              Home
            </Link>
            {/* <Link href="/about" className="hover:underline">
              About
            </Link> */}
            <Link href="/shop" className={`${forum.className} text-lg`}>
              Shop
            </Link>
          </div>
          {/* LOGO */}
          <div>
            <Image
              href="#"
              src="/logo.png"
              alt="logo"
              width={120}
              height={80}
              className="cursor-pointer"
            ></Image>
          </div>
          {/* RIGHT LINKS*/}
          <div className="flex gap-8 mr-12">
            <CiSearch size={22} className="cursor-pointer" />
            <CiHeart size={22} className="cursor-pointer" />
            {/* <RxPerson size={22} /> */}
            <Link href="/cart">
              <CiShoppingCart size={22} className="cursor-pointer" />
              {totalItems > 0 && (
                <span className="absolute top-4 right-10 bg-red-800 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
