import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia R.',
    review: 'Luxury LRP cosmetics transformed my skincare routine. The hydration and glow I get from their products is unmatched!',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Emma T.',
    review: 'I’ve never felt more confident. The quality of these cosmetics is incredible, and the packaging feels so luxurious!',
    rating: 4,
    photo: '/images/testimonials/emma.jpg',
  },
  {
    name: 'Olivia K.',
    review: 'The shade selection is perfect for my skin tone! I love how the products feel on my skin - so lightweight and smooth.',
    rating: 5,
    photo: '/images/testimonials/olivia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">What Our Clients Say About Luxury LRP Cosmetics</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{testimonial.name}</h3>
              <p className="text-gray-600 my-2">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-orange-600">&#9733;</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;