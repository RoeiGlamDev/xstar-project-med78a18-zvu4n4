import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Points = createParticles();
    scene.add(particles);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;

      colors[i * 3] = 1; // white for particles
      colors[i * 3 + 1] = 0.647; // orange
      colors[i * 3 + 2] = 0; // orange
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });
    return new THREE.Points(geometry, material);
  };

  return (
    <motion.div className="absolute inset-0 overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-orange-600">Welcome to luxury LRP cosmetics</h1>
        <p className="mt-4 text-lg text-white">Discover the elegance of premium beauty products crafted for the discerning individual.</p>
      </div>
    </motion.div>
  );
};

export default ParticleBackground;