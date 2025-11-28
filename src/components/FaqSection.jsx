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
      question: "Are your products organic and naturally grown?",
      answer:
        "All our Products are grown using natural farming practices without harmful chemicals. To ensure abundant supply of organic manure we maintain our own dairy farm.",
    },
    {
      question: "Do you provide PAN India shipping?",
      answer:
        "Yes, we ship across India with fast delivery. Orders are safely packed to maintain freshness and quality during transit.",
    },
    {
      question: "What type of products do  you supply?",
      answer:
        "Our black pepper, jackfruit products, Moringa capsules and powder are sourced from our own organic farm. Other spices are sourced directly from farmers of western ghats..",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
            src={imageUrls.logo}
            alt="Pepper Farm"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 w-full">
          <p className="text-green-600 text-sm font-semibold tracking-wide font-roboto">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h1 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mt-2 leading-tight">
            Everything You Need to Know
          </h1>

          <p className="text-slate-500 mt-3 mb-6 text-sm font-roboto">
            Learn more about our premium-quality wellness products like Moringa
            capsules, Moringa leaf powder, Black pepper, Jackfruit products,
            premium Cashewnuts, and select spices sourced from high ranges of
            western ghats.
          </p>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-slate-200 py-4 cursor-pointer select-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {/* Question Row */}
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-merriweather font-medium text-gray-800">
                  {faq.question}
                </h3>

                {/* Arrow */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className={`${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  } transition-transform duration-500 ease-in-out`}
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
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-slate-600 leading-relaxed font-roboto">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
