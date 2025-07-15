"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { Model } from '@/components/Model';
import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import * as THREE from "three";
import { Suspense } from "react";
import { Environment } from '@react-three/drei';
const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
  <>
  <div className="fixed inset-0 z-0">
  <div className="fixed inset-0 z-10 bg-black bg-opacity-50 pointer-events-none" />
    <Canvas 
    shadows
    gl={{
      toneMapping: THREE.ACESFilmicToneMapping,
      outputEncoding: THREE.sRGBEncoding,
    }} 
    camera={{ position: [0, 2, 8], fov: 50 }}
    style= {{ background: "#000"}}>
      <ambientLight intensity={0.5} color="#ff4444" />
      <hemisphereLight 
      skyColor="#ff6666"
      groundColor="#330000"
      intensity={0.1} />
      <directionalLight color="#ff6666" position={[5, 10, 5]} castShadow intensity={1} />
      <Environment preset="night" background />
      <spotLight color="red" position={[0, 5, 5]} angle={90} penumbra={5} castShadow intensity={1000} />
      <Suspense fallback={null}>
      <Bounds fit clip observe margin={0.05}>
        <Model />
      </Bounds>
      </Suspense>
      <OrbitControls 
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      rotateSpeed={1}
      zoomSpeed={0.3}
      panSpeed={0.5}
      minPolarAngle={Math.PI / 6}   
      maxPolarAngle={Math.PI / 1.8}/>
    </Canvas>
    <Link href="/staker-ui" passHref>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <button className="btn btn-primary text-lg text-base-content items-center animate-typewriter justify-center font-semibold pointer-events-auto">
          STAKE NOW
        </button>
      </div>
    </Link>
    </div>
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5">
        <h1 className="text-center mb-6">
          <span className="block text-4xl font-bold">
            🔏 Decentralized Staking App
          </span>
        </h1>
      </div>
    </div>

    <div className="flex-grow w-full mt-16 px-8 py-12">
      <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <BugAntIcon className="h-8 w-8 fill-secondary" />
          <p>
            <Link href="/debug" passHref className="link">
              Debug Contracts
            </Link>
          </p>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
          <p>
            <Link href="/blockexplorer" passHref className="link">
              Block Explorer
            </Link>
          </p>
        </div>
      </div>
    </div>
  </>
)

};

export default Home;
