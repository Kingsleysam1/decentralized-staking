'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'   

export default function SketchfabViewer() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 200, 600], fov: 45 }}
      style={{ width: '100%', height: '100vh' }}
    >

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

      <Environment preset="night" background />

      <Model />

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        minDistance={50}
        maxDistance={200}
      />
    </Canvas>
  )
}
