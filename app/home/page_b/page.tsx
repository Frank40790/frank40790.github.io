"use client";

import { useState, useRef, Suspense, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { name, skills } from "@/app/components/Detail";
import Contact from "@/app/components/Contact";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTranslation } from "@/app/components/language/LocalisationHooks";

import lang from "./lang.json";

const translations = lang;

function Stars(props: any) {
  const ref = useRef<any>();

  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }

    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function IconGridPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopupOpen]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleBackdropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      closePopup();
    }
  };
  const t = useTranslation(translations);

  return (
    <div>
      {/* Open Popup Button */}
      <div onClick={openPopup} className="pb-4 w-min">
        <Icon
          icon="material-symbols:info-outline"
          className="text-white"
          width={20}
          height={20}
        />
      </div>

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 pt-16"
          onClick={handleBackdropClick}
        >
          <div className="bg-black opacity-80 border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-scroll p-6 scrollbar-hide">
            {/* Popup Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{t("skills")}</h2>
              <button
                onClick={closePopup}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                <Icon icon="mdi:close" width={28} height={28} />
              </button>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer group text-white"
                  onClick={() => {}}
                >
                  <Icon
                    icon={item.icon}
                    width={60}
                    height={60}
                    className="transition-colors"
                  />
                  <p className="text-xs text-white mt-2 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const t = useTranslation(translations);

  const fadeInUp: Variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleAnimation: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const subtitleAnimation: Variants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const links = [
    {
      title: t("link_1_title"),
      description: t("link_1_description"),
      link: "/projects",
      image: "/icon_project.png",
    },
    {
      title: t("link_2_title"),
      description: t("link_2_description"),
      link: "/timeline",
      image: "/icon_timeline.png",
    },
  ];

  const subtitles = [t("subtitle_1"), t("subtitle_2"), t("subtitle_3")];

  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSubtitle = subtitles[subtitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentSubtitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    } else {
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDisplayText((prev) => currentSubtitle.slice(0, prev.length + 1));
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, subtitleIndex, isDeleting, subtitles]);

  return (
    <main className="relative min-h-screen bg-gray-900 select-none">
      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 h-screen snap-y snap-mandatory overflow-y-auto scrollbar-hide overscroll-y-none">
        {/* Hero Section */}
        <section className="h-screen snap-start flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <motion.div
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <motion.h1
                variants={titleAnimation}
                className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text"
              >
                {t("intro")} {name}
              </motion.h1>

              <div className="text-center text-2xl text-gray-600 h-12 flex justify-center items-center">
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {displayText}
                  <motion.span
                    animate={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="inline-block ml-1 w-1 h-6 bg-gray-600 rounded-xl"
                  />
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("about_me")}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="text-white text-center text-xl"
            >
              {t("about_me_content")}
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("skills")}
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="text-white text-center text-xl">
                {t("skills_content")}
              </div>
              {[
                { name: t("skills_1"), level: 85 },
                { name: t("skills_2"), level: 80 },
                { name: t("skills_3"), level: 75 },
              ].map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
              <IconGridPopup />
            </motion.div>
          </motion.div>
        </section>

        {/* Interest - AI and ML */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("interest_ai")}
            </motion.h2>
            <div className="text-white text-center text-lg">
              {t("interest_ai_content_1")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_ai_content_2")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_ai_content_3")}
            </div>
          </motion.div>
        </section>

        {/* Interest - System Admin */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("interest_sysadmin")}
            </motion.h2>
            <div className="text-white text-center text-lg">
              {t("interest_sysadmin_content")}
            </div>
          </motion.div>
        </section>

        {/* Interest - Web design*/}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("interest_web_design")}
            </motion.h2>
            <div className="text-white text-center text-lg">
              {t("interest_web_design_content_1")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_web_design_content_2")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_web_design_content_3")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_web_design_content_4")}
            </div>
          </motion.div>
        </section>

        {/* Interest - Graphics */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("interest_graphics")}
            </motion.h2>
            <div className="text-white text-center text-lg">
              {t("interest_graphics_content_1")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_graphics_content_2")}
            </div>
            <div className="text-white text-center text-lg">
              {t("interest_graphics_content_3")}
            </div>
          </motion.div>
        </section>

        {/* Future Vision */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("future_vision")}
            </motion.h2>
            <div className="text-white text-center text-lg">
              {t("future_vision_content_1")}
            </div>
            <div className="text-white text-center text-lg">
              {t("future_vision_content_2")}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("contact")}
            </motion.h2>
            <Contact iconColor="text-white" />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen snap-start flex items-center justify-center p-4 md:p-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {t("journey_begin")}
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {links.map((page, index) => (
                <Link key={index} href={page.link}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "tween" }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                  >
                    <Image
                      src={page.image}
                      alt=""
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                    <h3 className="text-xl font-semibold my-2 text-white">
                      {page.title}
                    </h3>
                    <p className="text-gray-300">{page.description}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
