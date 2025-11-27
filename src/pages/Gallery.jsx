import React, { useState, useEffect } from "react";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img3.jpg",
  "/gallery/img4.jpg",
];

const videos = [
  "/gallery/video1.mp4",
  "/gallery/video2.mp4",
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow every 4 secs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-28 pb-10 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-[#044eaf] mb-10">
        Gallery
      </h1>

      {/* Image Slideshow */}
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt="Gallery Slide"
          className="w-full h-[400px] object-cover transition-all duration-700"
        />

        {/* Prev Button */}
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/60 p-2 rounded-full hover:bg-white"
        >
          ▶
        </button>
      </div>

      {/* Videos Section */}
      <h2 className="text-3xl font-semibold text-center mt-16 mb-6 text-[#044eaf]">
        Cleaning Videos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {videos.map((video, index) => (
          <video
            key={index}
            controls
            className="w-full rounded-xl shadow-lg"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
