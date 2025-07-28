// src/pages/Success.jsx
import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. We’ve emailed you a receipt and will be in touch shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;