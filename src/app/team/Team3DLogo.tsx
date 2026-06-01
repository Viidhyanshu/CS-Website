"use client";
import React, { useRef, useLayoutEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const sharedMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color("#F5A623"),
  roughness: 0.35,
  metalness: 0.4,
});

function Model({ url, scale = 0.35, position = [0, 0, 0] }: { url: string; scale?: number; position?: [number, number, number] }) {
  const { scene } = useGLTF(url, true);
  const modelRef = useRef<THREE.Group>(null);
  
  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        (obj as THREE.Mesh).material = sharedMaterial;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive 
        ref={modelRef}
        object={scene} 
        scale={scale} 
        position={position} 
        rotation={[Math.PI / 2, 0, Math.PI / 2]} 
      />
    </Float>
  );
}

useGLTF.preload("/logos/ieee.glb");

export default function Team3DLogo() {
  return (
    <div className="w-full h-[350px] md:h-[450px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model 
            url="/logos/ieee.glb" 
            scale={0.42} 
            position={[0, 0, 0]} 
          />
          <Environment files="/potsdamer_platz_1k.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
}
