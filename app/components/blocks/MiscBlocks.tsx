"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export function ConfettiButton({
  x,
  y,
  content,
}: {
  x: number;
  y: number;
  content: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    confetti({
      particleCount: 200,
      spread: 1700,
      origin: { x: x, y: y },
      colors: [
        "#ff1744",
        "#ff4081",
        "#f50057",
        "#d500f9",
        "#536dfe",
        "#448aff",
        "#00b0ff",
        "#00e5ff",
        "#76ff03",
        "#64dd17",
        "#00c853",
        "#4caf50",
        "#ffeb3b",
        "#ff9800",
        "#ff5722",
      ],
      shapes: ["circle", "square"],
      gravity: 2.0,
      drift: 0.2,
      scalar: 1.2,
      ticks: 200,
    });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
      />
      <button className="text-left" onClick={handleClick}>
        {content}
      </button>
    </>
  );
}
