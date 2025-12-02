import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function NavBar() {
  return (
    <>
      <div className=" bg-white shadow text-sm flex gap-4 justify-around pt-4 pb-4">
        <div className="w-full flex justify-between items-center">
          {/* LEFT LINKS */}
          <div className="flex gap-8 ml-12">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {/* <Link href="/about" className="hover:underline">
              About
            </Link> */}
            <Link href="/shop" className="hover:underline">
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
