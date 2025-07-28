import React from 'react';
import { 
  DollarSign, 
  Zap, 
  Settings, 
  Shield
} from 'lucide-react';

export default function ProxyFeatures() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 text-indigo-600" />,
      title: "Affordable Proxy",
      description: "Need lots of proxies within budget? Webshare Proxy is the perfect fit. Plans starting at ₹400/mo."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Fast Proxy Servers",
      description: "Proxy servers are optimized to handle fast traffic from all around the world. All proxy servers have dedicated Gigabit line to connect to internet."
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-600" />,
      title: "Fully Customizable",
      description: "Configure countries, bandwidth, threads and speed. Not sure? Start small and customize as you go. No commitments required."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Fully Private",
      description: "Your daily proxy activity is safe with us. Your private information is never shared with 3rd parties."
    }
  ];

  const pricingData = [
    { ram: "2 GB", price: "₹400/m", speed: "500 MBPS" },
    { ram: "4 GB", price: "₹500/m", speed: "1 GBPS" },
    { ram: "8 GB", price: "₹900/m", speed: "1 to 3 GBPS" },
    { ram: "16 GB", price: "₹1300/m", speed: "2 to 3 GBPS" },
    { ram: "32 GB", price: "₹3200/m", speed: "3 to 4 GBPS" },
    { ram: "64 GB", price: "₹4500/m", speed: "3 to 5 GBPS" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0e3c47] mb-4">
              Proxy Server Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How are the proxy servers different from{' '}
              <span className="text-indigo-600 font-medium">private proxy</span> and{' '}
              <span className="text-indigo-600 font-medium">dedicated proxy</span>?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-sky-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0e3c47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Table Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-100 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0e3c47] mb-4">
              Proxy Server Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan based on your RAM and speed requirements
            </p>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-sky-900 text-white">
              <div className="grid grid-cols-3 gap-4 px-6 py-4">
                <div className="font-semibold">RAM</div>
                <div className="font-semibold">Price</div>
                <div className="font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Speed
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {pricingData.map((plan, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-sky-50 transition-colors duration-150"
                >
                  <div className="font-medium text-[#0e3c47]">
                    {plan.ram}
                  </div>
                  <div className="font-semibold text-sky-700">
                    {plan.price}
                  </div>
                  <div className="text-gray-700">
                    {plan.speed}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Table Alternative */}
          <div className="md:hidden mt-8">
            <div className="space-y-4">
              {pricingData.map((plan, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[#0e3c47]">{plan.ram}</span>
                    <span className="font-semibold text-indigo-600">{plan.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Zap className="w-4 h-4 text-indigo-600" />
                    <span>{plan.speed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              All plans include unlimited bandwidth and 24/7 customer support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}