import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface ImageCardProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  imageUrl: string;
  scale?: number;
}

function ImageCard({ position, rotation = [0, 0, 0], imageUrl, scale = 1 }: ImageCardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useFrame((state) => {
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <planeGeometry args={[3, 4]} />
        <meshStandardMaterial
          map={texture}
          transparent
          opacity={0.9}
          roughness={0.1}
          metalness={0.2}
        />
        {/* Border glow effect */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(3, 4)]} />
          <lineBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useFrame((state) => {
    if (groupRef.current && !reducedMotion) {
      // Very slow idle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      // Subtle parallax on mouse move
      groupRef.current.rotation.y += (mouse.x * 0.02 - groupRef.current.rotation.y * 0.1) * 0.01;
      groupRef.current.rotation.x += (mouse.y * 0.02 - groupRef.current.rotation.x * 0.1) * 0.01;
    }
  });

  const imageCards = [
    { position: [-4, 2, -3] as [number, number, number], imageUrl: "/vijay.png", scale: 0.8 },
    { position: [4, -1, -2] as [number, number, number], imageUrl: "/vijay.png", scale: 0.9 },
    { position: [0, 1, -4] as [number, number, number], imageUrl: "/vijay.png", scale: 0.7 },
  ];

  return (
    <group ref={groupRef}>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8b5cf6" />
      <pointLight position={[5, -5, 5]} intensity={0.4} color="#06b6d4" />

      {/* Image cards */}
      {imageCards.map((card, i) => (
        <ImageCard key={i} {...card} />
      ))}
    </group>
  );
}

export function FloatingImageCards() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}