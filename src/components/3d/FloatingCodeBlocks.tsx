import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

interface CodeBlockProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
  text: string;
  scale?: number;
}

function CodeBlock({ position, rotation = [0, 0, 0], color, scale = 1 }: Omit<CodeBlockProps, 'text'>) {
  const meshRef = useRef<THREE.Mesh>(null);
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
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.8}
        />
        {/* Border glow effect */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 1.2, 0.1)]} />
          <lineBasicMaterial color={color} transparent opacity={0.6} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

function FloatingNode({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
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
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function ConnectionLine({ start, end, color }: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const lineRef = useRef<THREE.Line>(null);
  
  const lineGeometry = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [start, end]);

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.2 });
  }, [color]);

  return <primitive ref={lineRef} object={new THREE.Line(lineGeometry, lineMaterial)} />;
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

  const codeBlocks = [
    { position: [-3, 1, -2] as [number, number, number], color: "#8b5cf6", scale: 0.8 },
    { position: [2.5, 0.5, -1] as [number, number, number], color: "#06b6d4", scale: 0.9 },
    { position: [-1.5, -1, -3] as [number, number, number], color: "#3b82f6", scale: 0.7 },
    { position: [3, -0.5, -2.5] as [number, number, number], color: "#a855f7", scale: 0.6 },
    { position: [-2.5, 0, -1.5] as [number, number, number], color: "#22d3ee", scale: 0.75 },
  ];

  const nodes = [
    { position: [0, 2, -1] as [number, number, number], color: "#8b5cf6" },
    { position: [-2, -1.5, -2] as [number, number, number], color: "#06b6d4" },
    { position: [2, 1.5, -1.5] as [number, number, number], color: "#3b82f6" },
    { position: [-1, 0.5, -2.5] as [number, number, number], color: "#a855f7" },
    { position: [1.5, -1, -1] as [number, number, number], color: "#22d3ee" },
  ];

  return (
    <group ref={groupRef}>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
      <pointLight position={[5, -5, 5]} intensity={0.3} color="#06b6d4" />

      {/* Code blocks */}
      {codeBlocks.map((block, i) => (
        <CodeBlock key={i} {...block} />
      ))}

      {/* Floating nodes */}
      {nodes.map((node, i) => (
        <FloatingNode key={i} {...node} />
      ))}

      {/* Connection lines */}
      <ConnectionLine start={nodes[0].position} end={nodes[2].position} color="#8b5cf6" />
      <ConnectionLine start={nodes[1].position} end={nodes[3].position} color="#06b6d4" />
      <ConnectionLine start={nodes[2].position} end={nodes[4].position} color="#3b82f6" />
      <ConnectionLine start={nodes[0].position} end={nodes[4].position} color="#a855f7" />
    </group>
  );
}

export function FloatingCodeBlocks() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
