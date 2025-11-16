import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Footer from "./components/Footer.jsx";
import AllProducts from "./pages/AllProducts.jsx";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-light-green text-gray-800">
      <Header />
      <main className="pt-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/products" element={<AllProducts />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
