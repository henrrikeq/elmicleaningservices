import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#faebcd] p-8 lg:p-12 gap-10">

      {/* LEFT SIDE */}
      <div
        className="flex-1 rounded-lg bg-cover bg-center flex items-center justify-center p-6"
        style={{
          backgroundImage: `url('/mnt/data/Screenshot 2025-11-22 061342.png')`,
        }}
      >
        <div className="bg-white/70 backdrop-blur-sm max-w-md text-center p-10 rounded-lg">
          <h1 className="text-4xl font-medium mb-4 text-[#4b3f30]">Contact Us</h1>
          <p className="text-[#4b3f30] leading-relaxed text-lg">
            Have a question or need a cleaning service? Reach out to us today.
          </p>
          <p className="text-[#4b3f30] leading-relaxed text-lg mt-3">
            We are here to assist you in maintaining a clean and healthy living
            environment.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-20">

        {/* Email */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Your Email *</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Your Email *</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Your Email *</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Your Name *</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Subject *</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Send Button */}
        <button className="mt-4 bg-[#4b3f30] text-white py-3 px-7 rounded w-32 hover:bg-[#3a3326] transition">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
