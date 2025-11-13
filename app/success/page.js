"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
 
function SuccessPage() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your order has been confirmed.</p>
        {sessionId && (
            <p className="text-sm text-gray-500 mb-6">
                Order ID: {sessionId}
            </p>
        )}
        <Link href="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
        Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
