"use client";
import { ImageSplit } from "@/app/components/blocks/ImageProps";
import { ConfettiButton } from "@/app/components/blocks/MiscBlocks";
import {
  Banner,
  FullTextHeaders,
} from "@/app/components/blocks/TextImageBlocks";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "@/app/components/cursor/HoverCursor";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function Blog() {
  const pathname = usePathname();
  const t = useTranslation(translations);

  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (event: any) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />

      <ImageSplit
        beforeImage={`${pathname}/home-dark.png`}
        afterImage={`${pathname}/home-light.png`}
        lineColor="bg-gray-800"
      />

      <FullTextHeaders
        headers={t("heading_1")}
        textComponent={
          <>
            <strong>{t("color_theme_title")}</strong>
            <div>{t("color_theme_text")}</div>

            <strong>{t("styling_title")}</strong>
            <div>{t("styling_text_1")}</div>
            <div>{t("styling_text_2")}</div>

            <strong>{t("timeline_title")}</strong>
            <div>{t("timeline_text")}</div>

            <strong>{t("cursor_title")}</strong>
            <br />

            <div
              onMouseEnter={() =>
                handleMouseEnter(".eyeIcon", "green", "large")
              }
              onMouseLeave={() =>
                handleMouseLeave(".eyeIcon", "green", "large")
              }
            >
              <ConfettiButton
                x={cursorPosition.x / screenSize.width}
                y={cursorPosition.y / screenSize.height}
                content={t("cursor_text")}
              />
            </div>
          </>
        }
      />

      <FullTextHeaders
        headers={t("heading_2")}
        textComponent={
          <>
            <div>{t("comparison_intro")}</div>

            <strong>{t("timeline_page")}</strong>
            <ImageSplit
              beforeImage={`${pathname}/timeline.png`}
              afterImage={`${pathname}/timeline-dark.png`}
              lineColor="bg-white"
            />

            <strong>{t("projects_page")}</strong>
            <ImageSplit
              beforeImage={`${pathname}/projects.png`}
              afterImage={`${pathname}/projects-dark.png`}
              lineColor="bg-white"
            />

            <strong>{t("blog_page")}</strong>
            <ImageSplit
              beforeImage={`${pathname}/blog.png`}
              afterImage={`${pathname}/blog-dark.png`}
              lineColor="bg-white"
            />
          </>
        }
      />
    </>
  );
}
