import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="text-sm flex gap-4 justify-around border-t-gray-400 border-b-gray-400 border-t border-b pt-8 pb-7">
        <div className="w-full flex justify-around">
          {/* <Link href="/">Home</Link> */}
          {/* <Link href="/about">About</Link> */}
          {/* <Link href="/shop">Shop</Link> */}
          <Link href="/cart">Cart</Link>
        </div>

      </div>
    </>
  );
}

export default NavBar;
