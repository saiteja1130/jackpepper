import React, { useState } from "react";
import { imageUrls } from "../data/constants";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of peppers do you supply?",
      answer:
        "We supply premium-quality Black Pepper, White Pepper, Green Pepper, Pink Pepper, King Pepper, and a variety of farm-fresh pepper products sourced directly from our plantations.",
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer:
        "Yes! We offer wholesale, bulk, and export pricing for retailers, distributors, and food businesses. You can contact us directly through WhatsApp or the contact form.",
    },
    {
      question: "Are your products organic and naturally grown?",
      answer:
        "All our peppers are grown using natural farming practices without harmful chemicals. We follow strict quality control to ensure purity, aroma, and freshness.",
    },
    {
      question: "Do you provide PAN India shipping?",
      answer:
        "Yes, we ship across India with fast delivery. Orders are safely packed to maintain freshness and quality during transit.",
    },
    {
      question: "Can I get customized packaging for bulk orders?",
      answer:
        "Absolutely! We provide private-label and custom packaging options for bulk buyers, restaurants, and retail brands.",
    },
  ];

  return (
    <section id="faq" className="py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10 px-4">
        {/* LEFT IMAGE */}
        <img
          className="max-w-sm w-full rounded-xl shadow-md h-auto object-cover"
          src={imageUrls.logo}
          alt="Pepper farm"
        />

        {/* RIGHT CONTENT */}
        <div className="w-full">
          <p className="text-green-600 text-sm font-semibold">FAQ's</p>
          <h1 className="text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-500 mt-2 pb-4">
            Everything you need to know about our premium-quality pepper
            products, shipping, and services.
          </p>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-gray-800">
                  {faq.question}
                </h3>

                {/* Arrow Icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`${
                    openIndex === index ? "rotate-180" : ""
                  } transition-all duration-500 ease-in-out`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Answer */}
              <p
                className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${
                  openIndex === index
                    ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
