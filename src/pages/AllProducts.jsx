import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/constants";
import FaqSection from "../components/FaqSection";

const AllProducts = () => {
  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  // Define a preferred order for categories
  const categoryOrder = ["Wellness Products", "Spices", "Powders", "Bundles"];

  // Refs for scrolling to categories
  const categoryRefs = useRef({});

  const scrollToCategory = (category) => {
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pb-14 sm:pb-16 md:pb-20 bg-white font-body">
      {/* Page Title */}

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar for Category Navigation */}
        <aside className="lg:w-1/4 sticky top-28 max-h-[calc(100vh-theme(space.28))] overflow-y-auto p-4 bg-gray-50 rounded-xl shadow-md hidden lg:block">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
          <nav>
            <ul className="space-y-2">
              {categoryOrder.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => scrollToCategory(category)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors duration-200"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Products Grid by Category */}
        <div className="lg:w-3/4">
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
              Explore our organically grown, hand-picked spices, superfoods,
              herbs, and wellness products — sourced with care.
            </motion.p>
          </div>
          {categoryOrder.map((category) => {
            const categoryProducts = productsByCategory[category];
            if (!categoryProducts || categoryProducts.length === 0) {
              return null;
            }
            return (
              <div
                key={category}
                ref={(el) => (categoryRefs.current[category] = el)}
                className="mb-12 pt-4" // pt-4 for scroll offset
              >
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center relative">
                  <span className="relative inline-block pb-2">
                    {category}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-green-600 rounded-full"></span>
                  </span>
                </h2>
                {category === "Bundles" && (
                  <p className="text-center text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                    Discover our specially curated bundles for great savings and a complete experience. Perfect for gifting or stocking up your pantry!
                  </p>
                  <p className="text-center text-md text-gray-600 mb-8 max-w-3xl mx-auto">
                    Unlock exclusive discounts when you choose our bundles. Experience the best of our products at an unbeatable value!
                  </p>
                )}
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    gap-4 sm:gap-6
                  "
                >
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <FaqSection />
    </div>
  );
};

export default AllProducts;
