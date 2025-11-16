import React from 'react';
import { LOGO_URL } from '../data/constants.jsx';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={LOGO_URL} alt="Jack Pepper Farms" className="h-12 md:h-16 w-auto mx-auto mb-4 md:mb-6 bg-white rounded-full p-1 shadow-lg"/>
        <div className="flex justify-center space-x-4 mb-4 md:mb-6">
          {/* Placeholder for Social Media Icons */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-facebook-f"></i> {/* Example: Facebook Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-twitter"></i> {/* Example: Twitter Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-instagram"></i> {/* Example: Instagram Icon */}
          </a>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Jack Pepper Farms. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;