"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useSearch } from "@/app/components/search/SearchContext";
import ThemeSwitcher from "@/app/components/ToggleTheme";
import { LanguageSwitcher } from "../language/LocalisationSwitcher";
import { useTranslation } from "../language/LocalisationHooks";

import lang from "./lang.json";

const translations = lang;

interface LinkItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslation(translations);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const selected_item_css = "";
  const magnify_min = 1;
  const magnify_max = 1.1;
  const magnify_duration = 0.3;

  const links = [
    { href: "/", label: t("home") },
    { href: "/timeline", label: t("timeline") },
    { href: "/projects", label: t("projects") },
    { href: "/blog", label: t("blog") },
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
        className={`flex justify-center p-3 text-black dark:text-white ${
          pathname === href ? selected_item_css : ""
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    </motion.div>
  );
  const { openSearch } = useSearch();
  const handleOpenSearch = () => {
    openSearch("");
  };
  const handleOpenSearchMobile = () => {
    openSearch("");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60 && lastScrollY <= 60) {
        setIsNavbarVisible(false);
      } else if (window.scrollY <= 60 && lastScrollY > 60) {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <AnimatePresence>
        {isNavbarVisible && (
          <motion.div
            className="fixed inset-x-0 top-0 h-16 flex items-center justify-center px-5 md:px-8 z-20 select-none"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Desktop Menu */}
            <div className="hidden md:flex centered flex-row space-x-4 z-10 border rounded-full bg-white dark:bg-black opacity-90">
              {links.map(renderLink)}

              {/* Search Button */}
              <button
                onClick={handleOpenSearch}
                className="items-center justify-center px-3"
              >
                <Icon
                  icon="material-symbols:search"
                  width={24}
                  height={24}
                  className="text-black dark:text-white"
                />
              </button>

              <div className="flex items-center justify-center px-3">
                <ThemeSwitcher iconColor="text-black dark:text-white" />
              </div>
              <div className="flex items-center justify-center px-3">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden ">
              <button
                className="text-white focus:outline-none"
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
                  className="absolute top-16 left-0 right-0 bg-gray-200 bg-opacity-50 backdrop-blur-md dark:bg-zinc-900 dark:bg-opacity-50 z-50 md:hidden rounded-b-xl "
                >
                  <div className="flex flex-col items-center space-y-2">
                    {links.map(renderLink)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
