import React, { useState } from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes, our team comes fully equipped with all tools and eco-friendly materials.",
    },
    {
      question: "How do I get a price quote?",
      answer:
        "Simply contact us via WhatsApp or our online form with your cleaning type and location.",
    },
    {
      question: "Do you clean newly built or renovated buildings?",
      answer:
        "Yes! We specialize in post-construction and real estate cleaning for new homes and apartments.",
    },
    {
      question: "Do you offer regular cleaning schedules?",
      answer:
        "Yes, we offer weekly, bi-weekly, and monthly cleaning packages.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          FAQ (Frequently Asked Questions)
        </h2>

        <div className="divide-y divide-gray-300">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="py-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                {/* Left side: Q icon + question */}
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-blue-300 flex items-center justify-center text-blue-700 font-semibold text-sm">
                    Q
                  </div>
                  <p className="text-gray-800 text-[15px] font-medium">
                    {faq.question}
                  </p>
                </div>

                {/* Plus icon */}
                <div className="text-blue-700 text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>

              {/* Answer (only if open) */}
              {openIndex === index && (
                <p className="mt-4 ml-12 text-gray-600 leading-relaxed text-[14.5px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
