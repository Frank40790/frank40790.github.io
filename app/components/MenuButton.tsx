"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "@/app/components/ToggleTheme";
import { useSearch } from "@/app/components/search/SearchContext";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const radius = 80;

  const { openSearch } = useSearch();
  const handleOpenSearch = () => {
    openSearch("");
    setIsOpen(false);
  };
  const handleGoHome = () => {
    window.location.href = "/";
    setIsOpen(false);
  };
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    {
      component: <ThemeSwitcher iconColor="text-white" />,
      color: "bg-slate-800",
    },
    {
      component: <Icon icon="material-symbols:search" width={24} height={24} />,
      color: "bg-slate-800",
      function: handleOpenSearch,
    },
    {
      component: <Icon icon="mdi:home" width="25" />,
      color: "bg-slate-800",
      function: handleGoHome,
    },
    {
      component: <Icon icon="eva:arrow-up-fill" width="25" />,
      color: "bg-slate-800",
      function: handleToTop,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getMenuItemPosition = (index: any, total: any) => {
    const startAngle = -20 * (Math.PI / 180);
    const endAngle = 120 * (Math.PI / 180);
    const angle = startAngle + (index / (total - 1)) * (endAngle - startAngle);
    const x = -radius * Math.cos(angle);
    const y = -radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div
      className="fixed bottom-10 right-10 z-20 md:hidden"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      {/* Menu Items */}
      <AnimatePresence>
        {isOpen &&
          menuItems.map((item, index) => {
            const { x, y } = getMenuItemPosition(index, menuItems.length);
            return (
              <motion.div
                key={index}
                className={`absolute text-white rounded-full p-4 hover:bg-opacity-75 focus:outline-none ${item.color} w-14 h-14 flex items-center justify-center`}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: x, y: y }}
                exit={{ opacity: 0, x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={item.function}
              >
                {item.component ? (
                  item.component
                ) : (
                  <div className="w-14 h-14" />
                )}
              </motion.div>
            );
          })}
      </AnimatePresence>

      {/* Menu Button */}
      <motion.div
        ref={menuButtonRef}
        className="relative z-10 w-14 h-14 bg-black dark:bg-white text-white dark:text-black rounded-full focus:outline-none flex items-center justify-center"
        onClick={toggleMenu}
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Icon icon="mdi:close" width="28" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="absolute"
            >
              <Icon icon="mdi:menu" width="28" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
