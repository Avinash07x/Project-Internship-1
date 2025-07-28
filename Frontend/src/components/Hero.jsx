import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Hero10 from "../assets/hero10.png";
import Hero20 from "../assets/hero20.png";
import Hero30 from "../assets/hero30.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      heading: "Fast, secure and reliable web hosting",
      paragraph:
        "Elevate your business with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results in today's competitive digital landscape.",
      image: Hero10,
    },
    {
      id: 2,
      heading: "Innovative Cloud Solutions",
      paragraph:
        "Scale your infrastructure with enterprise-grade cloud services designed for modern businesses. Experience unmatched reliability, security, and performance optimization.",
      image: Hero20,
    },
    {
      id: 3,
      heading: "Data-Driven Success",
      paragraph:
        "Unlock the power of analytics and artificial intelligence to make informed decisions, optimize operations, and stay ahead of market trends with our advanced platform.",
      image: Hero30,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#dff6fd] to-[#f7fafe] h-auto min-h-[500px] overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-10 relative">
          {/* Carousel Container */}
          <div className="relative w-full h-full flex items-center">
            <div className="w-full h-full flex items-center">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full transition-all duration-700 ease-in-out transform ${
                    index === currentSlide
                      ? "translate-x-0 opacity-100"
                      : index < currentSlide
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 h-full items-center">
                    {/* Text */}
                    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e3c47]">
                        {slide.heading}
                      </h1>
                      <p className="text-sm sm:text-base lg:text-lg text-[#0e3c47cc] max-w-xl mx-auto lg:mx-0">
                        {slide.paragraph}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center lg:justify-end items-center mt-6 lg:mt-0 animate-gentle-bounce">
                      <img
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (moved to bottom) */}
          <div className="w-full flex justify-center mt-[300px]">
            <div className="flex space-x-4">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 text-[#94a3b2]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 text-[#94a3b2]"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;