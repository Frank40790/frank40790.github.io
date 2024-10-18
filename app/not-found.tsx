"use client";
import { motion } from "framer-motion";
import "./globals.css";
import ReturnHome from "./portfolio/components/return_home";

export default function NotFound() {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

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
        <ReturnHome />
      </div>
    </>
  );
}
