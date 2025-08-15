import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-orange-500 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us at luxury LRP cosmetics
      </motion.h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Get in Touch</h2>
        <form className="flex flex-col">
          <label className="text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="text"
            id="name"
            name="name"
            required
          />

          <label className="text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="email"
            id="email"
            name="email"
            required
          />

          <label className="text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            id="message"
            name="message"
            rows={4}
            required
          ></textarea>

          <motion.div
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            type="submit"
          >
            Send Message
          </motion.button>
        </form>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Location</h2>
        <p className="text-gray-700 mb-2">123 Luxury Lane</p>
        <p className="text-gray-700 mb-2">Cosmetics City, CA 90210</p>
        <p className="text-gray-700 mb-4">Phone: (123) 456-7890</p>

        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Business Hours</h2>
        <p className="text-gray-700">Monday - Friday: 9 AM - 5 PM</p>
        <p className="text-gray-700">Saturday: 10 AM - 4 PM</p>
        <p className="text-gray-700">Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;