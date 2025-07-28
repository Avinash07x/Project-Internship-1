import React from "react";
import { Mail, Users, BarChart3, Zap, Target, Calendar } from "lucide-react";

export default function MailFeatures() {
  const features = [
    {
      icon: <Mail className="w-10 h-10 text-green-600" />,
      title: "Advanced Email Editor",
      description:
        "Create stunning emails with our drag-and-drop editor featuring professional templates and responsive design.",
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Contact Management",
      description:
        "Organize and segment your audience with powerful contact management and smart list building tools.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-green-600" />,
      title: "Real-time Analytics",
      description:
        "Track opens, clicks, conversions and ROI with detailed reporting and actionable insights.",
    },
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: "Marketing Automation",
      description:
        "Set up automated email sequences, drip campaigns, and behavioral triggers to nurture leads effectively.",
    },
    {
      icon: <Target className="w-10 h-10 text-green-600" />,
      title: "A/B Testing",
      description:
        "Optimize your campaigns with built-in split testing for subject lines, content, and send times.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-green-600" />,
      title: "Campaign Scheduling",
      description:
        "Plan and schedule your email campaigns in advance with optimal send time recommendations.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
            Powerful
            <span className="text-blue-600"> Email Marketing Features</span>
          </h2>
          <p className="text-[18px] text-[#0e3c47ca] max-w-2xl mx-auto">
            Everything you need to create, send, and optimize email campaigns
            that drive results and grow your business. "Professional email
            marketing tools for businesses of all sizes."
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