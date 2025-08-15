import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });
  const [errors, setErrors] = useState<Partial<ContactFormProps>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormProps> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <motion.div
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact luxury LRP cosmetics
      </motion.h2>
      <p className="text-lg text-gray-700 mb-4">
        For inquiries about our luxurious products, please fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            id="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Product Information">Product Information</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={mt-1 block w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500}
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
        <motion.div
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10">
        <h3 className="text-xl font-bold text-orange-600">Contact Information</h3>
        <p className="text-gray-700">Luxury LRP Cosmetics<br />123 Luxury Lane<br />Beauty City, BC 12345<br />Email: contact@luxurylrpcosmetics.com<br />Phone: (123) 456-7890</p>
        <h4 className="text-lg font-semibold text-orange-600 mt-4">Business Hours</h4>
        <p className="text-gray-700">Monday - Friday: 9 AM - 5 PM<br />Saturday: 10 AM - 4 PM<br />Sunday: Closed</p>
      </div>
    </div>
  );
};

export default ContactSection;