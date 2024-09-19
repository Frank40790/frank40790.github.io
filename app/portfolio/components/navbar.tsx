"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const selected_item_css = "";
  const magnify_min = 1;
  const magnify_max = 1.5;
  const magnify_duration = 0.3;

  return (
    <>
      <header className="h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
        <div className="centered flex flex-row">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: pathname === "/portfolio" ? magnify_max : magnify_min,
              transition: { duration: magnify_duration },
            }}
          >
            <Link
              href="/portfolio"
              className={`flex justify-center p-3 text-gray-600 dark:text-white ${
                pathname === "/portfolio" ? selected_item_css : ""
              }`}
            >
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale:
                pathname === "/portfolio/timeline" ? magnify_max : magnify_min,
              transition: { duration: magnify_duration },
            }}
          >
            <Link
              href="/portfolio/timeline"
              className={`flex justify-center p-3 text-gray-600 dark:text-white ${
                pathname === "/portfolio/timeline" ? selected_item_css : ""
              }`}
            >
              Timeline
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale:
                pathname === "/portfolio/projects" ? magnify_max : magnify_min,
              transition: { duration: magnify_duration },
            }}
          >
            <Link
              href="/portfolio/projects"
              className={`flex justify-center p-3 text-gray-600 dark:text-white ${
                pathname === "/portfolio/projects" ? selected_item_css : ""
              }`}
            >
              Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: pathname === "/portfolio/blog" ? magnify_max : magnify_min,
              transition: { duration: magnify_duration },
            }}
          >
            <Link
              href="/portfolio/blog"
              className={`flex justify-center p-3 text-gray-600 dark:text-white ${
                pathname === "/portfolio/blog" ? selected_item_css : ""
              }`}
            >
              Blog
            </Link>
          </motion.div>
        </div>
      </header>
    </>
  );
}
