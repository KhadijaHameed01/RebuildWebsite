import React from 'react';
import { FaFacebook, FaInstagramSquare, FaCopyright } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full  flex flex-col items-center justify-center py-10 px-5 text-green-700'>
      {/* Social Icons */}
      <div className='flex gap-5 mb-5'>
        {[FaFacebook, FaSquareXTwitter, FaInstagramSquare].map((Icon, index) => (
          <a key={index} href='#' 
            className='relative w-[50px] h-[50px] flex items-center justify-center rounded-full bg-neutral-800 text-white text-2xl shadow-lg transition-transform duration-300 ease-in-out hover:animate-bounce'>
            <Icon />
          </a>
        ))}
      </div>
      {/* Footer Links */}
      <div className='flex flex-wrap justify-center gap-4 text-sm font-medium'>
        {['Accessibility', 'Back to top', 'Jobs', 'Privacy Policies', 'Terms of Use'].map((link, index) => (
          <a key={index} href='#' className='hover:text-green-800 transition duration-300'>{link}</a>
        ))}
      </div>
      {/* Copyright */}
      <p className='text-xs flex items-center gap-1 mt-4 opacity-80'>
       From <FaCopyright className='text-base' /> 2018-2025 Amicis' MT Inc. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
