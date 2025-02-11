import React, { useState, useEffect } from "react";
import { images, logo } from "../assests/constants";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log('clicked');
    
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    console.log('clicked');

  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Image Slider with Foggy Overlay */}
      <div className="h-[75vh] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-gray-900/30 to-transparent"></div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Food item ${index + 1}`}
            className={`absolute object-cover w-full h-full transition-opacity duration-700  ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Centered Logo with Bigger Size and Shadow Effect */}
      <div className="absolute inset-0 flex justify-center items-start mt-8">
        <div className="relative p-8 rounded-full bg-black bg-opacity-40 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <img src={logo} alt="logo" className="w-36 h-36 md:w-40 md:h-40 drop-shadow-2xl" />
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-neutral-900 font-bold text-3xl p-2 shadow-lg  hover:bg-opacity-70 transition-all ease-in-out duration-200"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-neutral-900 font-bold text-3xl p-2 shadow-lg  hover:bg-opacity-70 transition-all ease-in-out duration-200"
      >
        &#8594;
      </button>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center md:mt-2 sm:mt-2 px-4 sm:px-6 md:px-8 lg:px-12 text-white gap-4">
  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
    EAST COAST INSPIRE
  </h1>
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
    A TASTE OF NEW YORK IN THE SAN FRANCISCO BAY AREA
  </h2>
  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
    DINE-IN • TAKEOUT • DELIVERY • CATERING
  </p>
              <button class="btn-17">
            <span class="text-container">
              <span class="text">Order Now</span>
            </span>
          </button>
</div>
</div>
  );
};

export default HeroSection;
