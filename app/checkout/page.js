"use client";

function CheckoutPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const { url } = await res.json();
    window.location.href = url; // redirects to stripe
  };

  return <button onClick={handleCheckout}>Checkout</button>;
}

export default CheckoutPage;
