"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { handleMouseEnter, handleMouseLeave } from "../cursor/HoverCursor";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";


interface TimelineTabProps {
  name: string;
  date: string;
  page: Function;
}

export function TimelineTab({ items }: { items: TimelineTabProps[] }) {
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dotStart, setDotStart] = useState<number>(0);
  const [dotEnd, setDotEnd] = useState<number>(3);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const dotLimit = 3;

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleMouseIn = (index: number) => {
    setHoveredIndex(index);
    if (index === -1) {
      if (dotStart <= 0) {
        handleMouseEnter(".disabledIcon", "red", "small");
      } else {
        handleMouseEnter(".leftIcon", "red", "small");
      }
    } else if (index === -2) {
      if (dotEnd >= items.length) {
        handleMouseEnter(".disabledIcon", "red", "small");
      } else {
        handleMouseEnter(".rightIcon", "green", "small");
      }
    } else if (index < clickedIndex) {
      handleMouseEnter(".leftIcon", "red", "small");
    } else if (index > clickedIndex) {
      handleMouseEnter(".rightIcon", "green", "small");
    } else {
      handleMouseEnter(".eyeIcon", "blue", "small");
    }
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
    handleMouseLeave(".disabledIcon", "red", "small");
    handleMouseLeave(".leftIcon", "red", "small");
    handleMouseLeave(".rightIcon", "green", "small");
    handleMouseLeave(".eyeIcon", "blue", "small");
    handleMouseLeave(".constructionIcon", "red", "small");
  };

  const handleForward = () => {
    if (dotEnd >= items.length) {
      return;
    }
    setDotStart(dotStart + 1);
    setDotEnd(dotEnd + 1);
  };
  const handleBackward = () => {
    if (dotStart <= 0) {
      return;
    }
    setDotStart(dotStart - 1);
    setDotEnd(dotEnd - 1);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      handleMouseOut();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    handleMouseOut();
  }, []);

  const bgColor = resolvedTheme === "light" ? "bg-black" : "bg-white";
  const textColor = resolvedTheme === "light" ? "text-black" : "text-white";

  return (
    <>
      <div
        className="flex items-center justify-center my-7"
        about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
      >
        <Icon
          icon="material-symbols:chevron-left-rounded"
          className={`${dotStart <= 0 ? "invisible" : textColor}`}
          width={30}
          onClick={handleBackward}
          onMouseEnter={() => handleMouseIn(-1)}
          onMouseLeave={handleMouseOut}
        />
        <div className="flex items-center relative mt-5 mb-5">
          {items.map((item, index) => {
            if (index >= dotEnd || index < dotStart) {
              return;
            }

            const isDot = clickedIndex !== null && index <= clickedIndex;
            const isLine = clickedIndex !== null && index + 1 <= clickedIndex;

            return (
              <div
                key={index}
                className="flex items-center relative"
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseIn(index)}
                onMouseLeave={handleMouseOut}
              >
                {/* Dot */}
                <motion.div
                  className={`w-4 h-4 m-1 mx-3 my-2 rounded-full ${bgColor}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isDot ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Text Above */}
                <div
                  className={`absolute top-[-30px] text-sm ${textColor} whitespace-nowrap -rotate-45`}
                >
                  {item.name}
                </div>

                {/* Text Below */}
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute bottom-[-25px] text-sm ${textColor} whitespace-nowrap`}
                    style={{
                      transform: "translateX(-50%)",
                      transformOrigin: "center",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.date}
                  </motion.div>
                )}

                {/* Horizontal Line */}
                {index < items.length - 1 ||
                index === dotEnd ||
                items.length === 1 ? (
                  <motion.div
                    className={`w-10 h-[2px] ${bgColor}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLine ? 1 : 0.5 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : (
                  <div className="w-10 h-[2px]" />
                )}
              </div>
            );
          })}
        </div>
        <Icon
          icon="material-symbols:chevron-right-rounded"
          className={`${dotEnd >= items.length ? "invisible" : textColor}`}
          width={30}
          onClick={handleForward}
          onMouseEnter={() => handleMouseIn(-2)}
          onMouseLeave={handleMouseOut}
        />
      </div>
      {/* page content */}
      {clickedIndex !== null && items[clickedIndex].page && (
        <div>{items[clickedIndex].page()}</div>
      )}
      {/* bottom navigation */}
      <div className="flex items-center justify-center">
        <Icon
          icon="material-symbols:chevron-left-rounded"
          className={`${clickedIndex <= 0 ? "invisible" : textColor}`}
          width={30}
          onClick={() => {
            setClickedIndex((prev) => prev - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleMouseEnter(".leftIcon", "red", "small")}
          onMouseLeave={() => handleMouseLeave(".leftIcon", "red", "small")}
        />
        {/* To Top icon */}
        <div className="flex justify-center items-center my-10">
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full border border-black dark:border-white"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Icon
              icon="eva:arrow-up-fill"
              className="text-black dark:text-white"
              width="40"
            />
          </div>
        </div>
        <Icon
          icon="material-symbols:chevron-right-rounded"
          className={`${
            clickedIndex === items.length - 1 ? "invisible" : textColor
          }`}
          width={30}
          onClick={() => {
            setClickedIndex((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleMouseEnter(".rightIcon", "green", "small")}
          onMouseLeave={() => handleMouseLeave(".rightIcon", "green", "small")}
        />
      </div>
    </>
  );
}
