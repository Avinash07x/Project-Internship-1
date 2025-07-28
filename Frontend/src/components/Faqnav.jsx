import React from "react";
import { ChevronUp } from "lucide-react";

export default function Faqnav() {
  const navItems = [
    { name: "Home", targetId: "home" },
    { name: "Offers", targetId: "offers" },
    { name: "Why DC keepers?", targetId: "whyDCkeepers" },
    { name: "FAQ", targetId: "faq" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white sticky z-40 top-11 bg-white/30 backdrop-blur-md shadow-md h-12 flex items-center">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="max-w-[600px] bg-gray-300 rounded-full py-1 px-4 flex items-center overflow-x-auto scrollbar-hide">
          {/* Upward Arrow Icon */}
          <div className="flex-shrink-0 mr-3">
            <ChevronUp className="w-5 text-gray-800" />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4 sm:space-x-6 whitespace-nowrap">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.targetId)}
                className="text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors duration-200 px-2 py-1"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}