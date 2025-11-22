import React from "react";
import { MessageSquare, Calendar, Sparkles, Phone } from "lucide-react";

const Booking = () => {
  return (
    <div className=" bg-[#e8f1ff] flex items-center justify-center h-[30%]">
      <div className="w-full max-w-6xl">
        <p className="text-[2rem] px-8 pt-8 text-stone-800 font-semibold mb-6">HOW TO BOOK</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Contact Us */}
          {/* Contact Us */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <Phone className="w-12 h-12 text-stone-700" />
            </div>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">
              Contact Us
            </h2>
          </div>

          {/* Discuss Your Needs */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-stone-700"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-stone-700"></div>
                <div className="absolute left-0 right-0 top-1/2 h-0 border-t-2 border-stone-700"></div>
                <div className="absolute inset-3 border-2 border-stone-700"></div>
              </div>
            </div>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">
              Discuss Your Needs
            </h2>
          </div>

          {/* Schedule a Cleaning */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-stone-700 rotate-45"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-stone-700 -rotate-45"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-stone-700"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-stone-700"></div>
              </div>
            </div>
            <h2 className="text-2xl font-light text-stone-800 tracking-wide">
              Schedule a Cleaning
            </h2>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-20 border-t border-stone-500/30"></div>
      </div>
    </div>
  );
};

export default Booking;
