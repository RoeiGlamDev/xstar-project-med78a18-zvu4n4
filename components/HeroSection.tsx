import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-500 to-white">
      <div className="text-center p-8">
        <motion.div 
          className="text-5xl font-bold text-orange-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Luxury LRP Cosmetics
        </motion.h1>
        <motion.div 
          className="text-2xl text-white mb-6"
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Elevate Your Beauty with Our Premium Cosmetic Solutions
        </motion.h2>
        <p className="text-white mb-8">
          Discover our exquisite range of luxury cosmetics that enhance your natural beauty. 
          Experience the elegance and sophistication that only luxury LRP cosmetics can offer.
        </p>
        <motion.div 
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
        <motion.div 
          className="ml-4 bg-transparent border-2 border-orange-500 text-orange-500 font-semibold py-3 px-6 rounded-lg transition-transform transform hover:bg-orange-500 hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;