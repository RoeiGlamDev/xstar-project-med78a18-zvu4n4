import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-4"
    >
      {children}
    </motion.div>
  );
};

const Header: React.FC = () => (
  <header className="bg-white text-orange-500 p-6 shadow-lg">
    <h1 className="text-4xl font-bold">luxury LRP cosmetics</h1>
    <p className="text-lg mt-2">Elevate your beauty with our luxurious products.</p>
  </header>
);

const ProductSection: React.FC = () => (
  <section className="flex flex-col items-center bg-orange-500 text-white p-8">
    <h2 className="text-3xl font-semibold mb-4">Our Signature Collection</h2>
    <p className="text-lg mb-6">Experience the opulence of our carefully curated cosmetics designed for the discerning customer.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FadeIn>
        <div className="bg-white text-orange-500 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl">Luxury Lipstick</h3>
          <p>Indulge in rich, creamy textures with our exquisite lipstick range.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="bg-white text-orange-500 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl">Silk Foundation</h3>
          <p>Achieve a flawless complexion with our luxurious silk foundation.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="bg-white text-orange-500 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl">Radiant Highlighter</h3>
          <p>Illuminate your features with our stunning radiant highlighter.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-white text-orange-500 p-6 text-center">
    <p className="text-lg">© 2023 luxury LRP cosmetics. All rights reserved.</p>
    <p>Follow us on social media for the latest updates!</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default App;