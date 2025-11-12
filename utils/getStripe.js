// stripe/stripe-js - browser / client-side for checkout redirect
import { loadStripe } from "@stripe/stripe-js";

// lazy-loads, loads only once
let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
}

export default getStripe;