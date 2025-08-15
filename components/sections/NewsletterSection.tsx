import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  title = 'Join the Luxury LRP Cosmetics Family',
  subtitle = 'Subscribe for exclusive offers and the latest beauty trends',
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic to handle email submission goes here
    setSubmitted(true);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-orange-600 text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      {submitted ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700">Thank you for subscribing!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 transition duration-300 mb-4"
          />
          <button
            type="submit"
            className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default NewsletterSection;