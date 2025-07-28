import React from "react";
import { Settings, Zap, Code, Server, GitBranch, Activity } from 'lucide-react';


export default function PHFeatures() {
  const features = [
    {
      icon: <Settings className="w-10 h-10 text-green-600" />,
      title: "Pre-configured Python Environment",
      description: "Deploy instantly with Python 3.8, 3.9, 3.10, and 3.11 support, plus popular frameworks like Django, Flask, and FastAPI pre-installed."
    },
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: "Lightning-Fast Performance",
      description: "Optimized Python runtime with SSD storage, Redis caching, and CDN integration for maximum application speed."
    },
    {
      icon: <Code className="w-10 h-10 text-green-600" />,
      title: "Package Management",
      description: "Full pip and conda support with isolated virtual environments to manage dependencies without conflicts."
    },
    {
      icon: <Server className="w-10 h-10 text-green-600" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling Python applications with load balancing and horizontal scaling to handle traffic spikes seamlessly."
    },
    {
      icon: <GitBranch className="w-10 h-10 text-green-600" />,
      title: "Git Integration & CI/CD",
      description: "Deploy directly from GitHub, GitLab, or Bitbucket with automated builds and continuous deployment pipelines."
    },
    {
      icon: <Activity className="w-10 h-10 text-green-600" />,
      title: "Real-time Monitoring",
      description: "Monitor your Python applications with detailed logs, performance metrics, and error tracking dashboards."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
            Python Server Hosting 
            <span className="text-[#0e3c47]"> Features</span>
          </h2>
          <p className="text-[18px] text-[#0e3c47ca] max-w-2xl mx-auto">
            Everything you need to deploy and scale your Python applications with confidence, backed by enterprise-grade infrastructure.
            "Fast, reliable & fully optimized Python hosting for modern web applications."
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