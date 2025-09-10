import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-50 px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect personal information such as name, email address,
          contact details, and usage data when you interact with our services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          2. How We Use Information
        </h2>
        <p className="text-gray-600 mb-4">
          Information is used to provide, improve, and personalize our services,
          process transactions, and communicate with you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          3. Data Protection
        </h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your information against
          unauthorized access, alteration, or disclosure.
        </p>

        <p className="text-gray-600 mt-6">
          By using our services, you consent to our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
