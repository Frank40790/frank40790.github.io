"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "@/app/components/cursor/HoverCursor";

interface ImageSplitProps {
  beforeImage: string;
  afterImage: string;
  lineColor: string;
}

export function ImageSplit({
  beforeImage,
  afterImage,
  lineColor,
}: ImageSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getXPosition = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      return e.touches[0].clientX;
    } else {
      return e.clientX;
    }
  };

  const handleDrag = useCallback(
    (e: MouseEvent | TouchEvent | any) => {
      if (!isDragging) return;

      const xPos = getXPosition(e);
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (!containerRect) return;

      let newPos = xPos - containerRect.left;
      newPos = Math.max(0, Math.min(newPos, containerRect.width));
      setDragPosition((newPos / containerRect.width) * 100);
    },
    [isDragging]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (isDragging) {
      // Mouse events
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleDragEnd);

      // Touch events
      window.addEventListener("touchmove", handleDrag, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      handleMouseLeave(".arrowIcon", "blue", "large");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleMouseLeave(".arrowIcon", "blue", "medium");
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center mx-auto"
      onMouseEnter={() => handleMouseEnter(".arrowIcon", "blue", "medium")}
      onMouseLeave={() => handleMouseLeave(".arrowIcon", "blue", "medium")}
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <div className="w-full max-w-4xl h-[500px]">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden rounded-lg"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          style={{ touchAction: "none" }}
        >
          {/* Before Image */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${beforeImage})`,
                clipPath: `inset(0 ${100 - dragPosition}% 0 0)`,
                transition: isDragging ? "none" : "clip-path 0.3s ease",
              }}
            />
          </div>

          {/* After Image */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${afterImage})`,
                clipPath: `inset(0 0 0 ${dragPosition}%)`,
                transition: isDragging ? "none" : "clip-path 0.3s ease",
              }}
            />
          </div>

          {/* Draggable Bar */}
          <div
            className={`absolute top-0 bottom-0 ${lineColor} z-10`}
            style={{
              left: `${dragPosition}%`,
              width: "5px",
              marginLeft: "-2.5px",
              cursor: "ew-resize",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="w-full h-full bg-white opacity-50"
              style={{ width: "2px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
