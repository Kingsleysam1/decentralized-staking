import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    TEMPLE_27f3765_0: THREE.Mesh
    TEMPLE001_27f3765_0: THREE.Mesh
    TEMPLE002_5b86a32a_0: THREE.Mesh
    TEMPLE003_27f3765_0: THREE.Mesh
    TEMPLE004_water_0: THREE.Mesh
    TEMPLE005_d605deea_0: THREE.Mesh
    TEMPLE006_water_0: THREE.Mesh
    TEMPLE007_5b86a32a_0: THREE.Mesh
    TEMPLE008_27f3765_0: THREE.Mesh
    monk_5b86a32a_0: THREE.Mesh
    monk_27f3765_0: THREE.Mesh
    monk_eye_0: THREE.Mesh
    monk001_5b86a32a_0: THREE.Mesh
    monk001_27f3765_0: THREE.Mesh
    monk001_eye_0: THREE.Mesh
    monk002_5b86a32a_0: THREE.Mesh
    monk002_27f3765_0: THREE.Mesh
    monk002_eye_0: THREE.Mesh
    monk003_5b86a32a_0: THREE.Mesh
    monk003_27f3765_0: THREE.Mesh
    monk003_eye_0: THREE.Mesh
    TEMPLE009_d605deea_0: THREE.Mesh
    TEMPLE010_5b86a32a_0: THREE.Mesh
    TEMPLE011_93d99f61_0: THREE.Mesh
    TEMPLE012_emit_0: THREE.Mesh
  }
  materials: {
    ['27f3765']: THREE.MeshPhysicalMaterial
    ['5b86a32a']: THREE.MeshPhysicalMaterial
    water: THREE.MeshStandardMaterial
    d605deea: THREE.MeshPhysicalMaterial
    material: THREE.MeshStandardMaterial
    ['93d99f61']: THREE.MeshPhysicalMaterial
    emit: THREE.MeshStandardMaterial
  }
}

export function Model({ speed = 0.0003, ...props } : JSX.IntrinsicElements['group'] & { speed?: number }) {
  const group = useRef()
  const { nodes, scene, materials } = useGLTF('/temple_usd_workflow_test/scene.gltf') as GLTFResult
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += speed
    }
  })
  return (
     <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-76.571, -83.657, 113.35]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk_5b86a32a_0.geometry}
              material={materials['5b86a32a']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk_27f3765_0.geometry}
              material={materials['27f3765']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk_eye_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[766.195, -16.426, -21.351]}
            rotation={[-Math.PI / 2, 0, -0.486]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk001_5b86a32a_0.geometry}
              material={materials['5b86a32a']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk001_27f3765_0.geometry}
              material={materials['27f3765']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk001_eye_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[247.699, -19.076, -368.174]}
            rotation={[-Math.PI / 2, 0, 0.821]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk002_5b86a32a_0.geometry}
              material={materials['5b86a32a']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk002_27f3765_0.geometry}
              material={materials['27f3765']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk002_eye_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            position={[218.928, -21.259, -381]}
            rotation={[-Math.PI / 2, 0, -0.99]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk003_5b86a32a_0.geometry}
              material={materials['5b86a32a']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk003_27f3765_0.geometry}
              material={materials['27f3765']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monk003_eye_0.geometry}
              material={materials.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE_27f3765_0.geometry}
            material={materials['27f3765']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE001_27f3765_0.geometry}
            material={materials['27f3765']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE002_5b86a32a_0.geometry}
            material={materials['5b86a32a']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE003_27f3765_0.geometry}
            material={materials['27f3765']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE004_water_0.geometry}
            material={materials.water}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE005_d605deea_0.geometry}
            material={materials.d605deea}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE006_water_0.geometry}
            material={materials.water}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE007_5b86a32a_0.geometry}
            material={materials['5b86a32a']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE008_27f3765_0.geometry}
            material={materials['27f3765']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE009_d605deea_0.geometry}
            material={materials.d605deea}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE010_5b86a32a_0.geometry}
            material={materials['5b86a32a']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE011_93d99f61_0.geometry}
            material={materials['93d99f61']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TEMPLE012_emit_0.geometry}
            material={materials.emit}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/temple_usd_workflow_test/scene.gltf')