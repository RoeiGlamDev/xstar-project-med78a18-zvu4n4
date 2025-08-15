import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Premium Quality',
    description: 'Experience the unparalleled quality of our luxury LRP cosmetics, crafted with the finest ingredients for flawless beauty.',
    icon: '🌟',
  },
  {
    title: 'Luxury Packaging',
    description: 'Our products come in elegantly designed packaging that reflects the sophistication and luxury of the luxury LRP brand.',
    icon: '📦',
  },
  {
    title: 'Cruelty-Free',
    description: 'At luxury LRP cosmetics, we are committed to ethical beauty, ensuring that all our products are cruelty-free.',
    icon: '🐰',
  },
  {
    title: 'Personalized Consultations',
    description: 'Enjoy personalized beauty consultations with our expert team, designed to cater to your individual beauty needs.',
    icon: '💄',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-orange-600">Discover Our Features</h2>
        <p className="text-lg mb-12 text-gray-700">Explore the luxurious offerings of luxury LRP cosmetics tailored for the discerning beauty enthusiast.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;