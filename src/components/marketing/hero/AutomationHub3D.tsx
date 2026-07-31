'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function AutomationMechanism() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2());
  const targetRotation = useRef(new THREE.Vector2());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handlePointerMove = (e: MouseEvent) => {
      // Normalize pointer coordinates to -1 to +1
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Interaction limits:
    // pointer tilt no more than approximately 3 degrees (0.05 rad)
    // scroll rotation no more than approximately 10 degrees (0.17 rad)
    
    // Target rotation based on pointer (tilt)
    targetRotation.current.x = pointer.current.y * 0.05;
    targetRotation.current.y = pointer.current.x * 0.05;

    // Add scroll rotation effect (reveal internal path)
    // 0 to 10 degrees based on scroll position
    const scrollEffect = Math.min(scrollY / 1000, 1) * 0.17;
    targetRotation.current.y += scrollEffect;

    // Smoothly interpolate to target rotation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, 0.05);
  });

  // Copper pathway logic
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.5, 0, 1),
      new THREE.Vector3(-0.5, 0.5, 0.5),
      new THREE.Vector3(0, -0.2, 0),
      new THREE.Vector3(0.5, 0.8, -0.5),
      new THREE.Vector3(1.5, -0.5, -1)
    ]);
  }, []);

  // Moving light along path
  const lightRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (lightRef.current) {
      const time = (state.clock.elapsedTime * 0.2) % 1;
      const point = curve.getPoint(time);
      lightRef.current.position.copy(point);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base Machined Metal Chassis */}
      <RoundedBox args={[4, 0.2, 4]} radius={0.05} smoothness={4} position={[0, -1, 0]}>
        <meshStandardMaterial color="#1A1A18" metalness={0.9} roughness={0.2} />
      </RoundedBox>

      <RoundedBox args={[3.8, 1.5, 3.8]} radius={0.1} smoothness={4} position={[0, -0.15, 0]}>
        <meshStandardMaterial color="#11120F" metalness={0.8} roughness={0.4} />
      </RoundedBox>

      {/* Internal Automation Path (Copper) */}
      <mesh>
        <tubeGeometry args={[curve, 64, 0.03, 8, false]} />
        <meshStandardMaterial color="#B8774F" metalness={0.6} roughness={0.3} emissive="#4A2A1A" emissiveIntensity={0.2} />
      </mesh>

      {/* Moving Signal Light */}
      <mesh ref={lightRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#E9E3D8" />
        <pointLight color="#E9E3D8" intensity={2} distance={2} />
      </mesh>

      {/* Warm Translucent Cover */}
      <RoundedBox args={[3.4, 2, 3.4]} radius={0.2} smoothness={8} position={[0, 0.2, 0]}>
        <MeshTransmissionMaterial 
          backside 
          samples={4} 
          thickness={0.5} 
          chromaticAberration={0.025} 
          anisotropy={0.1} 
          distortion={0.1} 
          distortionScale={0.1} 
          temporalDistortion={0.0} 
          color="#D8D0C3"
          transmission={0.9}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Mechanical Gates/Modules */}
      <RoundedBox args={[0.8, 0.4, 0.8]} radius={0.05} position={[-1, 0, 0.5]}>
         <meshStandardMaterial color="#20211C" metalness={0.5} roughness={0.6} />
      </RoundedBox>
      <RoundedBox args={[0.6, 0.3, 0.6]} radius={0.05} position={[1, 0.5, -0.5]}>
         <meshStandardMaterial color="#20211C" metalness={0.5} roughness={0.6} />
      </RoundedBox>
    </group>
  );
}

// Fallback for reduced motion or WebGL failure
function FallbackImage() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-bg-surface/50 rounded-2xl border border-border">
      <div className="text-text-muted text-sm font-display flex flex-col items-center gap-4">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M8 6h8" />
          <path d="M8 10h8" />
          <path d="M8 14h4" />
        </svg>
        <span>Automation Mechanism</span>
      </div>
    </div>
  );
}

export default function AutomationHub3D() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return (
      <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
        <FallbackImage />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-visible">
      {/* Dynamic import ensures Canvas only loads on client and doesn't cause hydration errors */}
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]} /* Cap at 2 for performance */
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#E9E3D8" />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#B8774F" />
        
        <AutomationMechanism />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
