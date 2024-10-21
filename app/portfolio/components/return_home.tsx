"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ReturnHome() {
  const [mediaQuery, setMediaQuery] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMediaQuery(isDarkMode);
    } else {
      setMediaQuery(false);
    }
  }, []);

  const fillColor = mediaQuery ? "white" : "dark";
  const strokeColor = mediaQuery ? "white" : "dark";
  const back = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      stroke: strokeColor,
      fill: fillColor,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      stroke: strokeColor,
      fill: fillColor,
    },
  };
  return (
    <>
      <Link href="/portfolio">
        <div className="svg-container">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="svg-item"
          >
            <motion.path
              d="m6 22l1.414-1.414L3.828 17H12v-2H3.828l3.586-3.586L6 10l-6 6z"
              variants={back}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 3, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="M16 10a5.98 5.98 0 0 0-4.243 1.757L16 16l-4.243 4.243A6 6 0 1 0 16 10"
              variants={back}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
            <motion.path
              d="M16 2a13.96 13.96 0 0 0-9.895 4.105l1.414 1.414a12 12 0 1 1 0 16.962l-1.414 1.414A13.997 13.997 0 1 0 16 2"
              variants={back}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
      </Link>
    </>
  );
}
