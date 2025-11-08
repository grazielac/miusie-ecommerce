import { NextResponse } from "next/server";
import Stripe from "stripe";
import { CartItem } from "@/context/CartProvider";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const { items } = await req.json();

  const line_items = items.map((item) => ({
    price_data: {
      currency: "gbp",
      product_data: {
        name: item.title,
        images: item.image,
      },
      quantity: item.quantity,
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${req.headers.get("origin")}/success`,
    cancel_url: `${req.headers.get("origin")}/?cancel`,
  });

  return NextResponse.json({ url: session.url });
}
