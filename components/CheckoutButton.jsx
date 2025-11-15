"use client";

export default function CheckoutButton({ items }) {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const text = await response.text();
      console.log("API Response:", text);

      let data;
      try { 
        data = JSON.parse(text);
      } catch {
        console.error("Server did not return JSON");
        return;
      }

      if (data.url) {
        window.location.href = data.url; // redirect to stripe checkout
      } else {
        console.error("No URL in response:", data);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      
    }
  };

  return (
    <div>
      <button
        className="border py-2 px-4 rounded-full bg-red-400 cursor-pointer hover:bg-amber-200"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
}
