import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Map } from "lucide-react";

const regions = [
  "Greater Accra",
  "Ashanti",
  "Central",
  "Eastern",
  "Western",
  "Western North",
  "Volta",
  "Oti",
  "Bono",
  "Bono East",
  "Ahafo",
  "Northern",
  "Savannah",
  "North East",
  "Upper East",
  "Upper West"
];

const ServiceAreas = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="bg-white px-4 md:px-10 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          
        >
          {/* <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Map className="w-12 h-12 text-yellow-500" />
          </motion.div> */}
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-">SERVICE AREAS</h2>
      <p className="border w-12 mb-6 border-[#044eaf]"></p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            We proudly serve clients across all 16 regions of Ghana, including but not limited to:
          </p>
        </motion.div>

        {/* Regions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredRegion(index)}
              onHoverEnd={() => setHoveredRegion(null)}
              whileHover={{ y: -4 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:border-yellow-500 hover:shadow-lg transition-all">
                <motion.div
                  animate={hoveredRegion === index ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </motion.div>
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {region}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-full px-6 py-3">
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold text-yellow-600">Nationwide Coverage</span> • Available in all 16 regions
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceAreas;