import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import GoogleImg from "../assets/googleall01.png";
import { useNavigate } from "react-router-dom";

const GooglePlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState("linux");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = (plan) => {
    navigate("/billing", { state: { plan } });
  };

  // ✅ Linux Plans
  const linuxPlans = [
    {
      name: "Basic",
      price: "163",
      originalPrice: "326",
      savings: "50%",
      description: "Perfect for personal websites and blogs",
      features: [
        "Custom and secure business email",
        "100 participant video meetings",
        "30 GB pooled storage per user",
        "Security and management controls",
        "Standard support",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
    {
      name: "Professional",
      price: "580",
      originalPrice: "1,160",
      savings: "50%",
      description: "Ideal for growing businesses and portfolios",
      features: [
        "Custom and secure business email",
        "150 participant video meetings + Recording",
        "2 TB pooled storage per user",
        "Security and management controls",
        "Standard support (paid upgrade to enhanced support)",
      ],
      ctaText: "Buy Now",
      popular: true,
      buttonStyle: "primary",
    },
    {
      name: "Business",
      price: "999",
      originalPrice: "1,998",
      savings: "50%",
      description: "Advanced features for professional websites",
      features: [
        "Custom and secure business email + ediscovery, retention",
        "500 participant video meetings + recording, attendance tracking",
        "5 TB pooled storage per user",
        "Enhanced security and management controls, including Vault",
        "Standard support (paid upgrade to enhanced support)",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
    {
      name: "Enterprise",
      price: "1,499",
      originalPrice: "2,998",
      savings: "50%",
      description: "Maximum performance for high-traffic sites",
      features: [
        "Custom and secure business email + eDiscovery, retention, S/MIME encryption",
        "1,000 participant video meetings + live streaming",
        "5 TB pooled storage per user (request more if needed)",
        "Advanced security, management and compliance controls",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
  ];

  // ✅ Windows Plans (example - you can customize)
  const windowsPlans = [
    {
      name: "Basic",
      price: "199",
      originalPrice: "399",
      savings: "50%",
      description: "Starter Windows hosting plan",
      features: [
        "Business email support",
        "100 participant MS Teams meetings",
        "50 GB storage per user",
        "Standard support",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
    {
      name: "Professional",
      price: "650",
      originalPrice: "1,300",
      savings: "50%",
      description: "Best for SMBs using Windows stack",
      features: [
        "Business email & MS Exchange",
        "250 participant Teams meetings",
        "2 TB storage per user",
        "Enhanced Windows security",
      ],
      ctaText: "Buy Now",
      popular: true,
      buttonStyle: "primary",
    },
    {
      name: "Business",
      price: "1,099",
      originalPrice: "2,199",
      savings: "50%",
      description: "Full suite with Windows integration",
      features: [
        "Outlook & Teams advanced features",
        "500 participant Teams meetings",
        "5 TB storage per user",
        "Advanced Windows security controls",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
    {
      name: "Enterprise",
      price: "1,699",
      originalPrice: "3,399",
      savings: "50%",
      description: "Enterprise-ready Windows plan",
      features: [
        "Enterprise MS Exchange & Teams",
        "1,000 participant meetings",
        "Unlimited storage (on request)",
        "Enterprise-grade compliance",
      ],
      ctaText: "Buy Now",
      popular: false,
      buttonStyle: "primary",
    },
  ];

  const plans = selectedOS === "linux" ? linuxPlans : windowsPlans;

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          id="Googleplans"
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center items-center flex-col w-[350px] lg:w-[550px] m-auto mb-6">
            <img src={GoogleImg} alt="google suits" />
          </div>

          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect
            <span className="text-blue-600"> Microsoft 365 Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>

          {/* ✅ Toggle OS */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center bg-gray-100 rounded-full p-1 shadow-md">
              <button
                onClick={() => setSelectedOS("linux")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedOS === "linux"
                    ? "bg-blue-600 text-white shadow"
                    : "text-blue-600"
                }`}
              >
                Linux
              </button>
              <button
                onClick={() => setSelectedOS("windows")}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedOS === "windows"
                    ? "bg-blue-600 text-white shadow"
                    : "text-blue-600"
                }`}
              >
                Windows
              </button>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.popular
                  ? "ring-4 ring-green-500 ring-opacity-80"
                  : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 text-lg line-through">
                        ₹{plan.originalPrice}
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                        Save {plan.savings}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#0e3c47]">
                        ₹{plan.price}
                      </span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex-grow" />

                <button
                  onClick={() => handleBuyNow(plan)}
                  className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ${
                    plan.buttonStyle === "primary"
                      ? "bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  {plan.ctaText}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Renews at ₹{plan.originalPrice}/mo after first year. Cancel
                  anytime.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GooglePlans;
