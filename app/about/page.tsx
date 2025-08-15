import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Williams',
    role: 'Founder & CEO',
    image: '/images/sophia.jpg',
  },
  {
    name: 'James Anderson',
    role: 'Creative Director',
    image: '/images/james.jpg',
  },
  {
    name: 'Olivia Brown',
    role: 'Head of Marketing',
    image: '/images/olivia.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">About luxury LRP cosmetics</h1>
        <p className="text-lg">
          At luxury LRP cosmetics, we believe that beauty is an art form. Founded in 2020, our mission is to create luxurious, high-quality cosmetics that empower individuals to express their unique beauty. Our products are meticulously crafted using the finest ingredients, ensuring that every application feels indulgent and transformative.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-semibold mb-6">Our History</h2>
        <p className="text-lg">
          From humble beginnings, luxury LRP cosmetics has grown into a prestigious name in the beauty industry. Our founder, Sophia Williams, envisioned a brand that combines elegance with innovation, delivering unparalleled experiences to our customers. Over the years, we have expanded our product range and embraced sustainable practices, ensuring that luxury can also be eco-conscious.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Quality: We prioritize the highest standards in our products.</li>
          <li>Innovation: We constantly strive to push the boundaries of beauty.</li>
          <li>Inclusivity: Our products are made for everyone, celebrating diversity.</li>
          <li>Sustainability: We commit to eco-friendly practices in our operations.</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-orange-100 rounded-lg p-4 text-center transition-transform transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;