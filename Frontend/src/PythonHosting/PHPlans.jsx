import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PHPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState("linux");
  const navigate = useNavigate(); // ✅ Fix: Added navigate hook

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = (plan) => {
    navigate("/billing", { state: { plan } });
  };

  // ✅ Plans Data
  const plans = {
    linux: [
      {
        name: "Basic",
        price: "180",
        originalPrice: "360",
        savings: "50%",
        description: "Perfect for personal websites and blogs",
        features: [
          "1 Website",
          "10 GB SSD Storage",
          "100 GB Bandwidth",
          "Free SSL Certificate",
          "24/7 Support",
          "1-Click WordPress Install",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Professional",
        price: "269",
        originalPrice: "538",
        savings: "50%",
        description: "Ideal for growing businesses and portfolios",
        features: [
          "5 Websites",
          "50 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Priority Support",
          "Advanced Security Features",
        ],
        ctaText: "Buy Now",
        popular: true,
        buttonStyle: "primary",
      },
      {
        name: "Business",
        price: "389",
        originalPrice: "778",
        savings: "50%",
        description: "Advanced features for professional websites",
        features: [
          "25 Websites",
          "100 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Premium Support",
          "Daily Backups",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Enterprise",
        price: "589",
        originalPrice: "1178",
        savings: "50%",
        description: "Maximum performance for high-traffic sites",
        features: [
          "Unlimited Websites",
          "200 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Dedicated Support",
          "Advanced Analytics",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
    ],
    windows: [
      {
        name: "Basic",
        price: "220",
        originalPrice: "440",
        savings: "50%",
        description: "Best for beginners using Windows hosting",
        features: [
          "1 Website",
          "15 GB SSD Storage",
          "200 GB Bandwidth",
          "Free SSL Certificate",
          "24/7 Support",
          "1-Click .NET Install",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Professional",
        price: "329",
        originalPrice: "658",
        savings: "50%",
        description: "Windows hosting for small businesses",
        features: [
          "5 Websites",
          "60 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Priority Support",
          "ASP.NET & MSSQL Support",
        ],
        ctaText: "Buy Now",
        popular: true,
        buttonStyle: "primary",
      },
      {
        name: "Business",
        price: "469",
        originalPrice: "938",
        savings: "50%",
        description: "Advanced Windows hosting features",
        features: [
          "25 Websites",
          "120 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Premium Support",
          "Daily Backups",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Enterprise",
        price: "699",
        originalPrice: "1398",
        savings: "50%",
        description: "High-performance hosting for enterprises",
        features: [
          "Unlimited Websites",
          "250 GB SSD Storage",
          "Unlimited Bandwidth",
          "Free SSL Certificate",
          "Dedicated Support",
          "Advanced Analytics",
        ],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
    ],
  };

  const activePlans = plans[selectedOS];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          id="PHPlans"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect
            <span className="text-blue-600"> Python Hosting Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Get started with complete confidence. Our 30-day money-back
            guarantee means it's risk-free.
          </p>

          {/* OS Toggle */}
          <div className="flex justify-center mt-6">
            <div className="bg-gray-100 rounded-full p-1 shadow-lg">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    selectedOS === "windows"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Windows
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activePlans.map((plan, index) => (
            <div
              key={`${selectedOS}-${plan.name}`}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.popular ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">
                    {plan.description}
                  </p>

                  {/* Pricing */}
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

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBuyNow(plan)}
                  className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${
                    plan.buttonStyle === "primary"
                      ? "bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                  }`}
                >
                  {plan.ctaText}
                </button>

                {/* Renewal Notice */}
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

export default PHPlans;
