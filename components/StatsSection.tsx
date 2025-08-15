import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: number;
  satisfiedClients: number;
  productsLaunched: number;
  awardsWon: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  achievements,
  satisfiedClients,
  productsLaunched,
  awardsWon,
}) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">
          Our Achievements at luxury LRP cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="bg-orange-600 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-2xl font-semibold">
              {achievements.toLocaleString()}
            </motion.h3>
            <p className="mt-2">Achievements</p>
          </motion.div>

          <motion.div
            className="bg-orange-600 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-2xl font-semibold">
              {satisfiedClients.toLocaleString()}
            </motion.h3>
            <p className="mt-2">Satisfied Clients</p>
          </motion.div>

          <motion.div
            className="bg-orange-600 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-2xl font-semibold">
              {productsLaunched.toLocaleString()}
            </motion.h3>
            <p className="mt-2">Products Launched</p>
          </motion.div>

          <motion.div
            className="bg-orange-600 p-6 rounded-lg shadow-lg text-white hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="text-2xl font-semibold">
              {awardsWon.toLocaleString()}
            </motion.h3>
            <p className="mt-2">Awards Won</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;