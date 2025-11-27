import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image2 from "../assets/images/image2.jpg";
import testimonial1 from "../assets/images/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";
import testimonial4 from "../assets/images/testimonial4.jpg";
import testimonial7 from "../assets/images/testimonial7.PNG";
import testimonial5 from "../assets/images/testimonial5.PNG";
import testimonial3 from "../assets/images/testimonial3.PNG";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abena.",
      text: "I’m more than satisfied. You guys did a great job. Thank you very much.",
      image: testimonial3,
    },
    {
      id: 2,
      name: "Nana Yaw.",
      text: "Thanks for your good service. You are very reliable and did an amazing job in the house. I rate it 5",
      image: testimonial5,
    },
    {
      id: 3,
      name: "Joseph Owusu Boateng",
      text: "A reliable, thorough, and friendly service. I’ll definitely be using them again and highly recommend them to anyone looking for quality cleaning.",
      image: testimonial7,
    },
    {
      id: 4,
      name: "Vicynthia Badu.",
      text: "The best cleaning services! The place smells so nice too. Good job!",
      image: testimonial1,
    },
    {
      id: 4,
      name: "Mina Adjeley.",
      text: "Transforming homes one clean at a time. Fresh scent, spotless finish, and excellent customer service — you won’t regret booking them!",
      image: testimonial2,
    },
    {
      id: 4,
      name: "Akua Roselyn.",
      text: "You guys did a great job. Thank you!",
      image: testimonial4,
    },
    {
      id: 4,
      name: "Rose.",
      text: "They did a wonderful job! The results are great. Thank you!",
      image: testimonial1,
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#e8f1ff]">
      <p className="text-[2.5rem] px-8 pt-8 text-stone-800">Testimonials</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 relative">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8 tracking-wide">
              {testimonials[currentIndex].name}
            </h2>

            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-12">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Arrows */}
            <div className="flex items-center gap-8 mb-8">
              <button
                onClick={goToPrevious}
                className="p-2 hover:bg-stone-200 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-stone-700" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 hover:bg-stone-200 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-stone-700" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-3 mb-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-stone-800 w-8" : "bg-stone-400"
                  }`}
                />
              ))}
            </div>

            <button
  onClick={goToNext}
  className="
    bg-[#044eaf] 
    text-white 
    px-8 py-3 
    rounded-md
    transition-all 
    duration-300 
    font-light 
    tracking-wide
    hover:bg-[#033d8c] 
    active:scale-95
    shadow-md
    hover:shadow-xl
  "
>
  Read More
</button>

          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-screen">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s testimonial`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
