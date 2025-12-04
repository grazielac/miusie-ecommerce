import "./globals.css";
import CartProvider from "@/context/CartProvider";
import NavBar from "@/components/NavBar";
import { Poppins, Forum } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const parfumerie = localFont({
  src: "../public/fonts/Parfumerie.otf",
  weight: "400",
  style: "normal",
  variable: "--font-parfumerie"
})

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "Miusie",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${forum.variable} antialiased`}
      >
        <CartProvider>
          <NavBar />

          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
