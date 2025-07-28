import React from 'react';
import { Clock, Headphones, Cloud, Database } from 'lucide-react';
import { TrendingUp, Zap, BarChart3, Globe, Users, Award } from 'lucide-react';

const Pricingforeign = () => {
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
    <div className="min-h-screen  bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] ">

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-whiite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Linux Dedicated Server Providers in 2025
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              The majority of server providers in the market guarantee cheap web hosting services. They even have pre-built hosting packages that include all the tools you will be needing to expand your company's online presence, such as a free domain name, unlimited storage, feature-rich cPanel, a one-click install among others. Yet, many of them do not specify that these offered resources still have some restrictions. The result is these restrictions lead to the shutdown of your website whenever it suffers a spike in traffic. You must pick the most reliable hosting company if you intend to successfully establish your website in the online world. Herein lies the value of web hosting services like by Digital Keepers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Main Dedicated Server Hosting Features:
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Digital Keepers team understands that companies want a hosting solution that can meet every demand of their expanding online presence. One of the reasons we prioritize providing the best Linux dedicated hosting services is due to this only. You won't need to be concerned about hosting restrictions with our Linux Dedicated hosting because you will be having total control over your server. Want it better still? We also allow you to customize your hosting plans so that you truly receive the tools required to expand your internet presence and receive the greatest value with our services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Without any additional costs or hidden usage restrictions, our options are highly affordable. Thus, if you are searching for a reliable and adaptable hosting solution that can meet the demands of your expanding online presence, you can choose Digital Keepers Linux Dedicated Server hosting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-100 via-white to-indigo-100  py-16 px-8">
        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          {/* Section Header */}
          <div className="text-center mb-12 ">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0e3c47] mb-4">
              Powerful Hosting Features
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
    </div>
  );
};

export default Pricingforeign;