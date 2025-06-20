import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LocalisationContext";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "de", label: "Deutsch" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: string) => {
    setLanguage(lang as any);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center bg-transparent focus:outline-none transition"
      >
        <Icon icon="material-symbols:language" className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-5 w-28 bg-white dark:bg-black border border-white rounded-xl shadow-lg z-10"
          >
            {languages.map(({ code, label }) => (
              <li key={code}>
                <button
                  onClick={() => handleSelect(code)}
                  className="block w-full text-left px-4 py-2 hover:font-bold"
                >
                  {label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: string) => {
    setLanguage(lang as any);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-sm">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center bg-transparent focus:outline-none transition"
      >
        <Icon icon="material-symbols:language" className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 text-black dark:text-white bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl shadow-md z-20 px-3 py-2 flex flex-col space-y-2"
          >
            {languages.map(({ code, label }) => (
              <li key={code}>
                <button
                  onClick={() => handleSelect(code)}
                  className={`w-full text-sm px-3 py-1 rounded-full transition-all ${
                    language === code
                      ? "bg-gray-200 dark:bg-gray-700 font-bold"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
