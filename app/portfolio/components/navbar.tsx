"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react"; // Importing Iconify component

interface LinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const selected_item_css = "";
  const magnify_min = 1;
  const magnify_max = 1.5;
  const magnify_duration = 0.3;

  const links = [
    { href: "/portfolio", label: "Home" },
    { href: "/portfolio/timeline", label: "Timeline" },
    { href: "/portfolio/projects", label: "Projects" },
    { href: "/portfolio/blog", label: "Blog" },
  ];

  const renderLink = ({ href, label }: LinkItem) => (
    <motion.div
      key={href}
      initial={{ scale: 1 }}
      animate={{
        scale: pathname === href ? magnify_max : magnify_min,
        transition: { duration: magnify_duration },
      }}
    >
      <Link
        href={href}
        className={`flex justify-center p-3 text-gray-600 dark:text-white ${
          pathname === href ? selected_item_css : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    </motion.div>
  );

  return (
    <header className="h-16 flex items-center justify-center px-4 md:px-8">
      {/* Desktop Menu */}
      <div className="hidden md:flex centered flex-row space-x-4">
        {links.map(renderLink)}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden ">
        <button
          className="text-gray-600 dark:text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Icon icon="mdi:close" width="28" />
          ) : (
            <Icon icon="mdi:menu" width="28" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-16 left-0 right-0 bg-gray-200 bg-opacity-50 backdrop-blur-md dark:bg-zinc-900 dark:bg-opacity-50 z-50 md:hidden rounded-b-xl border-l border-r border-black dark:border-white"
          >
            <div className="flex flex-col items-center space-y-2">
              {links.map(renderLink)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
