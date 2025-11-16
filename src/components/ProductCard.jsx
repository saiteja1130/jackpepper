import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group w-full bg-white rounded-2xl overflow-hidden cursor-pointer
                 border border-green-200 hover:border-green-400
                 shadow-sm hover:shadow-lg transition-all duration-300
                 font-inter" // 👈 added font family
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div
          className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden 
                     flex items-center justify-center bg-white p-2"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="p-2 flex flex-col items-start sm:items-center text-center gap-1 font-inter">
          <p className="text-sm sm:text-base text-gray-900 font-medium truncate w-full">
            {product.name}
          </p>

          <p className="text-base sm:text-lg text-green-600 font-bold whitespace-nowrap">
            {product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
