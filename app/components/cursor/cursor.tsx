import React, { useEffect, useRef } from "react";
import "../styles/custom_cursor.css";
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
        const cursorSize = 20;
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

  return (
    <>
      <div className="">
        <div
          ref={cursorRef}
          className="cursor flex items-center justify-center text-center rounded-md break-words"
        >
          <Icon
            icon="mdi:eye"
            className="eyeIcon hidden text-white"
            width={50}
          />
          <Icon
            icon="dashicons:no"
            className="disabledIcon hidden text-white"
            width={50}
          />
          <Icon
            icon="material-symbols:check"
            className="checkIcon hidden text-white"
            width={50}
          />
          <Icon
            icon="mynaui:clipboard"
            className="clipboardIcon hidden text-white"
            width={50}
          />
          <Icon
            icon="material-symbols:link-rounded"
            className="linkIcon hidden text-white"
            width={50}
          />
          <Icon
            icon="material-symbols-light:arrow-range-rounded"
            className="arrowIcon hidden text-white"
            width={50}
          />
        </div>
      </div>
    </>
  );
}
