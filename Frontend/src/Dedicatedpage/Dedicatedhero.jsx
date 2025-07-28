import React from 'react'; 
import Hero10 from "../assets/2.png";
import { ArrowRight } from "lucide-react";

export default function Dedicatedhero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] min-h-[500px] h-auto overflow-hidden py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        {/* Carousel Container */}
        <div className="relative w-full h-full flex items-center">
          <div className="w-full h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="flex flex-col justify-center space-y-5 order-2 lg:order-1 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#0a2540]">
                  Dedicated Server - India
                </h1>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#3b3f5c] max-w-full sm:max-w-lg mx-auto lg:mx-0">
                  Experience reliability and speed like never before! Unleash the power of Linux/Windows India dedicated servers with our high-performance hosting solutions. Subscribe now and save big on your dedicated server with our limited time 20% discount offer.
                </p>
                {/* CTA Button */}
                <div className="pt-2 flex justify-center lg:justify-start">
                  <button
                    className="group bg-[#126276] hover:bg-[#218aa4] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg inline-flex items-center space-x-2 text-sm sm:text-base"
                    aria-label="View all hosting plans"
                  >
                    <span>See All Plans</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 animate-gentle-bounce">
                <div className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px]">
                  <img
                    src={Hero10}
                    className="w-full h-auto object-contain"
                    alt="Dedicated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};