import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  width: number;
  height: number;
}

const Scene: React.FC<SceneProps> = ({ width, height }) => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    document.getElementById('3d-canvas')?.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xffa500 }); // orange
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.AmbientLight(0xffffff, 1);
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
      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div id="3d-canvas" className="w-full h-full">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#FFA500" />
        </mesh>
      </Canvas>
    </div>
  );
};

const LuxuryCosmeticsScene: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-5xl font-bold text-orange-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to luxury LRP cosmetics
      </motion.h1>
      <motion.div
        className="text-xl text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Discover our exclusive range of high-end cosmetics designed for the discerning individual.
      </motion.p>
      <motion.div
        className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-200 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
      <div className="w-full h-96 mt-10">
        <Scene width={window.innerWidth} height={400} />
      </div>
    </div>
  );
};

export default LuxuryCosmeticsScene;