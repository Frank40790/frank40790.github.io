"use client";

import { motion } from "framer-motion";
import { useEffect, useState, Suspense, lazy } from "react";
import lang from "./lang.json";
import { useTranslation } from "./components/language/LocalisationHooks";

const translations = lang;

function Text({ text }: { text: string }) {
  return (
    <div className="relative h-screen pt-20">
      <motion.div
        className="bg-gradient-to-r from-gray-600 via-white to-gray-600 dark:from-white dark:via-gray-600 dark:to-white bg-clip-text text-transparent leading-none pb-5 pt-5 text-3xl text-center"
        initial={{ backgroundPosition: "200% 0" }}
        animate={{ backgroundPosition: "-200% 0" }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          backgroundSize: "50% 100%",
        }}
      >
        {text}{" "}
        {"···".split("").map((char, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{
              y: [4, 0, 4],
              transition: {
                type: "tween",
                ease: "easeInOut",
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.05,
                repeatDelay: 0.8,
              },
            }}
            style={{
              display: "inline-block",
              letterSpacing: "2px",
              transform: "translateY(50%)",
            }}
            className="text-black dark:text-white"
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const PageA = lazy(() => import("./home/page_a/page"));
const PageB = lazy(() => import("./home/page_b/page"));

export default function Page() {
  const [variant, setVariant] = useState<"a" | "b" | null>(null);
  const t = useTranslation(translations);

  useEffect(() => {
    let variantAssigned = localStorage.getItem("variant");

    if (variantAssigned === "a" || variantAssigned === "b") {
      setVariant(variantAssigned);
    } else {
      const randomVariant = Math.random() < 0 ? "a" : "b";
      localStorage.setItem("variant", randomVariant);
      setVariant(randomVariant);
    }
  }, []);

  const VariantComponent = variant === "a" ? PageA : PageB;

  return (
    <Suspense fallback={<Text text={t("loading")} />}>
      <VariantComponent />
    </Suspense>
  );
}
