import { Forum } from "next/font/google";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import Image from "next/image";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

function Footer() {
  return (
    <div className="bg-amber-100 bottom-0 lg:pl-10 lg:mp-10 w-full pt-10">
      <div className="flex w-full justify-around">
        {/* LINKS */}
        <div>
          <h1 className="font-semibold mb-2">INFO</h1>
          <ul>
            <li>
              <a href="/about" className={`${forum.className} text-md`}>
                About
              </a>
            </li>
            <li>
              <a href="/shipping" className={`${forum.className} text-md`}>
                Shipping & Return
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-semibold mb-2">CONNECT</h1>
          <ul>
            <li>
              <a href="/newsletter" className={`${forum.className} text-md`}>
                Newsletter
              </a>
            </li>
            <li>
              <a href="/contact" className={`${forum.className} text-md`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* SOCIALS */}
      <div className="flex justify-between items-center p-6 lg:p-10">
        <div className="flex gap-2 lg:gap-8">
          <IoLogoInstagram size={24} />
          <IoLogoTiktok size={22} />
          <IoLogoYoutube size={22} />
        </div>

        {/* LOGO */}
        <div className="w-22">
          <Image
            href="/"
            src="/logo.png"
            alt="logo"
            width={100}
            height={80}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Footer;
