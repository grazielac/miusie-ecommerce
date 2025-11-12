"use client";

import Link from "next/link";

function CancelPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">X</div>
          <h1 className="text-3xl font-bold mb-4">Payment Cancelled</h1>
          <p className="text-gray-600 mb-6">
            Your payment was cancelled. No charged were made.
          </p>
          <Link
            href="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CancelPage;
