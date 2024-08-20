'use client'
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

const Robot = () => {
  const { animations, scene } = useGLTF('/robot_playground/scene.gltf');
  const { actions } = useAnimations(animations, scene);

  // State for responsive scale and position
  const [scale, setScale] = useState(2.5);
  const [position, setPosition] = useState([0, -2.5, 0]);

  // Function to update scale and position based on media queries
  const updateScaleAndPosition = () => {
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const tabletQuery = window.matchMedia('(max-width: 768px)');
    const laptopQuery = window.matchMedia('(max-width: 1024px)');

    if (mobileQuery.matches) {
      setScale(4.5);
      setPosition([0, -4.5, 0]);
    } else if (tabletQuery.matches) {
      setScale(3.5);
      setPosition([0, -5.5, 0]);
    } else if (laptopQuery.matches) {
      setScale(2);
      setPosition([0, -3.5, 0]);
    } else {
      setScale(2.5);
      setPosition([0, -2.5, 0]);
    }
  };

  useEffect(() => {
    // Initial scale and position update
    updateScaleAndPosition();

    // Add listeners for media queries
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    const tabletQuery = window.matchMedia('(max-width: 768px)');
    const laptopQuery = window.matchMedia('(max-width: 1024px)');

    mobileQuery.addEventListener('change', updateScaleAndPosition);
    tabletQuery.addEventListener('change', updateScaleAndPosition);
    laptopQuery.addEventListener('change', updateScaleAndPosition);

    // Clean up listeners on component unmount
    return () => {
      mobileQuery.removeEventListener('change', updateScaleAndPosition);
      tabletQuery.removeEventListener('change', updateScaleAndPosition);
      laptopQuery.removeEventListener('change', updateScaleAndPosition);
    };
  }, []);

  useEffect(() => {
    if (actions) {
      // Automatically play all animations in a loop
      Object.keys(actions).forEach((key) => {
        actions[key].reset().play();
        actions[key].setLoop(THREE.LoopRepeat, Infinity);
      });
    }

    // Clean up on component unmount
    return () => {
      if (actions) {
        Object.keys(actions).forEach((key) => {
          actions[key].stop();
        });
      }
    };
  }, [actions]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        penumbra={1}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="always" // Ensure continuous updates for smooth animation
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2}
        />
        <Robot />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
