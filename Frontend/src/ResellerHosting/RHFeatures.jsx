import React from "react";
import { Server, Users, CreditCard, Gauge, Settings, Award } from 'lucide-react';


export default function RHFeatures() {
  const features = [
    {
      icon: <Server className="w-10 h-10 text-green-600" />,
      title: "White Label Hosting",
      description: "Brand your hosting service with your own company name, logo, and custom control panel interface."
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Unlimited Client Accounts",
      description: "Create and manage unlimited hosting accounts for your clients with full administrative control."
    },
    {
      icon: <CreditCard className="w-10 h-10 text-green-600" />,
      title: "Integrated Billing System",
      description: "Streamline your business with built-in WHMCS integration for automated invoicing and payments."
    },
    {
      icon: <Gauge className="w-10 h-10 text-green-600" />,
      title: "Resource Monitoring",
      description: "Track bandwidth, disk usage, and performance metrics across all your client accounts in real-time."
    },
    {
      icon: <Settings className="w-10 h-10 text-green-600" />,
      title: "Full Root Access",
      description: "Complete server control with root access, custom configurations, and software installation privileges."
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Priority Support",
      description: "Get dedicated reseller support with priority ticket handling and technical assistance for your business."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
            Powerful Reseller Features
          </h2>
          <p className="text-[18px] text-[#0e3c47ca] max-w-2xl mx-auto">
            Everything you need to start and scale your hosting business with professional-grade reseller tools and support.
            "Build your hosting empire with our comprehensive reseller platform."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-200 hover:bg-white/80 border border-slate-200 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0e3c47] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#0e3c47cf] text-[18px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}