"use client";
import MusicWidget from "@/app/components/musicplayer/Music";
import { useEffect, useRef, useState } from "react";
import {
  Banner,
  FullImage,
  FullTextHeaders,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";
import { CodeLinkBlock } from "@/app/components/blocks/LinkBlocks";
import { VideoPlayer } from "@/app/components/blocks/VideoBlocks";
import { useTheme } from "next-themes";

const translations = lang;

interface DraggableContainerProps {
  children: React.ReactNode;
}

const DraggableContainer: React.FC<DraggableContainerProps> = ({
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - 130,
      y: window.innerHeight / 2 - 100,
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

function HasCursor(): boolean {
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(pointer: fine)");

      const updatePointer = () => {
        setHasFinePointer(mediaQuery.matches);
      };

      updatePointer();
      mediaQuery.addEventListener("change", updatePointer);

      return () => mediaQuery.removeEventListener("change", updatePointer);
    }
  }, []);

  return hasFinePointer;
}

export default function Page() {
  const pathname = usePathname();
  const t = useTranslation(translations);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark"); // set to dark theme to prevent the widget being invisiable
  }, []);

  return (
    <div className="select-none">
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <VideoPlayer videoSrc={`${pathname}/video_showcase.mp4`} />
      <FullTextHeaders
        headers={t("whats_this")}
        textComponent={<div>{t("whats_this_content")}</div>}
      />
      <FullTextHeaders
        headers={t("brainstorm")}
        textComponent={
          <>
            <div>{t("brainstorm_content_1")}</div>
            <div>{t("brainstorm_content_2")}</div>
          </>
        }
      />
      <FullTextHeaders
        headers={t("design_and_code")}
        textComponent={
          <>
            <div>{t("design_and_code_content_1")}</div>
            <div>{t("design_and_code_content_2")}</div>
            <div>{t("design_and_code_content_3")}</div>
            <div>{t("design_and_code_content_4")}</div>
            <FullImage
              imageSrc={`${pathname}/banner_wide.png`}
              altText={t("alt_widget")}
            />
          </>
        }
      />
      <FullTextHeaders
        headers={t("award")}
        textComponent={
          <>
            <div>{t("awaed_content_1")}</div>
            <div>{t("awaed_content_2")}</div>
            <FullImage
              imageSrc={`${pathname}/award.png`}
              altText={t("alt_award")}
            />
          </>
        }
      />
      <CodeLinkBlock
        header={"Devpost"}
        links={[
          {
            name: "Devpost",
            url: "https://devpost.com/software/focal",
          },
        ]}
      />
      {HasCursor() && (
        <DraggableContainer>
          <MusicWidget
            defaultBackgroundImage={`${pathname}/sample_image.png`}
            defaultTrack={{
              name: "Sample Music - Echo of Nature",
              url: `${pathname}/sample_audio.mp3`,
            }}
          />
        </DraggableContainer>
      )}
    </div>
  );
}
