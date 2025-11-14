// webhook handler:
import Stripe from "stripe";
import { Response } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_SERVICE_ROLE
);

// recieve the webhook event from stripe
export default async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    // verify signature
    const event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    return new Response("Webhook signature verification failed", {
      status: 400,
    });
  }
}

