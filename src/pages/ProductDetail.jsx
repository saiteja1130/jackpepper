// Premium Responsive + Balanced Typography ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/constants.js";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { ArrowLeftIcon } from "../components/icons/ArrowLeftIcon.jsx";
import { QualityIcon } from "../components/icons/QualityIcon.jsx";
import { TruckIcon } from "../components/icons/TruckIcon.jsx";
import { LeafIcon } from "../components/icons/LeafIcon.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [activeTab, setActiveTab] = useState("description");
  const [thumbnail, setThumbnail] = useState(
    product?.imageUrl || product?.bannerImageUrl || ""
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 font-sans">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 leading-tight">
          Product not found!
        </h2>
        <Link
          to="/"
          className="text-green-600 hover:underline text-base sm:text-lg"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <motion.div
      className="container mx-auto pb-10 sm:pb-12 md:pb-16 font-sans"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <div className="mb-6 sm:mb-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-green-600 
                     font-medium transition-colors group text-sm sm:text-base"
        >
          <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* PRODUCT LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
        {/* LEFT: PRODUCT IMAGE */}
        <div className="lg:col-span-5">
          <motion.div
            className="rounded-3xl overflow-hidden  bg-white border border-green-200 
                       p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-4 items-start flex-col sm:flex-row">
              <div className="flex flex-row w-full sm:w-1/4 justify-center sm:justify-start sm:flex-col gap-3">
                {[product?.imageUrl, product?.bannerImageUrl]
                  .filter(Boolean)
                  .map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setThumbnail(img)}
                      className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="mx-auto w-20 h-20 object-cover"
                      />
                    </div>
                  ))}
              </div>

              <div className="w-full border border-gray-100 rounded overflow-hidden flex items-center justify-center">
                <img
                  src={thumbnail || product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto max-h-[55vh] sm:max-h-[65vh] md:max-h-[70vh] object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: DETAILS */}
        <motion.div
          className="lg:col-span-7 space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {product.name}
          </h1>

          <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-5 tracking-tight">
            <p className="text-lg sm:text-xl font-semibold text-gray-900">
              Product Overview
            </p>

            <p className="text-base sm:text-lg">{product.description}</p>

            <p className="text-base sm:text-lg">
              Naturally processed and sourced directly{" "}
              {!product?.isshow
                ? "from farms of the Western Ghats"
                : "from our own organic farm"}{" "}
              ensuring pure, fresh and chemical-free quality.
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-base sm:text-lg">
              <li>100% Natural & Chemical Free</li>
              <li>Farm-fresh with rich aroma</li>
              <li>Traditional sun-drying & processing</li>
            </ul>
          </div>

          {/* PRICE */}
          <div className="flex items-baseline gap-3 sm:gap-4">
            {product.mrp !== product.offerPrice && (
              <p className="text-2xl sm:text-3xl text-gray-500 line-through font-semibold">
                {product.mrp}
              </p>
            )}
            <p className="text-4xl sm:text-5xl font-extrabold text-green-600 tracking-tight">
              {product.offerPrice}
            </p>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            Quantity: {product.quantity}
          </p>

          {/* Return Policy */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Return Policy
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              Any damaged product will be replaced within 10 days of receipt of
              complaint.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-2">
              Customer care mobile:{" "}
              <a
                href="tel:8073781750"
                className="text-green-600 hover:underline"
              >
                8073781750
              </a>
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Email:{" "}
              <a
                href="mailto:jackpepperfarms@gmail.com"
                className="text-green-600 hover:underline"
              >
                jackpepperfarms@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* READY TO ORDER CTA */}
      <motion.div
        className="mt-12 sm:mt-16 md:mt-20 w-full bg-linear-to-br from-green-600 to-green-400 
                   rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 lg:p-16 text-white font-sans"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-5 sm:mb-6 text-center tracking-tight">
          Ready to Order?
        </h3>

        <p
          className="text-center text-base sm:text-lg max-w-2xl mx-auto opacity-90 
                      mb-8 sm:mb-10 leading-relaxed"
        >
          Place your order instantly through WhatsApp. Fast response • Quick
          delivery • Premium quality guaranteed.
        </p>

        <div className="w-max mx-auto">
          <WhatsAppButton
            productName={product.name}
            className="w-full justify-center bg-white text-green-700 hover:bg-gray-100 

                         py-3 sm:py-4 text-lg sm:text-xl rounded-2xl font-bold shadow-lg"
          />
        </div>

        {/* Order Details Section */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all">
            <h4 className="text-xl font-bold mb-3">Delivery & Discounts</h4>
            <ul className="space-y-2">
              <li>All orders above Rs 750 free delivery.</li>
              <li>Below Rs 70 courier charges.</li>
              <li>
                All orders above Rs 1500 get a 5% discount plus free delivery.
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-all">
            <h4 className="text-xl font-bold mb-3">Taxes & Extras</h4>
            <ul className="space-y-2">
              <li>5% GST extra on all products except jackfruit items.</li>
              <li>
                Complimentary farm fresh sample of Turmeric powder with all
                orders.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 sm:mt-12 flex justify-center gap-8 sm:gap-12 md:gap-20 

                          text-sm sm:text-lg font-medium"
        >
          <div className="flex items-center gap-3">
            <QualityIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />

            <span>Premium Quality</span>
          </div>{" "}
          <div className="flex items-center gap-3">
            <TruckIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <span>Fast Delivery</span>
          </div>
        </div>
      </motion.div>

      {/* RELATED PRODUCTS */}
      <motion.section
        className="mt-16 sm:mt-20 md:mt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 tracking-tight">
          Related Products
        </h2>
        <div className="mt-3 sm:mt-4 w-24 sm:w-28 h-1.5 bg-green-600 mx-auto rounded-full"></div>

        <div
          className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
                        lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
        >
          {relatedProducts.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="mt-8 py-12 sm:py-20 bg-gray-50 font-sans">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Why Choose Us
            </h2>
            <div className="mt-4 w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
            <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Jack Pepper Farms is your trusted partner for authentic spices. We
              deliver healthy, flavorful, and premium-quality products.
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed tracking-tight">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductDetail;
