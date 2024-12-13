"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import "./styles/toggle_theme.css";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme-switcher-container">
      {/* Display the current theme */}
      <div className="bg-background text-primary-green">
        The current theme is: {theme}
      </div>

      {/* Theme switcher toggle */}
      <div
        className="switch"
        onClick={toggleTheme}
        role="button"
        aria-pressed={theme === "dark"}
        tabIndex={0}
        data-theme={theme}  // Pass the current theme to the switch for visual indication
      >
        <motion.div
          className="handle"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          animate={{ x: theme === "dark" ? "0%" : "100%" }}
          initial={{ x: "0%" }}
        />
      </div>
    </div>
  );
}
