import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-50 px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to our website. By accessing or using our services, you agree
          to be bound by the following terms and conditions. Please read them
          carefully.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          1. Use of Services
        </h2>
        <p className="text-gray-600 mb-4">
          You agree to use our services only for lawful purposes and in
          accordance with all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          2. Account Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">
          3. Limitations of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any indirect, incidental, or consequential
          damages resulting from the use of our services.
        </p>

        <p className="text-gray-600 mt-6">
          By continuing to use our services, you acknowledge that you have read
          and understood these terms.
        </p>
      </div>
    </div>
  );
};

export default Terms;
