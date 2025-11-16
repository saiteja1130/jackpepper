import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-green-600 pt-32 pb-20 text-white">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-12" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="mt-3 text-lg text-white/90">We'd love to hear from you!</p>
          <div className="mt-6 w-24 h-1.5 bg-white/50 mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/20"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg shadow-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white text-white transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg shadow-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white text-white transition"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg shadow-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white text-white transition resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-green-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;