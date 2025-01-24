"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Text({ text }: { text: string }) {
  return (
    <div className="relative h-screen pt-20">
      <motion.div
        className="bg-gradient-to-r from-black via-gray-200 to-black dark:from-white dark:via-gray-600 dark:to-white bg-clip-text text-transparent text-3xl font-extrabold leading-none pb-5 pt-5 text-center "
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

export default function Page() {
  const [variant, setVariant] = useState<"a" | "b" | null>(null);

  useEffect(() => {
    let variantAssigned = localStorage.getItem("ab-test-variant");

    if (variantAssigned === "a" || variantAssigned === "b") {
      setVariant(variantAssigned);
    } else {
      const randomVariant = Math.random() < 0.2 ? "a" : "b";
      localStorage.setItem("ab-test-variant", randomVariant);
      setVariant(randomVariant);
    }
  }, []);

  if (!variant) {
    return <Text text="Page is loading..." />;
  }

  const VariantComponent =
    variant === "a"
      ? require("./home/page_a").default
      : require("./home/page_b").default;

  return <VariantComponent />;
}
