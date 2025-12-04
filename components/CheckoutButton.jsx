"use client";

export default function CheckoutButton({ items }) {
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        console.error("Server returned error:", response.status);
        return;
      }

      const data = await response.json(); // parse JSON directly

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
    <div className="w-full mt-10">
      <div className="flex justify-center sm:justify-end lg:justify-end">
        <button
          className="text-sm lg:text- border py-2 px-34 lg:px-44 rounded-full cursor-pointer hover:bg-[#DF3D54] hover:text-white"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
