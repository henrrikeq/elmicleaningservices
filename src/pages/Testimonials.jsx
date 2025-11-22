import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Grace A.",
      text: "Efficient, professional, and friendly service. I highly recommend B. Harrison for all your cleaning needs.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
    },
    {
      id: 2,
      name: "Michael T.",
      text: "Outstanding attention to detail! The team went above and beyond to make our home sparkle. Couldn't be happier with the results.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80"
    },
    {
      id: 3,
      name: "Sarah L.",
      text: "Reliable and thorough cleaning service. They've been taking care of our office for months now, and we're always impressed.",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
    },
    {
      id: 4,
      name: "James R.",
      text: "Professional team with excellent communication. They transformed our space and made the entire process seamless.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
    }
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
      <p className='text-[2.5rem] px-8 pt-8 text-stone-800'>Testimonials</p>

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
                    index === currentIndex 
                      ? 'bg-stone-800 w-8' 
                      : 'bg-stone-400'
                  }`}
                />
              ))}
            </div>

            <button className="bg-stone-800 text-white px-8 py-3 hover:bg-stone-700 transition-colors font-light tracking-wide">
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
                index === currentIndex ? 'opacity-100' : 'opacity-0'
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
