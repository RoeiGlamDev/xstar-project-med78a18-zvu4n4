import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyInfo: {
    address: string;
    phone: string;
    email: string;
  };
  socialMediaLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

const Footer: React.FC<FooterProps> = ({ companyInfo, socialMediaLinks }) => {
  return (
    <footer className="bg-white text-orange-600 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <motion.div
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            luxury LRP cosmetics
          </motion.h2>
          <p className="text-lg">
            Elevate your beauty routine with our luxurious products.
          </p>
          <p className="text-sm mt-2">{companyInfo.address}</p>
          <p className="text-sm">{companyInfo.phone}</p>
          <p className="text-sm">{companyInfo.email}</p>
        </div>
        <div className="flex flex-col">
          <motion.div
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Follow Us
          </motion.h3>
          <div className="flex space-x-4">
            <motion.div
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Facebook
            </motion.a>
            <motion.div
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Instagram
            </motion.a>
            <motion.div
              href={socialMediaLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Twitter
            </motion.a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;