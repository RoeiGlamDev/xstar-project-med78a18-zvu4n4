import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  name: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    name: 'Luxury Glow Package',
    price: '$150',
    features: [
      'Premium skincare consultation',
      'Customized product selection',
      'Exclusive samples',
      'Free shipping on orders over $100',
    ],
  },
  {
    name: 'Radiance Luxe Bundle',
    price: '$250',
    features: [
      'All features from Glow Package',
      'Personalized makeup session',
      'Luxury gift box packaging',
      'Loyalty points for future purchases',
    ],
  },
  {
    name: 'Ultimate Indulgence Experience',
    price: '$500',
    features: [
      'All features from Radiance Bundle',
      'Private shopping experience',
      'VIP access to new product launches',
      'Complimentary skincare products',
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the Luxury Glow Package?',
    answer: 'The Luxury Glow Package includes a premium skincare consultation, customized product selection, exclusive samples, and free shipping on orders over $100.',
  },
  {
    question: 'Can I customize my bundle?',
    answer: 'Absolutely! We encourage customization to ensure you receive products that suit your individual needs.',
  },
  {
    question: 'How can I earn loyalty points?',
    answer: 'You can earn loyalty points with every purchase, which can be redeemed on future orders.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Pricing at luxury LRP cosmetics
      </motion.h1>
      
      <motion.div className="min-w-full rounded-lg border-collapse shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="p-4">Package</th>
            <th className="p-4">Price</th>
            <th className="p-4">Features</th>
          </tr>
        </thead>
        <tbody>
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              className="border-b hover:bg-orange-100 transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <td className="p-4">{option.name}</td>
              <td className="p-4">{option.price}</td>
              <td className="p-4">
                <ul className="list-disc list-inside">
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

      <motion.div
        className="text-3xl font-semibold text-center mt-10 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mt-5">
        {FAQ.map((item, index) => (
          <div key={index} className="mb-4 p-4 border border-orange-200 rounded-lg">
            <h3 className="font-semibold">{item.question}</h3>
            <p className="text-orange-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;