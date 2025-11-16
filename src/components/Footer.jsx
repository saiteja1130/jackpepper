import React from "react";
import { LOGO_URL } from "../data/constants.js";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-14 font-body">
      <div className="container mx-auto px-4 text-center">
        
        {/* Logo + Brand Name */}
        <div className="flex flex-col items-center">
          <img
            src={LOGO_URL}
            alt="Jack Pepper Farms"
            className="h-14 md:h-16 w-auto mx-auto mb-4 md:mb-6 bg-white rounded-full p-1.5 shadow-xl"
          />
          <h2 className="font-organic text-2xl md:text-3xl font-semibold tracking-wide text-white/90">
            Jack Pepper Farms
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 md:mt-8 text-white">
          
          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <FaTwitter className="h-5 w-5" />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-6 md:mt-8 font-body">
          &copy; {new Date().getFullYear()} Jack Pepper Farms. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
