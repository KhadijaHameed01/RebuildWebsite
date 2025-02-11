import React from "react";
import { motion } from "motion/react"
import { images } from "../assests/constants";

const Slider = () => {
  return (
    <div 
    className="slider-container overflow-hidden bg-green-100 py-6">
    <div 
    className="container flex whitespace-nowrap animate-scroll">
      {images.map((image, index) => (
        <motion.div key={index} 

        initial={{ scale: 1, rotate:0}}
        whileHover={{scale: 1.05, rotate:2}}
        whileTap={{scale: 0.95}}
        transition={{type:"spring" , stiffness:300 }}

        className={`item item${index + 1} w-60 mx-2 p-2 bg-white rounded-lg shadow-lg`}>
          <img src={image} alt={`Food ${index + 1}`} className="w-full h-36 object-cover rounded-md mb-2" />
          <h2 className="text-lg font-semibold text-black">Food {index + 1}</h2>
          <p className="text-gray-700 text-sm">This is menu card food {index + 1}</p>
          <button className="btn-17 mt-2">
            <span className="text-container">
              <span className="text">Order Now</span>
            </span>
          </button>
        </motion.div>
      ))}
     </div>
     </div>
  );
};

export default Slider;
