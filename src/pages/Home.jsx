import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { products } from "../data/constants.js";
import { LeafIcon } from "../components/icons/LeafIcon.jsx";
import { QualityIcon } from "../components/icons/QualityIcon.jsx";
import { TruckIcon } from "../components/icons/TruckIcon.jsx";
import bannerImage from "../assets/Images/banner.avif";
import FaqSection from "../components/FaqSection.jsx";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="font-body"
    >
      <div class="w-full py-2.5 font-medium text-sm text-white bg-linear-to-r from-green-400 via-green-500 to-green-600">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
          <p>All orders above Rs 750 free delivery.</p>
          <span class="hidden sm:inline">|</span>
          <p>Below Rs 60 courier charges.</p>
          <span class="hidden sm:inline">|</span>
          <p>All orders above Rs 1500 discount of 5% plus free delivery.</p>
          <span class="hidden sm:inline">|</span>
          <p>5% GST extra on all products except jackfruit items.</p>
          <span class="hidden sm:inline">|</span>
          <p>
            Complimentary farm fresh sample Turmeric powder with all orders.
          </p>
        </div>
      </div>

      {/* ====================== HERO SECTION ======================== */}
      <section className="relative bg-gray-900 min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="Organic Farm Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-green-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center py-12 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-3">
                  100% Healthy & Tasty
                </h1>

                <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-green-400 mb-6">
                  ORGANIC FOOD
                </h2>
              </motion.div>

              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10"
              >
                A place where we help you buy fresh, tasty, and nutrient-rich
                grocery products sourced directly from organic farms.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  to="/products"
                  className="px-8 sm:px-10 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-lg sm:text-xl rounded-full shadow-xl transition-all transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== STATS SECTION ======================== */}
      <section className="bg-green-600 text-white py-14 sm:py-16 font-body">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "17+", label: "Total Products" },
              { value: "5000+", label: "Satisfied Clients" },
              { value: "50+", label: "Years of Trust" },
              { value: "100%", label: "Organic Guarantee" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
                  {stat.value}
                </p>
                <p className="font-body text-sm sm:text-lg opacity-90 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PRODUCTS SECTION ======================== */}
      <section
        id="products"
        className="py-12 sm:py-20 md:py-24 bg-white font-body"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Best Sellers
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-body">
              Discover our most popular spices, carefully selected for their
              exceptional quality and flavor.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {products.slice(0, 5).map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-body font-semibold rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              View All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ======================== */}
      <section className=" mt-8 py-12 sm:py-20 bg-gray-50 font-body">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm sm:text-base md:text-lg font-body">
              Jack Pepper Farms is your trusted partner for authentic wellness
              products like Moringa capsules, Moringa leaf powder,Black pepper,
              Jackfruit products, premium Cashewnuts and select spices sourced
              from hightsnges of western ghats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: LeafIcon,
                title: "Farm Fresh",
                desc: "Directly from our organic farms to your kitchen, ensuring maximum freshness.",
              },
              {
                icon: QualityIcon,
                title: "Premium Quality",
                desc: "Hand-picked, carefully graded spices for authentic taste and purity.",
              },
              {
                icon: TruckIcon,
                title: "Fast Delivery",
                desc: "Quick and safe delivery with perfect packaging every time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== FAQ ======================== */}
      <FaqSection />

      {/* ====================== WHATSAPP BUTTON ======================== */}
      <WhatsAppButton />
    </motion.div>
  );
};

export default Home;
