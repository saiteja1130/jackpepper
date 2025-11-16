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
    <section id="contact" className="relative bg-green-600 pt-32 pb-24 text-white overflow-hidden">
      
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg 
          className="w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
            906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
            214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,
            56.44Z" 
            className="fill-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Heading */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-white/90">
            We'd love to hear from you!
          </p>
          <div className="mt-5 w-24 h-1.5 bg-white/60 mx-auto rounded-full"></div>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-white/20 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-lg focus:ring-2 focus:ring-white outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-lg focus:ring-2 focus:ring-white outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help you..."
                className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-lg resize-none focus:ring-2 focus:ring-white outline-none transition"
              ></textarea>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-white text-green-600 font-bold text-lg shadow-md hover:bg-gray-100 transition"
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
