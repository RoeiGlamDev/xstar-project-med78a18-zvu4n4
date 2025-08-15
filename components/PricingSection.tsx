import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essence Glow',
    price: '$59',
    features: [
      'Luxurious foundation application',
      'Customized skincare consultation',
      'Free sample with every order',
    ],
  },
  {
    title: 'Radiant Luxe',
    price: '$99',
    features: [
      'Full makeup application',
      'Personalized beauty regimen',
      'Exclusive access to new products',
    ],
  },
  {
    title: 'Ultimate Glam',
    price: '$149',
    features: [
      'Complete makeover experience',
      'One-on-one with a top beauty expert',
      'VIP membership for exclusive offers',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">Luxury LRP Cosmetics Pricing</h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover our exclusive pricing tiers tailored for your beauty needs.
        </p>
        <div className="flex justify-center space-x-6">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.title}
              className="bg-orange-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600">{tier.title}</h3>
              <p className="text-xl font-bold text-gray-800">{tier.price}</p>
              <ul className="mt-4 text-left text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="my-2">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-orange-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-orange-500">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;