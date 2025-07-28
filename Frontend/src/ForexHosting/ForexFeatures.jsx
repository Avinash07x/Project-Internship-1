import React from "react";
import { TrendingUp, Zap, BarChart3, Globe, Users, Award } from 'lucide-react';


export default function ForexFeatures() {
  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-green-600" />,
      title: "Advanced Trading Analytics",
      description: "Get real-time market insights and technical analysis tools to make informed trading decisions in volatile forex markets."
    },
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: "Ultra-Low Latency Execution",
      description: "Execute trades at lightning speed with our optimized infrastructure designed for high-frequency forex trading."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-600" />,
      title: "Multi-Currency Dashboard",
      description: "Monitor multiple currency pairs simultaneously with customizable charts and real-time price feeds."
    },
    {
      icon: <Globe className="w-10 h-10 text-green-600" />,
      title: "Global Market Access",
      description: "Trade major, minor, and exotic currency pairs across international markets with 24/5 availability."
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Expert Trading Support",
      description: "Get guidance from experienced forex traders and market analysts available around the clock."
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Regulated & Secure Platform",
      description: "Trade with confidence on our fully regulated platform with bank-grade security and fund protection."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
            Powerful Forex Hosting Features
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