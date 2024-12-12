import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene, animations } = useGLTF("/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  //  clean up a mesh
  const cleanMesh = (mesh) => {
    if (mesh.geometry) {
      mesh.geometry.dispose();
    }
    if (mesh.material) {
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) => mat.dispose());
      } else {
        mesh.material.dispose();
      }
    }
  };

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play();
    }

    scene.traverse((object) => {
      if (object.isMesh) {
        if (object.name === "Object_4") {
          if (object.parent) {
            object.parent.remove(object);
          }
          cleanMesh(object);
          console.log(`Removed and cleaned Mesh: ${object.name}`);
        } else {
          object.material.emissive = new THREE.Color(0x4a90e2);
          object.material.emissiveIntensity = 0.5;
        }
      }
    });

    scene.updateMatrixWorld(true);

    return () => {
      scene.traverse((object) => {
        if (object.isMesh) {
          cleanMesh(object);
        }
      });
    };
  }, [actions, scene]);

  return <primitive object={scene} scale={0.5} />;
}

export default function ThreeDModel() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        gl={{
          outputEncoding: THREE.sRGBEncoding,
        }}
        style={{ background: "white" }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color("white");
        }}
      >
        <ambientLight intensity={3.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} minDistance={1} maxDistance={10} />
      </Canvas>
    </div>
  );
}
