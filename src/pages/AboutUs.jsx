import React from "react";
import { LOGO_URL } from "../data/constants";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10 font-body">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img src={LOGO_URL} alt="Jack Pepper Farms Logo" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg text-gray-700 mb-4">
            My entrepreneur journey started in 2019 when I started cultivation of jackfruit trees and Black pepper viens in the inherited land in Kerala. There were few coconut trees and some 55 year old yielding Black pepper plants in the property planted by my father(Late). For organic manure a dairy unit was started.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            During my stay in US with my daughter I came to know about the very large Moringa farms in Florida and extensive use of Moringa powder and capsules in US by health conscious citizens.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Once the trees started bearing fruit I thought of Online marketing the harvest. Slowly JACKPEPPERFARMS was evolved to cater to the growing needs of quality organic wellness products for the busy city dwellers at reasonable rates.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            All the products helps to control Diabetes, hypertension, back and joint pain etc. They are rich in antioxidants, plant protein, fibre, vitamins, amino acids, potassium, iron, calcium etc. These wellness products boosts energy and improves immunity.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Some of these products helps to increase skin radiance, hair growth and helps weight loss. This is a natural way to good health.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I look forward to your wholehearted support.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Information</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>GST No:</strong> 29ACFPR9313J1Z4
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>FSSAI License No:</strong> 212225191000407
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Sales Policy:</strong> We operate on an online retail basis only. We do not engage in wholesale sales.
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Packaging:</strong> Our products are packaged for individual online retail. We do not offer specific product packaging options beyond our standard retail packaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
