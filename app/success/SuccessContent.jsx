"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartProvider";


function SuccessContent() {
      const params = useSearchParams();
      const sessionId = params.get("session_id");
      const [order, setOrder] = useState(null);
      const { cart, setCart } = useCart();
    
      useEffect(() => {
        if (sessionId) {
          fetch(`/api/orders/by-session/${sessionId}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
        }
      }, [sessionId]);

      // clear cart after successful payment
      useEffect(() => {
        setCart([]);
        localStorage.removeItem("cart");
      }, [setCart]);

  return (
    <div>
       <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✅</div>
                <h1>Payment Successful!</h1>
                <p>Thank you for your purchase. Your order has been confirmed.</p>
                {order?.id && (
                  <p className="text-sm text-gray-500 mb-6">Order ID: {order.id}</p>
                )}
                <Link
                  href="/"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
    </div>
  )
}

export default SuccessContent
