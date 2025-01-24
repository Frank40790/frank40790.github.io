"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearch } from "@/app/components/search/search_context";
import { Icon } from "@iconify/react";
import { MasterProps } from "@/app/components/interfaces";
import Link from "next/link";
import Tags from "@/app/components/tags";
import searchFunction from "@/app/components/search/search_algorithm";

interface SearchProps {
  text: string;
}

export default function Search({ text }: SearchProps) {
  const { isOpen, closeSearch } = useSearch();
  const [searchQuery, setSearchQuery] = useState(text);
  const [searchResults, setSearchResults] = useState<MasterProps[]>([]);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setSearchQuery(text);
  }, [text]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeSearch]);

  useEffect(() => {
    const results = searchFunction(searchQuery);
    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const translateY = searchQuery
    ? `translateY(-${Math.min(viewportHeight * 0.4, 500)}px)`
    : "translateY(0%)";

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"
        onClick={closeSearch}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 10 }}
      />

      <motion.div
        className="w-full max-w-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        style={{ zIndex: 20 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 hidden">Search</h2>

        <div
          className="relative transition-all"
          style={{
            transform: translateY,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <input
            type="text"
            className="w-full p-4 pl-12 rounded-full border border-white shadow-lg focus:outline-none text-lg"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />

          <Icon
            icon="material-symbols:search"
            width={24}
            height={24}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          />

          {searchQuery && searchResults.length > 0 && (
            <div
              className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
              style={{
                maxHeight: "calc(100vh - 150px)",
                overflow: "auto",
              }}
            >
              <ul className="divide-y divide-gray-200">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="p-2 text-gray-700 hover:bg-gray-100"
                  >
                    <Link
                      href={result.url}
                      passHref
                      onClick={() => closeSearch()}
                    >
                      <div>
                        <strong className="font-semibold">
                          {result.title}
                        </strong>
                        <p className="text-sm text-gray-500">
                          {result.description}
                        </p>
                        <Tags tags={result.tags} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
