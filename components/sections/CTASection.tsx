import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ onButtonClick }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-20 px-5">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Elevate Your Beauty with Luxury LRP Cosmetics
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Discover our exclusive range of high-end cosmetics designed to enhance your natural beauty. 
        Experience luxury like never before with luxury LRP cosmetics.
      </motion.p>
      <motion.div
        className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        onClick={onButtonClick}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </section>
  );
};

export default CTASection;