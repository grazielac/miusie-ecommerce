"use client";
import Link from "next/link";
import Image from "next/image";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Forum } from "next/font/google";
import CartBadge from "@/components/CartBadge";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* MOBILE NAV */}
      <div className="bg-transparent absolute z-50 py-4 w-full flex flex-row-reverse lg:hidden justify-between items-center px-8">
        {/* CART */}
        <Link href="/cart">
          <div className="relative">
            <CiShoppingCart size={26} className="cursor-pointer" />
            <CartBadge />
          </div>
        </Link>
        {/* LOGO */}
        <Image
          href="/"
          src="/logo.png"
          alt="logo"
          width={118}
          height={80}
          className="cursor-pointer"
        ></Image>

        <HiOutlineMenuAlt4
          size={26}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* MOBILE MENU  */}
      {isOpen && (
        <div className="bg-red-50 fixed inset-0 z-50 p-6 flex flex-col gap-4">
          {/* close button */}
          <IoCloseOutline size={36} onClick={() => setIsOpen(false)} />

          {/* menu links */}
          <div className="flex-1 flex justify-center items-center">
            <div className="text-2xl flex flex-col gap-6 justify-center items-center">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <p className={`${forum.className} text-3xl`}>Home</p>
              </Link>
              <Link href="/shop" onClick={() => setIsOpen(false)}>
                <p className={`${forum.className} text-3xl`}>Shop</p>
              </Link>
              <Link href="/newsletter" onClick={() => setIsOpen(false)}>
                <p className={`${forum.className} text-3xl`}>Join the List</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP NAV */}
      <div>
        <div className="py-4 w-full hidden lg:flex lg:justify-between lg:items-center">
          {/* LEFT LINKS */}
          <div className="flex gap-4 ml-12">
            <Link href="/">
              <p className={`${forum.className} text-lg`}>Home</p>
            </Link>

            <Link href="/shop">
              <p className={`${forum.className} text-lg`}>Shop</p>
            </Link>
          </div>

          {/* LOGO */}
          <div>
            <Image
              href="/"
              src="/logo.png"
              alt="logo"
              width={142}
              height={80}
              className="cursor-pointer"
            ></Image>
          </div>

          {/* RIGHT LINKS*/}
          <div className="flex gap-4 mr-12">
            {/* <CiSearch size={22} className="cursor-pointer" /> */}
            {/* <CiHeart size={22} className="cursor-pointer" /> */}
            {/* <RxPerson size={22} /> */}
            <Link href="/newsletter">
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
