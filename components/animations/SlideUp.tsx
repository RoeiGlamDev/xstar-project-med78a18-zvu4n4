import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className="transform transition-transform duration-500 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <header className="text-center p-6">
        <h1 className="text-4xl font-bold text-orange-600">Welcome to luxury LRP cosmetics</h1>
        <p className="mt-2 text-lg text-gray-700">
          Indulge in the elegance of our luxurious cosmetic collection, crafted for the discerning individual.
        </p>
      </header>
      <main className="flex flex-col items-center">
        <SlideUp>
          <section className="p-8 bg-orange-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-semibold text-orange-600">Our Collection</h2>
            <p className="mt-4 text-md text-gray-600">
              Experience the finest in beauty with our range of high-end cosmetics, designed to enhance your natural beauty.
            </p>
          </section>
        </SlideUp>
        <SlideUp delay={0.2}>
          <section className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mt-6">
            <h2 className="text-3xl font-semibold text-orange-600">Featured Products</h2>
            <ul className="mt-4 space-y-2">
              <li className="text-md text-gray-600">✨ Luxe Liquid Foundation</li>
              <li className="text-md text-gray-600">✨ Radiant Glow Highlighter</li>
              <li className="text-md text-gray-600">✨ Velvet Matte Lipstick</li>
            </ul>
          </section>
        </SlideUp>
      </main>
      <footer className="mt-12 text-center p-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;