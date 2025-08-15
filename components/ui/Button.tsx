import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', onClick, children }) => {
  const baseClasses = 'focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300 ease-in-out';
  const sizeClasses = size === 'small' ? 'py-2 px-4 text-sm' : size === 'large' ? 'py-4 px-8 text-lg' : 'py-3 px-6 text-md';
  const variantClasses = variant === 'primary' ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-100';

  return (
    <motion.div
      className={`${baseClasses`} ${sizeClasses} ${variantClasses}}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      aria-label={Button for luxury LRP cosmetics: ${children}}
    >
      {children}
    </motion.button>
  );
};

export default Button;