import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MailPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOS, setSelectedOS] = useState('linux');
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
        name: "Basic",
        price: "6,999",
        originalPrice: "13,998",
        savings: "50%",
        description: "Perfect for personal websites and blogs",
        features: ["4 CPU Core", "8 GB RAM", "500 GB SSD", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Professional",
        price: "7,999",
        originalPrice: "15,998",
        savings: "50%",
        description: "Ideal for growing businesses and portfolios",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "2 TB SATA", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: true,
        buttonStyle: "primary",
      },
      {
        name: "Business",
        price: "8,499",
        originalPrice: "16,998",
        savings: "50%",
        description: "Advanced features for professional websites",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "120GB NVMe + 2TB", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Enterprise",
        price: "11,000",
        originalPrice: "22,000",
        savings: "50%",
        description: "Maximum performance for high-traffic sites",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "500 GB HDD", "24(256) IP Addresses", "5 TB Bandwidth", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      }
    ],
    windows: [
      {
        name: "Basic",
        price: "7,499",
        originalPrice: "14,998",
        savings: "50%",
        description: "Perfect for personal Windows projects",
        features: ["4 CPU Core", "8 GB RAM", "500 GB SSD", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Professional",
        price: "8,499",
        originalPrice: "16,998",
        savings: "50%",
        description: "Best for growing Windows-based businesses",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "2 TB SATA", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: true,
        buttonStyle: "primary",
      },
      {
        name: "Business",
        price: "9,499",
        originalPrice: "18,998",
        savings: "50%",
        description: "Advanced Windows hosting",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "120GB NVMe + 2TB", "5 TB Bandwidth", "5 IP Address", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      },
      {
        name: "Enterprise",
        price: "12,000",
        originalPrice: "24,000",
        savings: "50%",
        description: "Maximum performance for Windows projects",
        features: ["8 CPU Core / 8 Threads", "16 GB RAM", "500 GB HDD", "24(256) IP Addresses", "5 TB Bandwidth", "99.9% Uptime Guarantee", "FREE Set Up!"],
        ctaText: "Buy Now",
        popular: false,
        buttonStyle: "primary",
      }
    ]
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id='Mailplans' className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect
            <span className="text-blue-600"> Email Marketing Plan </span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Get started with complete confidence.
          </p>
        </div>

        {/* Toggle OS */}
        <div className="mt-8 flex justify-center mb-12">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 shadow-md">
            <button
              onClick={() => setSelectedOS('linux')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedOS === 'linux' ? 'bg-blue-600 text-white shadow' : 'text-blue-600'
              }`}
            >
              Linux
            </button>
            <button
              onClick={() => setSelectedOS('windows')}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedOS === 'windows' ? 'bg-blue-600 text-white shadow' : 'text-blue-600'
              }`}
            >
              Windows
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans[selectedOS].map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${plan.popular ? 'ring-4 ring-green-500 ring-opacity-80' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
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
                  <h3 className="text-2xl font-bold text-[#0e3c47] mb-2">{plan.name}</h3>
                  <p className="text-[#0e3c47da] text-sm mb-4">{plan.description}</p>
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 text-lg line-through">₹{plan.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Save {plan.savings}</span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#0e3c47]">₹{plan.price}</span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBuyNow(plan)}
                  className={`w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform ${plan.buttonStyle === 'primary' ? 'bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105' : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105'}`}
                >
                  {plan.ctaText}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Renews at ₹{plan.originalPrice}/mo after first year. Cancel anytime.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MailPlans;
