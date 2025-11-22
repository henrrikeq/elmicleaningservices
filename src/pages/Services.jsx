import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Construction,
  Building,
  LogIn,
  Bath,
  Hotel,
  Trees,
  PartyPopper
} from "lucide-react";

const services = [
  { 
    title: "Home & Apartment Cleaning", 
    icon: Home,
    description: "Professional residential cleaning"
  },
  { 
    title: "Office / Commercial Cleaning", 
    icon: Building2,
    description: "Keep your workspace spotless"
  },
  { 
    title: "Post-Construction Cleaning", 
    icon: Construction,
    description: "Remove all construction debris"
  },
  { 
    title: "Real Estate Cleaning", 
    icon: Building,
    description: "Perfect for property showings"
  },
  { 
    title: "Move-In / Move-Out Cleaning", 
    icon: LogIn,
    description: "Fresh start for new spaces"
  },
  { 
    title: "Deep Cleaning", 
    icon: Bath,
    description: "Thorough top-to-bottom clean"
  },
  { 
    title: "Airbnb / Guest House / Hotel Cleaning", 
    icon: Hotel,
    description: "Guest-ready every time"
  },
  { 
    title: "Pavement / Compound / Outdoor Cleaning", 
    icon: Trees,
    description: "Exterior pressure washing"
  },
  { 
    title: "Before & After Event Cleaning", 
    icon: PartyPopper,
    description: "Event setup and cleanup"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white px-4 md:px-10 lg:px-20 py-16">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">SERVICES</h2>
      <p className="border w-12 mb-6 border-[#044eaf]"></p>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          Professional cleaning solutions tailored to your needs
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group cursor-pointer"
            >

              {/* Card */}
              <div className="relative bg-white shadow-xl rounded-2xl p-8 border border-gray-200 h- flex flex-col items-center justify-center text-center overflow-hidden hover:shadow-2xl transition-shadow">

                {/* Icon Circle → Now Rounded Full + Yellow Background + White Skeleton */}
                <motion.div
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-4 p-5 rounded-full bg-[#044eaf] border-4 border-[#044eaf] flex items-center justify-center"
                >
                  {/* ICON */}
                  <Icon className="w-10 h-10 text-white" strokeWidth={2} />

                  {/* Hover pulse (still white) */}
                  {isHovered && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                  )}
                </motion.div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <motion.p
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-600"
                  >
                    {service.description}
                  </motion.p>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-end mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[#044eaf] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:bg-yellow-600 transition-all"
        >
          See Gallery
        </motion.button>
      </motion.div>

    </div>
  );
};

export default Services;
