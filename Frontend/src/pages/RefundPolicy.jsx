import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-50 px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Refund Policy
        </h1>
        <p className="text-gray-600 mb-4">
          We value your trust and aim to provide the best services. This Refund
          Policy outlines when and how refunds are issued.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          1. Eligibility for Refunds
        </h2>
        <p className="text-gray-600 mb-4">
          Refunds are available only for eligible products or services as
          specified at the time of purchase.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          2. Refund Process
        </h2>
        <p className="text-gray-600 mb-4">
          To request a refund, please contact our support team within 7 days of
          purchase. Proof of transaction may be required.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          3. Non-Refundable Items
        </h2>
        <p className="text-gray-600 mb-4">
          Certain services like domain registration, SSL certificates, and setup
          fees are non-refundable.
        </p>

        <p className="text-gray-600 mt-6">
          By purchasing our services, you agree to this Refund Policy.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
