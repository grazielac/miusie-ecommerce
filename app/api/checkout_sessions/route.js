import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

export async function POST(req) {
 
  console.log(">>> API ROUTE HIT");
  try {
    const { items } = await req.json();
    const origin = req.headers.get("origin");

    console.log("Received items:", items);

    const amount_total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // create pending order in supabase
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        amount_total,
        currency: "eur",
        status: "pending",
      })
      .select()
      .single();

    if (error) throw error;

    // insert each item into order_items
    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_id: item.id,
      title: item.title,
      quantity: item.quantity,
      unit_amount: item.price,
      image: item.image,
    }));

    const { error: itemsErr } = await supabase
      .from("order_items")
      .insert(orderItems);

    if (itemsErr) throw itemsErr;

    // convert items to Stripe format
    const line_items = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.title,
          images: item.image
            ? [`${req.headers.get("origin")}${item.image}`]
            : [],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    }));

    // create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: { order_id: order.id }, // link Stripe session to order
    });

    console.log("Created session:", session.id);

    

    // update order with stripe session id
    await supabase
      .from("orders")
      .update({ stripe_session_id: session.id })
      .eq("id", order.id);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(">>> API ERROR:", err.message);
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
