import React from "react";
import { Shield, Clock, Headphones, Wifi, Database, Lock } from 'lucide-react';


export default function SHFeatures() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: "Free SSL Certificate",
      description: "Secure your website with industry-standard SSL encryption to protect visitor data and boost SEO rankings."
    },
    {
      icon: <Clock className="w-10 h-10 text-green-600" />,
      title: "99.9% Uptime Guarantee",
      description: "Keep your website online with our reliable infrastructure and comprehensive uptime monitoring."
    },
    {
      icon: <Headphones className="w-10 h-10 text-green-600" />,
      title: "24/7 Customer Support",
      description: "Get expert help anytime with our dedicated support team available via chat, email, and phone."
    },
    {
      icon: <Wifi className="w-10 h-10 text-green-600" />,
      title: "Unlimited Bandwidth",
      description: "Handle traffic spikes without worry with our unmetered bandwidth and data transfer."
    },
    {
      icon: <Database className="w-10 h-10 text-green-600" />,
      title: "SSD Storage",
      description: "Experience faster loading times with high-performance solid-state drive storage technology."
    },
    {
      icon: <Lock className="w-10 h-10 text-green-600" />,
      title: "Daily Backups",
      description: "Protect your data with automated daily backups and easy one-click restore functionality."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
            Powerful 
            <span className="text-blue-600"> Shared Hosting Features</span>
          </h2>
          <p className="text-[18px] text-[#0e3c47ca] max-w-2xl mx-auto">
            Everything you need to build and grow your website with confidence, backed by enterprise-grade infrastructure.
            "Fast, affordable & fully optimized shared hosting for growing websites."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/50 rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-200 hover:bg-white border border-slate-200 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-sky-200/60 rounded-full">
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
