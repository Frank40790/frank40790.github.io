"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface TextProp {
  text: string;
}

function Text({ text }: TextProp) {
  return (
    <div className="relative">
      <motion.div
        className="bg-gradient-to-r from-black via-gray-200 to-black dark:from-white dark:via-gray-600 dark:to-white bg-clip-text text-transparent text-5xl font-extrabold leading-none pb-5 pt-5"
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 100%",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

interface SmallTextProp {
  text: string;
}

function SmallText({ text }: SmallTextProp) {
  return (
    <motion.p
      className="text-xl font-medium text-black dark:text-white"
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
    >
      {text}
    </motion.p>
  );
}

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <Text text={"Oops, this page does not exist!"} />
        <SmallText text={"Redirecting..."} />
      </div>
    </>
  );
}
