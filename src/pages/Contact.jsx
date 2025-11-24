import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",      // Replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID",     // Replace with EmailJS Template ID
        {
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          location: formData.location,
          message: formData.message,
          to_email: "info.elmicleaningservices@gmail.com",
        },
        "YOUR_PUBLIC_KEY"       // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          setFormData({
            name: "",
            phone: "",
            service: "",
            location: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#e8f1ff] p-8 lg:p-12 gap-10">

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
            We are here to assist you in maintaining a clean and healthy living environment.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form
        onSubmit={sendEmail}
        className="flex-1 flex flex-col justify-center pr-0 lg:pr-20"
      >

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

        {/* Cleaning Service */}
        <div className="mb-6">
          <label className="block text-[#4b3f30] text-sm mb-2">Type Of Cleaning Service *</label>
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
        {status && (
          <p className="text-sm text-green-600 mt-2 mb-2">{status}</p>
        )}

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
