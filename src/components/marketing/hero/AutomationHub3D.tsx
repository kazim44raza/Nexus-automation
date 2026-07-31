'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function SculpturalModule({ position, delay = 0, scale = 1, rotation = [0, 0, 0] }: { position: [number, number, number], delay?: number, scale?: number, rotation?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() + delay;
    meshRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1;
    meshRef.current.rotation.y = rotation[1] + t * 0.1;
  });

  return (
    <Float floatIntensity={0.5} rotationIntensity={0.5} speed={2}>
      <mesh ref={meshRef} position={position} rotation={new THREE.Euler(...rotation)} scale={scale}>
        {/* Abstract geometric shape (Box with bevelled-like edges, or icosahedron) */}
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial 
          backside
          samples={4}
          thickness={2}
          chromaticAberration={0.05}
          anisotropy={0.5}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#1a1c1f" // Dark obsidian/graphite base
          emissive="#7f8b78" // Muted sage glow
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function CoreNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current || !ringRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.z = t * 0.1;
    
    ringRef.current.rotation.x = Math.PI / 2;
    ringRef.current.rotation.z = -t * 0.3;
  });

  return (
    <group>
      <mesh ref={meshRef} scale={1.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color="#0d0e0f"
          roughness={0.1}
          metalness={1}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Precision mechanical ring */}
      <mesh ref={ringRef} scale={2.2}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial 
          color="#b4875b" // Aged bronze accent
          roughness={0.3}
          metalness={0.8}
          emissive="#b4875b"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function NetworkLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const points = useMemo(() => {
    const pts = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 3;
      const y = (Math.random() - 0.5) * 4;
      pts.push(
        new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r),
        new THREE.Vector3(0, 0, 0)
      );
    }
    return pts;
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#b4875b" opacity={0.15} transparent />
    </lineSegments>
  );
}

export default function AutomationHub3D() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0d0e0f']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#b4875b" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#7f8b78" />
        
        <group position={[0, -0.5, 0]}>
          <CoreNode />
          <NetworkLines />
          
          <SculpturalModule position={[3, 1, 1]} delay={0} scale={0.6} />
          <SculpturalModule position={[-2.5, 2, -2]} delay={1} scale={0.8} />
          <SculpturalModule position={[1.5, -2, -3]} delay={2} scale={0.7} />
          <SculpturalModule position={[-3, -1, 2]} delay={0.5} scale={0.5} />
          <SculpturalModule position={[0, 2.5, -1]} delay={1.5} scale={0.4} />
        </group>
        
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2} 
          far={10} 
          color="#000000"
        />
        <Environment preset="city" />
      </Canvas>
      
      {/* Overlay vignette to blend with the background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, transparent 30%, #0d0e0f 100%)'
      }} />
    </div>
  );
}
