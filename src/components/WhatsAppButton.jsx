import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER, GENERAL_ENQUIRY_MESSAGE } from '../data/constants.jsx';
import { WhatsAppIcon } from './icons/WhatsAppIcon.jsx';

const WhatsAppButton = ({ productName }) => {
  const message = productName
    ? `Hello, I'm interested in your product: ${productName}.`
    : GENERAL_ENQUIRY_MESSAGE;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  
  const isProductPage = !!productName;

  if (isProductPage) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="text-lg">Enquire on WhatsApp</span>
      </a>
    )
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-green-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
};

export default WhatsAppButton;