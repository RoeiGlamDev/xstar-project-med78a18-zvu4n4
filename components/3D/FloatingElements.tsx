import { useEffect, useRef } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const mountRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 'orange', metalness: 0.9, roughness: 0.1 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(...position);
    scene.add(sphere);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [position]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

const FloatingElements: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <motion.div
        className="text-5xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-lg text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Experience the epitome of elegance and sophistication in cosmetics. Discover our luxurious products designed to enhance your beauty.
      </motion.p>
      <FloatingElement position={[0, 1, -2]} />
      <FloatingElement position={[-1, 0, -3]} />
      <FloatingElement position={[1, -1, -2]} />
    </div>
  );
};

export default FloatingElements;