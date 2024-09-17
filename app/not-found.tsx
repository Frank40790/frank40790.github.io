"use client";
import { motion } from "framer-motion";
import "./globals.css";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const back = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <motion.h1
          className="text-4xl font-bold text-black dark:text-white mb-6"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Oops! The page does not exist!
        </motion.h1>
        <Link href="/">
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
      </div>
    </>
  );
}
