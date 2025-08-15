import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    role: 'Founder & CEO',
    description: 'With over a decade of experience in luxury cosmetics, Sophia leads the vision and innovation at luxury LRP cosmetics.',
  },
  {
    name: 'Liam Johnson',
    role: 'Chief Product Officer',
    description: 'Liam is an expert in product formulation, ensuring that every luxury LRP cosmetics product meets the highest standards of quality and luxury.',
  },
  {
    name: 'Isabella Chen',
    role: 'Marketing Director',
    description: 'Isabella crafts the brand story of luxury LRP cosmetics, focusing on elegance and sophistication in every campaign.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="px-8 py-12 bg-white text-orange-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="mb-4">
          At luxury LRP cosmetics, we believe in the transformative power of beauty. Founded with a passion for creating high-end cosmetics, our journey began with a commitment to excellence and luxury. We source the finest ingredients to craft products that not only enhance beauty but also nourish the skin. Our dedication to quality and elegance sets us apart in the cosmetics industry.
        </p>

        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="mb-4">
          Our mission at luxury LRP cosmetics is to empower individuals to express their beauty through luxurious products. We aim to redefine the cosmetics experience by providing high-quality, innovative products that elevate beauty rituals. We are committed to sustainability and ethical practices, ensuring that our impact on the world is as beautiful as our products.
        </p>

        <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-orange-100 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-lg font-medium text-orange-500">{member.role}</p>
              <p className="mt-2 text-sm text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;