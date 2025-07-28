// import React from "react";
// import { Check, Server, Shield, Globe, Wrench, Headphones } from "lucide-react";
// import { useState, useEffect } from "react";
// import {  Star } from "lucide-react";


// export default function LPlans() {
//   //   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const Plans = [
//     {
      
//       name: "cPanel/whm licenses for VPS Server",
//       subtitle: "START FROM",
//       price: 599,
//       features: [
//         {
//           icon: <Globe className="w-4 h-4" />,
//           text: "Create cPanel unlimited accounts",
//         },
//         {
//           icon: <Shield className="w-4 h-4" />,
//           text: "Free Premium softaculous (One click CMS installer )",
//         },
//         {
//           icon: <Shield className="w-4 h-4" />,
//           text: "Free Free FileSSL (Lets encrypt SSL certificate )",
//         },
//         {
//           icon: <Wrench className="w-4 h-4" />,
//           text: "Free sitepad website builder",
//         },
//         {
//           icon: <Server className="w-4 h-4" />,
//           text: "Free Installation for license",
//         },
//         {
//           icon: <Headphones className="w-4 h-4" />,
//           text: "Always free in house technical support",
//         },
//       ],
//       bestValue: false,
//     },
//     {
//       name: "cPanel/whm licenses for Dedicated Server",
//       subtitle: "START FROM",
//       price: 1099,
//       features: [
//         {
//           icon: <Globe className="w-4 h-4" />,
//           text: "Create cPanel unlimited accounts",
//         },
//         {
//           icon: <Shield className="w-4 h-4" />,
//           text: "Free Premium softaculous (One click CMS installer )",
//         },
//         {
//           icon: <Shield className="w-4 h-4" />,
//           text: "Free Free FileSSL (Lets encrypt SSL certificate )",
//         },
//         {
//           icon: <Wrench className="w-4 h-4" />,
//           text: "Free sitepad website builder",
//         },
//         {
//           icon: <Server className="w-4 h-4" />,
//           text: "Free Installation for license",
//         },
//         {
//           icon: <Headphones className="w-4 h-4" />,
//           text: "Always free in house technical support",
//         },
//       ],
//       bestValue: true,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
         
//           <div className="inline-block  px-6 py-2">
//             <span className="text-sm text-[#0e3c47b5] font-medium">
//               Select Your
//             </span>
//             <h2 className="text-3xl font-bold text-[#185d6e] mt-1">
//               Linux WHM cPanel Pricing
//             </h2>
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="items-center justify-center m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 w-5/6">
//           {Plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`relative bg-white border rounded-lg shadow-xl px-3 py-5 transition-transform duration-300 ease-in-out transform hover:scale-105 ${
//                 plan.bestValue
//                   ? "ring-4 ring-green-500 transform scale-105"
//                   : ""
//               }`}
//             >
//               {plan.bestValue && (
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium relative -top-1">
//                     Best value
//                   </div>
//                 </div>
//               )}

//               <div className="text-center mb-6 px-3">
//                 <h3 className="text-lg font-bold text-[#0e3c47] mb-1">
//                   {plan.name}
//                 </h3>
//                 <p className="text-xs text-[#0e3c47] mb-4">{plan.subtitle}</p>

//                 <div className="mb-4">
//                   <span className="text-xl font-bold text-[#0e3c47]">INR</span>
//                   <span className="text-3xl font-bold text-[#0e3c47]">
//                     {plan.price}
//                   </span>
//                   <span className="text-[#0e3c47bf]"> p/mo.*</span>
//                 </div>

//                 <div className="px-16">
//                   <button className="w-full py-3 rounded-md font-medium text-sm transition-transform duration-300 ease-in-out transform bg-[#1c7389] text-white hover:bg-[#0e3c47] hover:scale-105 ">
//                     Buy now
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <ul className="space-y-3 px-4">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li
//                       key={featureIndex}
//                       className="flex items-center space-x-2 text-[16px] font-semibold text-[#0e3c47] hover:text-[#2f889e]"
//                     >
//                       {feature.icon}
//                       <span>{feature.text}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {
//   /* Bottom Section */
// }
// <div
//   className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
//     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//   }`}
// >
//   <div className="bg-white/90 border  backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
//     <h3 className="text-xl font-bold text-gray-900 mb-11">
//       Best Hosting Features
//     </h3>

//     <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
//       <div className="flex flex-col items-center">
//         <div className="bg-blue-100 rounded-full p-3 mb-3">
//           <Check className="w-6 h-6 text-green-500" />
//         </div>
//         <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
//           99.9% Uptime
//         </h4>
//         <p className="text-gray-600 text-xs">Guaranteed reliable hosting</p>
//       </div>

//       <div className="flex flex-col items-center">
//         <div className="bg-blue-100 rounded-full p-3 mb-3">
//           <Check className="w-6 h-6 text-green-500" />
//         </div>
//         <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
//           Free Migration
//         </h4>
//         <p className="text-gray-600 text-xs">We'll move your site for free</p>
//       </div>

//       <div className="flex flex-col items-center">
//         <div className="bg-blue-100 rounded-full p-3 mb-3">
//           <Check className="w-6 h-6 text-green-500" />
//         </div>
//         <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
//           24/7 Support
//         </h4>
//         <p className="text-gray-600 text-xs">Expert help when you need it</p>
//       </div>

//       <div className="flex flex-col items-center">
//         <div className="bg-blue-100 rounded-full p-3 mb-3">
//           <Check className="w-6 h-6 text-green-500" />
//         </div>
//         <h4 className="font-semibold text-gray-900 mb-1 text-[20px]">
//           Multi Data Center
//         </h4>
//         <p className="text-gray-600 text-xs">Worldwide Data Center Network</p>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// }

// -------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Check, Server, Shield, Globe, Wrench, Headphones, Star } from "lucide-react";

const LPlans = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const plans = [
    {
      name: "cPanel/whm licenses for VPS Server",
      subtitle: "START FROM",
      price: 599,
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Create cPanel unlimited accounts" },
        { icon: <Shield className="w-4 h-4" />, text: "Free Premium softaculous (One click CMS installer )" },
        { icon: <Shield className="w-4 h-4" />, text: "Free Free FileSSL (Lets encrypt SSL certificate )" },
        { icon: <Wrench className="w-4 h-4" />, text: "Free sitepad website builder" },
        { icon: <Server className="w-4 h-4" />, text: "Free Installation for license" },
        { icon: <Headphones className="w-4 h-4" />, text: "Always free in house technical support" },
      ],
      bestValue: false,
    },
    {
      name: "cPanel/whm licenses for Dedicated Server",
      subtitle: "START FROM",
      price: 1099,
      features: [
        { icon: <Globe className="w-4 h-4" />, text: "Create cPanel unlimited accounts" },
        { icon: <Shield className="w-4 h-4" />, text: "Free Premium softaculous (One click CMS installer )" },
        { icon: <Shield className="w-4 h-4" />, text: "Free Free FileSSL (Lets encrypt SSL certificate )" },
        { icon: <Wrench className="w-4 h-4" />, text: "Free sitepad website builder" },
        { icon: <Server className="w-4 h-4" />, text: "Free Installation for license" },
        { icon: <Headphones className="w-4 h-4" />, text: "Always free in house technical support" },
      ],
      bestValue: true,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-[40px] font-bold text-[#0e3c47] mb-5">
            Choose Your Perfect <span className="text-blue-600">cPanel License Plan</span>
          </h2>
          <p className="text-sm text-[#0e3c47cc] max-w-3xl mx-auto leading-relaxed">
            Flexible licensing for VPS and Dedicated servers with premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                plan.bestValue ? "ring-4 ring-green-500 ring-opacity-80" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-current" /> Best Value
                  </div>
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#0e3c47] mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                <div className="text-4xl font-bold text-[#0e3c47] mb-6">₹{plan.price}</div>

                <ul className="space-y-4 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="text-green-600">{feature.icon}</span>
                      {feature.text}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${
                    plan.bestValue
                      ? "bg-gradient-to-r from-[#0e3c47] to-[#004051] text-white shadow-lg hover:opacity-90"
                      : "bg-gradient-to-r from-[#0e3c47] to-[#004051] text-white shadow-lg hover:opacity-90"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LPlans;