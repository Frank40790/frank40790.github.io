"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { Icon } from "@iconify/react";
import { name, occupation, linkedin, github } from "@/app/components/Detail";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import lang from "./lang.json";
import { useTranslation } from "../components/language/LocalisationHooks";

const translations = lang;

export default function Card() {
  const [showSocials, setShowSocials] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useMotionValue(1);
  const [clicks, setClicks] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const clickThreshold = 300;
  const [traveling, setTraveling] = useState(false);
  const speed = useRef(0);
  const startTime = useRef(0);
  const particles = useRef<THREE.Points>(null);
  const router = useRouter();
  useEffect(() => {
    if (traveling) {
      startTime.current = Date.now();
      const timer = setInterval(() => {
        if (Date.now() - startTime.current >= 1500) {
          router.push("/");
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [traveling, router]);

  const StarField = () => {
    const count = 12000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    useEffect(() => {
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const radius = 4 + Math.random() * 8;
        const z = (Math.random() - 0.5) * 1000;

        positions[i * 3] = Math.cos(theta) * radius;
        positions[i * 3 + 1] = Math.sin(theta) * radius;
        positions[i * 3 + 2] = z;

        colors[i * 3] = 0.5 + Math.random() * 0.5;
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.3;
        colors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
      }
    }, [colors, positions]);

    useFrame((_, delta) => {
      if (particles.current) {
        if (traveling) {
          speed.current = THREE.MathUtils.lerp(speed.current, 15, delta * 0.5);
        }

        const positionsArray =
          particles.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
          positionsArray[i * 3 + 2] -= delta * (10 + speed.current * 2);
          if (positionsArray[i * 3 + 2] < -200) {
            positionsArray[i * 3 + 2] = Math.random() * 400;
          }
        }
        particles.current.geometry.attributes.position.needsUpdate = true;
      }
    });

    return (
      <Points ref={particles} positions={positions} colors={colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    );
  };

  const CameraMovement = () => {
    const { camera } = useThree();

    useFrame((_, delta) => {
      if (traveling && camera instanceof THREE.PerspectiveCamera) {
        camera.position.z -= delta * 20 * speed.current;
        camera.fov = THREE.MathUtils.lerp(camera.fov, 120, delta * 0.5);
        camera.updateProjectionMatrix();
      }
    });
    return null;
  };

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    animate(x, mouseX, {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    });

    animate(y, mouseY, {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    });

    animate(scale, 1.05, {
      type: "spring",
      stiffness: 200,
      damping: 20,
    });
  };

  const handleMouseLeave = () => {
    animate(x, 0, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
    animate(y, 0, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
    animate(scale, 1, {
      type: "spring",
      stiffness: 200,
      damping: 25,
    });
  };

  const handleCardClick = () => {
    const currentTime = Date.now();

    if (currentTime - lastClickTime <= clickThreshold) {
      setClicks((prev) => prev + 1);
    } else {
      setClicks(1);
    }

    setLastClickTime(currentTime);

    if (clicks >= 5) {
      setTraveling(true);
      setClicks(0);
      setLastClickTime(0);
    }

    setShowSocials((prev) => !prev);
  };

  const colorSet = [
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-yellow-400 via-orange-500 to-red-600",
    "from-purple-400 via-pink-400 to-orange-400",
  ];
  const selectedColor = colorSet[Math.floor(Math.random() * colorSet.length)];

  const t = useTranslation(translations);

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      {/* Card */}
      <div className="flex items-center justify-center p-4 absolute z-10 text-center space-y-6 text-4xl text-white select-none">
        <motion.div
          animate={controls}
          className="relative perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardClick}
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front Card */}
          <motion.div
            className="w-96 h-56 rounded-xl cursor-pointer transform-gpu relative"
            initial={{ opacity: 1 }}
          >
            <div className="absolute w-full h-full backface-hidden">
              <div
                className={`${selectedColor} w-full h-full bg-gradient-to-br rounded-xl p-8 text-white shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <motion.h1
                      className="text-2xl font-bold mb-1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {name}
                    </motion.h1>
                    <motion.p
                      className="text-sm text-blue-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {occupation}
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  className="mt-8 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm flex items-center space-x-2">
                    <span className="text-blue-200">{t("about_me")}</span>
                    <span className="font-light">{t("about_me_content")}</span>
                  </p>
                  <p className="text-sm flex items-center space-x-2">
                    <span className="text-blue-200">{t("interest")}</span>
                    <span className="font-light">{t("interest_content")}</span>
                  </p>
                  <p className="text-sm flex items-center space-x-2">
                    <span className="text-blue-200">{t("language")}</span>
                    <span className="font-light">{t("language_content")}</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Socials Overlay */}
          <AnimatePresence>
            {showSocials && (
              <motion.div
                key="socials"
                className="absolute top-0 left-0 w-full h-full rounded-xl cursor-pointer transform-gpu bg-black flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-6 text-white">
                    Connection
                  </h2>
                  <div className="flex space-x-6 justify-center">
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <Icon icon="mdi:linkedin" width={40} height={40} />
                    </a>
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <Icon icon="mdi:github" width={40} height={40} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {/* Background */}
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.1} />
        <CameraMovement />
        <StarField />
      </Canvas>
    </div>
  );
}
