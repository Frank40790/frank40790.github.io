import React, { useEffect, useRef } from "react";
import "@/app/components/styles/CustomCursor.css";
import { Icon } from "@iconify/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const updateCursor = () => {
      if (cursor) {
        const cursorSize = 20; // Ensure this matches your CSS dimensions
        cursor.style.transform = `translate3d(${
          mousePosition.current.x - cursorSize / 2
        }px, ${mousePosition.current.y - cursorSize / 2}px, 0)`;
      }
      requestRef.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  const icons = [
    { id: "mdi:eye", class: "eyeIcon" },
    { id: "dashicons:no", class: "disabledIcon" },
    { id: "material-symbols:check", class: "checkIcon" },
    { id: "mynaui:clipboard", class: "clipboardIcon" },
    { id: "material-symbols:link-rounded", class: "linkIcon" },
    { id: "material-symbols-light:arrow-range-rounded", class: "arrowIcon" },
    { id: "material-symbols:chevron-left-rounded", class: "leftIcon" },
    { id: "material-symbols:chevron-right-rounded", class: "rightIcon" },
    { id: "eva:arrow-up-fill", class: "upIcon" },
  ];

  return (
    <>
      <div about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf">
        <div
          ref={cursorRef}
          className="cursor flex items-center justify-center text-center rounded-md break-words"
        >
          {icons.map((icon, index) => (
            <Icon
              key={index}
              icon={icon.id}
              className={`${icon.class} hidden text-white`}
              width={50}
            />
          ))}
        </div>
      </div>
    </>
  );
}
