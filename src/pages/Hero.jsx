import React from "react";
import first from "../assets/images/first.avif";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={first}
          alt="Irish Landscape"
          className="w-full h-full object-cover rounded-none shadow-none transform transition-transform duration-500 hover:scale-105"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/60"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6 animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slideInLeft">
            Welcome to{" "}
            <span className="text-white">ElMi Cleaning Services Ltd.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light animate-slideInLeft animation-delay-200">
            Excellence In Every Cleaning.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slideInLeft animation-delay-400">
            <button className="group relative px-8 py-4 bg-[#044eaf] text-gray-900 font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-amber-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 text-white">
                Book Your Cleaning Today!
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 pt-8 animate-slideInLeft animation-delay-600">
            <div className="flex items-center gap-2 text-white">
              <div className="w-12 h-12 bg-[#044eaf] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-semibold">Professional Team</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <div className="w-12 h-12 bg-[#044eaf] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold">On-Time Service</span>
            </div>

            <div className="flex items-center gap-2 text-white">
              <div className="w-12 h-12 bg-[#044eaf] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
