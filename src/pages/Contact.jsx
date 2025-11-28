import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",        // <-- Added email field
    service: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form to EmailJS
  // Submit Form to EmailJS
const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  // 1️⃣ Send message to YOU (business)
  const sendToBusiness = emailjs.send(
    "service_lfjkcxh",
    "template_t1zbkfd",
    {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.service,
      location: formData.location,
      message: formData.message,
      to_email: "info.elmicleaningservices@gmail.com",
    },
    "4JGZIfxwS0pzGtn6z"
  );

  // 2️⃣ Auto-reply to CUSTOMER
  const sendAutoReply = emailjs.send(
    "service_lfjkcxh",
    "template_rvgmx9u", // <-- Your new auto-reply template ID
    {
      name: formData.name,
      email: formData.email,
      service: formData.service,
      location: formData.location,
      message: formData.message,
      reply_to: formData.email,
    },
    "4JGZIfxwS0pzGtn6z"
  );

  // Run both
  Promise.all([sendToBusiness, sendAutoReply])
    .then(() => {
      setStatus("Message sent successfully!");
      setLoading(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        location: "",
        message: "",
      });
    })
    .catch(() => {
      setStatus("Failed to send message. Try again.");
      setLoading(false);
    });
};

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#e8f1ff] p-8 lg:p-12 gap-10">

      {/* LEFT SIDE */}
      <div
        className="flex-1 rounded-lg bg-cover bg-center flex items-center justify-center p-6"
        
      >
        <div className="bg-white/70 backdrop-blur-sm max-w-md text-center p-10 rounded-lg">
          <h1 className="text-4xl font-medium mb-4 text-blue-700">Contact Us</h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Send Us Your Cleaning Request And Get A Free Quotation!
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-3">
            We are here to assist you in maintaining a clean and healthy living environment.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2 mt-2">
              Business Hours
            </h3>
            <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
            
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form onSubmit={sendEmail} className="flex-1 flex flex-col justify-center pr-0 lg:pr-20">

        {/* Full Name */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Phone Number *</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Email Address *</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Cleaning Service */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">
            Type Of Cleaning Service *
          </label>
          <input
            name="service"
            value={formData.service}
            onChange={handleChange}
            type="text"
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Location *</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            type="text"
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-[#4b3f30] outline-none py-2 h-24"
          ></textarea>
        </div>

        {/* Status Message */}
        {status && <p className="text-sm text-green-600 mt-2 mb-2">{status}</p>}

        {/* Send Button */}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 bg-[#044eaf] text-white py-3 px-7 rounded w-32 hover:bg-[#3a3326] transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
