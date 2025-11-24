import React from 'react';
import { CheckCircle, BadgeDollarSign, Droplets, Timer, ThumbsUp } from 'lucide-react';

const Why = () => {
  const reasons = [
    {
      id: 1,
      title: "Trusted & Professional Cleaning",
      icon: <CheckCircle className="w-10 h-10 text-white" />,
    },
    {
      id: 2,
      title: "Affordable Pricing",
      icon: <BadgeDollarSign className="w-10 h-10 text-white" />,
    },
    {
      id: 3,
      title: "Quality & Safe Cleaning Products",
      icon: <Droplets className="w-10 h-10 text-white" />,
    },
    {
      id: 4,
      title: "Fast Response & Reliable Service",
      icon: <Timer className="w-10 h-10 text-white" />,
    },
    {
      id: 5,
      title: "Customer Satisfaction Guaranteed",
      icon: <ThumbsUp className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <div className="py-20 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Why Choose Us</h2>
        <p className="border w-12 mb-6 border-[#044eaf]"></p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-[#044eaf] p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-medium text-white tracking-wide text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Why;
