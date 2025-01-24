"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "./styles/toggle_theme.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface IconMap {
  light: string;
  dark: string;
  system: string;
}

export default function ThemeSwitcher({ iconColor }: { iconColor: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconMap: IconMap = {
    light: "solar:sun-bold",
    dark: "solar:moon-bold",
    system: "mingcute:globe-fill",
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else if (theme === "system") {
      setTheme("light");
    }
  };

  const currentTheme = (theme ?? "system") as "light" | "dark" | "system";

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="items-center justify-center flex rounded-full bg-transparent transition duration-300"
        role="button"
        tabIndex={0}
        data-theme={theme}
      >
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotateY: 180 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -180 }}
          transition={{ duration: 0.3 }}
          className={iconColor}
        >
          <Icon
            icon={iconMap[currentTheme]}
            style={{
              fontSize: "24px",
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </motion.div>
      </button>
    </>
  );
}
