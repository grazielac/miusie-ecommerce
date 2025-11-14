import getStripe from "../utils/getStripe";

const handleSubmit = async (e) => {
    e.preventDefault();

    const checkoutSession = await res.json("/api/checkout_sessions",
        { amount: input.unitAmount },
    );

    if ((checkoutSession).statusCode === 500) {
        console.error((checkoutSession).message);
        return;
    }

    const stripe = await getStripe();
    const { error } =await stripe.redirectToCheckout({ sessionId: checkoutSession.id,
    });
    console.warn(error.message);
};
