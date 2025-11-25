import React from "react";
import image7 from "../assets/images/image7.jpg";

const About = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">ABOUT US</h2>
      <p className="border w-12 mb-6 border-[#044eaf]"></p>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex flex-col gap-4 text-lg leading-relaxed">
          <p>
            <strong className="text-[#044eaf]">
              ElMi Cleaning Services Ltd.
            </strong>{" "}
            is a registered professional cleaning company in Ghana dedicated to
            delivering reliable, detailed, and high-quality cleaning solutions
            for homes, offices, hotels, and real estate developments.
          </p>

          <p>
            We use trained staff, proper equipment, and safe cleaning methods to
            ensure spotless results every time. Your satisfaction is our
            priority.
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-xl mb-2 text-[#044eaf]">
              Mission
            </h3>
            <p>
              To provide excellent and consistent cleaning services that create
              clean, healthy, and comfortable spaces.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl mb-2 text-[#044eaf]">
              Values
            </h3>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Professionalism</li>
              <li>Quality Service</li>
              <li>Honesty</li>
              <li>Attention to Detail</li>
              <li>Customer Satisfaction</li>
            </ul>
          </div>
        </div>
        <img
          src={image7}
          alt="Cleaning"
          className="w-full md:w-[35%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default About;
