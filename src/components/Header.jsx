import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PHONE_NUMBER, LOGO_URL } from "../data/constants.js";
import { PhoneIcon } from "./icons/PhoneIcon.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryColor = "text-green-600";
  const hoverColor = "hover:text-green-700";
  const navLinkClass = `text-base font-medium text-gray-700 ${hoverColor} transition-colors`;
  const activeNavLinkClass = primaryColor;
  const mobileNavLinkClass = "block py-2 text-lg";

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/40 shadow-lg border-b border-white/20"
          : "bg-white"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO_URL}
              alt="Jack Pepper Farms Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-xl sm:text-2xl font-lobster tracking-tight text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              Jack <span className="text-green-600">Pepper</span> Farms
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            <Link
              to="/"
              className={`${navLinkClass} font-merriweather ${
                location.pathname === "/" ? activeNavLinkClass : ""
              }`}
            >
              Home
            </Link>
            <Link to="/products" className={`${navLinkClass} font-merriweather`}>
              Products
            </Link>
            <Link
              to="/about-us"
              className={`${navLinkClass} font-merriweather ${
                location.pathname === "/about-us" ? activeNavLinkClass : ""
              }`}
            >
              About Us
            </Link>

            {/* Call Button */}
            <div className="hidden md:flex items-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white font-roboto font-bold rounded-lg hover:bg-green-700 transition duration-300 shadow-lg"
              >
                <PhoneIcon className="w-4 h-4" />
                <span className="font-merriweather">Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu + Call */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white font-roboto font-bold rounded-lg hover:bg-green-700 transition text-sm shadow-lg"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Call</span>
            </a>

            <button
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/70 backdrop-blur-xl shadow-lg border-t border-white/20"
          >
            <div className="px-4 pt-2 pb-4">
              <Link
                to="/"
                className={`${mobileNavLinkClass} ${navLinkClass} font-merriweather ${
                  location.pathname === "/" ? activeNavLinkClass : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`${mobileNavLinkClass} ${navLinkClass} font-merriweather`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about-us"
                className={`${mobileNavLinkClass} ${navLinkClass} font-merriweather ${
                  location.pathname === "/about-us" ? activeNavLinkClass : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
