'use client'
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import Loader from '../Loader';

// Robot component that accepts a modelPath prop
const Robot = ({ isMobile }) => {
  const { animations, scene } = useGLTF('/robot_playground/scene.gltf');
  const { actions } = useAnimations(animations, scene);

  // State for responsive scale and position
  // const [scale, setScale] = useState(2.0);
  // const [position, setPosition] = useState([0, -0.9, 0]);






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
      <hemisphereLight intensity={2.15} groundColor="black" />
      <spotLight
        position={[10, -10, 5]}
        penumbra={1}
        angle={0.4}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 2.0 : 2.3}
        position={isMobile ? [0, -0.9, 0] : [0, -3.5, 0]}
        rotation={[-0.01, 1.0, 0]}
      />
    </mesh>
  );
};

// RobotCanvas component that accepts a modelPath prop and passes it to the Robot component
const RobotCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <Robot  isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
