import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ duration: 0.3 }}
      className="group w-full bg-white rounded-2xl overflow-hidden cursor-pointer
                 border border-green-200 hover:border-green-400
                 shadow-sm transition-all duration-300"
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
        <div className="p-2 flex flex-col items-start sm:items-center text-center gap-1">
          {/* Product Name */}
          <p className="text-sm sm:text-base text-gray-900 font-medium truncate w-full font-merriweather">
            {product.name}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            {product.mrp !== product.offerPrice && (
              <p className="text-sm text-gray-500 line-through font-roboto">
                {product.mrp}
              </p>
            )}
            <p className="text-base sm:text-lg text-green-600 font-bold whitespace-nowrap font-roboto">
              {product.offerPrice}
            </p>
          </div>

          {/* Quantity */}
          <p className="text-xs text-gray-500 font-roboto">
            {product.quantity}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
