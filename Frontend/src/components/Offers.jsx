import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";

export default function Offers() {
  const [selectedOS, setSelectedOS] = useState("linux");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = (plan) => {
    navigate("/billing", { state: { plan } });
  };

  const plans = {
    linux: [
      {
        name: "Shared Hosting",
        subtitle: "STARTING FROM",
        price: "199",
        features: [
          "1 Website",
          "1 Cpanel account",
          "2 GB Storage",
          "5GB Bandwidth",
          "5 Email Accounts",
          "3 Sub Domains",
          "1 Mysql Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Reseller Hosting",
        subtitle: "STARTING FROM",
        price: "699",
        features: [
          "Unlimited Websites",
          "Unlimited Cpanel Accounts",
          "25 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Email Accounts",
          "Unlimited Sub Domains",
          "Unlimited Mysql Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Cloud VPS",
        subtitle: "Best for Entrepreneurs",
        price: "999",
        features: [
          "2 CPU Cores",
          "2 GB RAM",
          "30 GB Hard Disk-SSD",
          "1TB Bandwidth",
          "1 IP Addresses",
          "Free CentOS WP-Cpanel",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
        bestValue: true,
      },
      {
        name: "Forex Server",
        subtitle: "STARTING FROM",
        price: "1499",
        features: [
          "2 CPU Cores",
          "4 GB RAM",
          "50 GB Hard Disk-SSD",
          "Intel Core i5-3470 4 Cores",
          "8 GB DDR5",
          "1 GBPS Bandwidth",
          "1 IP Address",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
      },
    ],
    windows: [
      {
        name: "Shared Hosting",
        subtitle: "STARTING FROM",
        price: "299",
        features: [
          "1 Website",
          "1 Plesk account",
          "3 GB Storage",
          "10GB Bandwidth",
          "10 Email Accounts",
          "5 Sub Domains",
          "1 MSSQL Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Reseller Hosting",
        subtitle: "STARTING FROM",
        price: "899",
        features: [
          "Unlimited Websites",
          "Unlimited Plesk Accounts",
          "35 GB Storage",
          "Unlimited Bandwidth",
          "Unlimited Email Accounts",
          "Unlimited Sub Domains",
          "Unlimited MSSQL Database",
        ],
        buttonStyle: "primary",
      },
      {
        name: "Cloud VPS",
        subtitle: "Best for Entrepreneurs",
        price: "1299",
        features: [
          "2 CPU Cores",
          "3 GB RAM",
          "40 GB Hard Disk-SSD",
          "1.5TB Bandwidth",
          "1 IP Addresses",
          "Free Windows Server",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
        bestValue: true,
      },
      {
        name: "Forex Server",
        subtitle: "STARTING FROM",
        price: "1899",
        features: [
          "4 CPU Cores",
          "6 GB RAM",
          "75 GB Hard Disk-SSD",
          "Intel Core i7-4770 4 Cores",
          "12 GB DDR5",
          "1 GBPS Bandwidth",
          "2 IP Addresses",
          "99.9% Uptime Guarantee",
        ],
        buttonStyle: "primary",
      },
    ],
  };

  const currentPlans = plans[selectedOS];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Most Popular <span className="text-blue-600">Hosting Plans</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed mb-8">
            Cheap and best Server Hosting provider in India. Get started with
            confidence!
          </p>

          {/* OS Selection Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full shadow-lg p-1 border border-blue-200">
              <div className="flex">
                <button
                  onClick={() => setSelectedOS("linux")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
                    selectedOS === "linux"
                      ? "bg-blue-600 text-white shadow"
                      : "text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  Linux
                </button>
                <button
                  onClick={() => setSelectedOS("windows")}
                  className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${
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
          {currentPlans.map((plan, index) => (
            <div
              key={`${selectedOS}-${plan.name}`}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.bestValue ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.bestValue && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
                    Best value
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-[#0e3c47] mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#0e3c47de] mb-4">{plan.subtitle}</p>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0b2d35]">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-gray-700"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        {feature}
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
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
