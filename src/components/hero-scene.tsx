"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Shape() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh rotation={[0.6, 0.4, 0.2]}>
        <torusKnotGeometry args={[1.05, 0.32, 160, 24]} />
        <MeshDistortMaterial
          color="#ba3ff5"
          distort={0.35}
          speed={2}
          roughness={0.24}
          metalness={0.08}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden md:block"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <Shape />
        <OrbitControls
          enableRotate={false}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.55}
        />
      </Canvas>
    </div>
  );
}
