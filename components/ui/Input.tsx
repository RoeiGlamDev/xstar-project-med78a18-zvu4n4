import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  
  return (
    <div className="flex flex-col mb-4">
      <label className="text-xl text-white mb-2 font-semibold">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 rounded-lg p-3 transition duration-300 ease-in-out ${
          isFocused ? 'border-orange-500' : 'border-white'
        } bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {required && !value && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
  );
};

export default Input;