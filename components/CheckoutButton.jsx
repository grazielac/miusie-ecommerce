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
    <div className="w-full mt-10">
      <div className="flex justify-end">
      <button
        className="border py-2 px-44 rounded-full cursor-pointer hover:bg-[#DF3D54] hover:text-white"
        onClick={handleCheckout}
      >
        Checkout
      </button>
      </div>
    </div>
  );
}
