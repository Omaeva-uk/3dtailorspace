import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { Link, useLocation } from "react-router-dom";
import "./HeroSection.css";
import "../NavBar/navbar.css";
import { HashLink } from "react-router-hash-link";

// NavBar
const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [activeNavItem, setactiveNavItem] = useState();
  console.log(activeNavItem);
  const location = useLocation();

  // const handleNavigation = (e, id) => {
  //   e.preventDefault();
  //   if (location.pathname === "/" && onScroll) {
  //     onScroll(id);
  //   } else {
  //     setTimeout(() => onScroll(id), 100);
  //   }
  // };

  return (
    <nav className="flex max-lg:p-5 justify-between items-center relative">
        <Link>
          <div className="w-14 md:w-20">
            <img
              src="/assets/tailorspace-nav-logo.svg"
              alt="Tailorspace logo"
              className="w-full"
            />
          </div>
        </Link>

      {/* Desktop  */}
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center navItems-wrapper">
          {/* <li>
            <Link to="/" onClick={(e) => handleNavigation(e, "hero-section")}>
              Home
            </Link>
          </li>
          <Link to="/" onClick={(e) => handleNavigation(e, "about-us")}>
            About Us
          </Link>
          <Link to="/" onClick={(e) => handleNavigation(e, "join-us")}>
            Join Us
          </Link> */}
          <HashLink to="/#home" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">Home</li></HashLink>
          <HashLink to="/#about-us" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">About Us</li></HashLink>
          <HashLink to="/#join-us" onClick={(e) => setactiveNavItem(e.target)}><li className="hover:text-white hover:font-bold">Join Us</li></HashLink>
        </ul>
      </div>

      {/* Mobile */}
      {mobileNav && (
        <div className="lg:hidden mobile-menu">
          <ul className="flex flex-col items-end gap-4">
            <li
              onClick={() => setMobileNav((prev) => !prev)}
              className="border-2 px-2 py-1 border-[#70C1E3]"
            >
              <i className="fa-solid fa-x"></i>
            </li>
            <li>Home</li>
            <li>About Us</li>
            <li>Join Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      )}

      <div className="max-lg:hidden">
        <HashLink to="/#join-us" >
          <button className="btn">
            Contact Us{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </HashLink>
       
      </div>

      <div className="lg:hidden" onClick={() => setMobileNav((prev) => !prev)}>
        <i className="text-[20px] fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

// 3D Model
function Model() {
  const { scene, animations } = useGLTF("/scene.gltf");
  // const { scene, animations } = useGLTF("https://3dtailorspace.s3.eu-north-1.amazonaws.com/scene.gltf");
  console.log("Model loaded:", scene);
  console.log("hello");
  const { actions } = useAnimations(animations, scene);

  // clean up a mesh
  const cleanMesh = (mesh) => {
    if (mesh.geometry) mesh.geometry.dispose();
    if (mesh.material) {
      if (Array.isArray(mesh.material))
        mesh.material.forEach((mat) => mat.dispose());
      else mesh.material.dispose();
    }
  };

  useEffect(() => {
    if (actions) actions[Object.keys(actions)[0]]?.play();

    scene.traverse((object) => {
      if (object.isMesh) {
        if (object.name === "Object_4") {
          if (object.parent) object.parent.remove(object);
          cleanMesh(object);
          console.log(`Removed and cleaned Mesh: ${object.name}`);
        } else {
          object.material.emissive = new THREE.Color(0x4a90e2);
          object.material.emissiveIntensity = 0.5;
        }
      }
    });

    return () => {
      scene.traverse((object) => {
        if (object.isMesh) cleanMesh(object);
      });
    };
  }, [actions, scene]);

  return <primitive object={scene} scale={0.5} />;
}

// 3D Model Wrapper
function ThreeDModel() {
  return (
    <div style={{ width: "100%", height: "100%", marginTop: "150px" }}>
      <Canvas
        gl={{
          alpha: true,
          outputEncoding: THREE.sRGBEncoding,
        }}
        style={{ background: "transparent" }}
        onCreated={({ scene }) => {
          scene.background = null;
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Suspense>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} minDistance={1} maxDistance={10} />
      </Canvas>
    </div>
  );
}

// Hero Section
const HeroSection = ({ id }) => {
  return (
    <div className="hero-bg relative h-[100vh] w-full p-4 overflow-hidden">
      <header>
        <NavBar />
      </header>
      <div
        id={id}
        className="relative z-10 mt-12 lg:mt-16 flex flex-col items-center text-center"
      >
        <h1 className="flex max-sm:flex-col justify-center items-center max-sm:items-start text-[44px] md:text-[54px] lg:text-[84px] relative font-semibold text-white">
          Anything <span className="mx-2 max-sm:absolute max-sm:-right-[33px] max-sm:bottom-0">⚡</span> Into 3D
        </h1>
        <p className="text-center mt-4 max-w-md text-white">
          Transform your ideas into stunning 3D models with our cutting-edge
          technology. Bring anything to life in 3D and unleash your creativity.
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* <ThreeDModel /> */}
      </div>
    </div>
  );
};

export default HeroSection;
//v4 - working
