import React from 'react';
import {  Shield , Server } from 'lucide-react';
import { TrendingUp, Zap, BarChart3, Globe, Users, Award } from 'lucide-react';

const Pricingindia = () => {
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

  const mainFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Amazing Performance",
      description: "Though Dedicated server hosting is a more expensive option than other types of web hosting, it can offer an amazing and affordable performance for your website."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: "Full Customization",
      description: "You can customize the server to your needs. This means you can optimize your website's performance to ensure fast load times."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enhanced Security",
      description: "It offers high levels of security as you won't be sharing the server with other users. Thus, getting you full control over the security measures."
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] ">
      {/* Hero Section */}
      <section className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Dedicated Server Hosting
              <span className="block text-gray-750">Affordable Performance for Your Website</span>
            </h1>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're just starting out with your business's website or looking for ways to increase your sales online, 
            you must have come across the advice of choosing a dedicated server as a web hosting solution. There are multiple 
            options in the market that can offer reliable performance. But if you want the best and affordable performance 
            for your website, it's worth considering all the options including what dedicated server hosting can offer.
          </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-8 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Main Dedicated Server Hosting Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Hosting Features Grid */}
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

export default Pricingindia;



      // {/* Footer */}
      // <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      //   <div className="max-w-7xl mx-auto">
      //     <div className="grid md:grid-cols-4 gap-8">
      //       <div>
      //         <div className="flex items-center space-x-3 mb-4">
      //           <Globe className="w-8 h-8 text-blue-400" />
      //           <h3 className="text-xl font-bold">ServerIndia</h3>
      //         </div>
      //         <p className="text-gray-400">
      //           Leading dedicated server hosting provider in India, delivering reliable and affordable solutions.
      //         </p>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Services</h4>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">Dedicated Servers</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Cloud Hosting</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Shared Hosting</a></li>
      //         </ul>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Support</h4>
      //         <ul className="space-y-2 text-gray-400">
      //           <li><a href="#" className="hover:text-white transition-colors">24/7 Support</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Knowledge Base</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Server Status</a></li>
      //           <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
      //         </ul>
      //       </div>
            
      //       <div>
      //         <h4 className="text-lg font-semibold mb-4">Contact</h4>
      //         <div className="space-y-2 text-gray-400">
      //           <p>📧 support@serverindia.com</p>
      //           <p>📞 +91-8000-123-456</p>
      //           <p>🏢 Mumbai, Delhi, Bangalore</p>
      //           <p>🌐 Available 24/7/365</p>
      //         </div>
      //       </div>
      //     </div>
          
      //     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      //       <p>&copy; 2025 ServerIndia. All rights reserved. | Made with ❤️ in India</p>
      //     </div>
      //   </div>
      // </footer>