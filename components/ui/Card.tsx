import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
        <div className="absolute inset-0 bg-orange-500 opacity-30 rounded-lg"></div>
      </div>
      <h3 className="text-center text-xl font-bold text-orange-600 mt-4">{title}</h3>
      <p className="text-center text-gray-700 mt-2">{description}</p>
      <button className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition duration-300">
        Discover More
      </button>
    </motion.div>
  );
};

export default Card;