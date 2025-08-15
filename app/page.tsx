import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="hero-content flex flex-col items-center justify-center h-screen text-center">
          <motion.div
            className="text-6xl font-bold text-orange-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            luxury LRP cosmetics
          </motion.h1>
          <motion.div
            className="mt-4 text-xl text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Elevate your beauty routine with our luxurious cosmetics tailored for the discerning individual.
          </motion.p>
          <motion.div
            className="mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Premium Quality</h3>
            <p className="mt-2 text-gray-600">
              Our products are crafted with the finest ingredients to ensure a luxurious experience.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Elegant Packaging</h3>
            <p className="mt-2 text-gray-600">
              Each product is elegantly packaged to reflect the luxury of luxury LRP cosmetics.
            </p>
          </motion.div>
          <motion.div
            className="bg-orange-100 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Luxurious Experience</h3>
            <p className="mt-2 text-gray-600">
              Indulge in a beauty experience that exudes sophistication and elegance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const LuxuryLRPCosmeticsHomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default LuxuryLRPCosmeticsHomePage;