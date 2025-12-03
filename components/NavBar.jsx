"use client";
import Link from "next/link";
import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Forum } from "next/font/google";
import CartBadge from "@/components/CartBadge"

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

function NavBar() {


  return (
    <>
      <div className="text-sm flex gap-4 justify-around pt-4 pb-4">
        <div className="w-full flex justify-between items-center">
          {/* LEFT LINKS */}
          <div className="flex gap-8 ml-12">
            <Link href="/">
              <p className={`${forum.className} text-lg`}>Home</p>
            </Link>
            {/* <Link href="/about" className="hover:underline">
              About
            </Link> */}
            <Link href="/shop">
              <p className={`${forum.className} text-lg`}>Shop</p>
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
            {/* <CiSearch size={22} className="cursor-pointer" /> */}
            {/* <CiHeart size={22} className="cursor-pointer" /> */}
            {/* <RxPerson size={22} /> */}
            <Link href="/shop">
              <p className={`${forum.className} text-lg`}>Join the list</p>
            </Link>

            <Link href="/cart">
              <div className="relative">
                <CiShoppingCart size={26} className="cursor-pointer" />
                <CartBadge />
                
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
