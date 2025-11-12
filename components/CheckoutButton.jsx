"use client"

export default function CheckoutButton({ items }) {
    const handleCheckout = async () => {
        try {
            const response = await fetch("/api/checkput_sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items }),
            });

        const { url } = await response.json();

        if (url) {
            window.location.href = url; // redirect to stripe checkout
        }
        } catch (error) {
            console.error("Checkout error:", error);
        }
    };

    return (
        <button onClick={handleCheckout}>
            Checkout
        </button>
    );
}