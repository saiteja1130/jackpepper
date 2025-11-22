import React from "react";
import { LOGO_URL } from "../data/constants.js";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-14">
      <div className="container mx-auto px-4 text-center">
        
        {/* Logo + Brand Name */}
        <div className="flex flex-col items-center">
          <img
            src={LOGO_URL}
            alt="Jack Pepper Farms"
            className="h-14 md:h-16 w-auto mx-auto mb-4 md:mb-6 bg-white rounded-full p-1.5 shadow-xl"
          />
          <h2 className="font-lobster text-2xl md:text-3xl font-semibold tracking-wide text-white/90">
            Jack Pepper Farms
          </h2>
        </div>

        {/* Two Sections Wrapper */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-sm md:text-base text-left md:text-center px-4 md:px-20">

          {/* Address Section */}
          <div>
            <h3 className="text-white text-lg font-merriweather font-semibold mb-2">
              Address
            </h3>
            <p className="font-roboto">
              jackpepperfarms,<br />
              T-17, Saigreens, Babusapalaya,<br />
              Kalyan Nagar,<br />
              Bangalore 560043.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-merriweather font-semibold mb-2">
              Contact Us
            </h3>
            <p className="font-roboto">Mob: 8073781750, 8050939719</p>
            <p className="mt-1 font-roboto">
              Email:{" "}
              <a href="mailto:jackpepperfarms@gmail.com" className="hover:text-white">
                jackpepperfarms@gmail.com
              </a>
            </p>
            <p className="mt-1 font-roboto">
              Website:{" "}
              <a
                href="https://jackpepperfarms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                jackpepperfarms.com
              </a>
            </p>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-10 text-white">
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
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-6 md:mt-8 font-roboto">
          &copy; {new Date().getFullYear()} Jack Pepper Farms. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
