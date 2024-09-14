"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const selected_item_css = "border rounded-lg border-green-400";

  return (
    <>
      <header className="h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-600">
        <div className="centered flex flex-row">
          <Link
            href="/portfolio"
            className={`flex justify-center p-3 text-gray-600 dark:text-white ${
              pathname === "/portfolio" ? selected_item_css : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/portfolio/timeline"
            className={`flex justify-center p-3 text-gray-600 dark:text-white ${
              pathname === "/portfolio/timeline" ? selected_item_css : ""
            }`}
          >
            Timeline
          </Link>
          <Link
            href="/portfolio/blog"
            className={`flex justify-center p-3 text-gray-600 dark:text-white ${
              pathname === "/portfolio/blog" ? selected_item_css : ""
            }`}
          >
            Blog
          </Link>
        </div>
      </header>
    </>
  );
}
