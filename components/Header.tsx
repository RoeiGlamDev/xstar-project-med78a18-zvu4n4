import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-600 font-semibold text-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={logo} alt="Luxury LRP Cosmetics Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.div
            href="#products"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.a>
          <motion.div
            href="#about"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#contact"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
          <motion.div
            href="#blog"
            className="text-orange-600 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Blog
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            className="text-orange-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;