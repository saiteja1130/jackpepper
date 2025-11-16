import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/constants";
import FaqSection from "../components/FaqSection";

const AllProducts = () => {
  return (
    <div
      className="
        pb-14 sm:pb-16 md:pb-20 bg-white font-body
      "
    >
      {/* Page Title */}
      <div className="text-center mb-6 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug"
        >
          Our Premium <br className="sm:hidden" /> Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto px-2"
        >
          Explore our organically grown, hand-picked spices, superfoods, herbs,
          and wellness products — directly from Jack Pepper Farms.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5 
          gap-4 sm:gap-6 
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <FaqSection />
    </div>
  );
};

export default AllProducts;
