import Image from "next/image";
import { TimelineProps } from "@/app/components/timeline/TimelineInterface";
import Tags from "@/app/components/Tags";
import { useEffect, useRef, useState } from "react";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "@/app/components/cursor/HoverCursor";

export function DisabledTimelineItem({
  timeline,
  pathname,
}: {
  timeline: TimelineProps;
  pathname: string;
}) {
  return (
    <div
      className="flex flex-col relative"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <div
        className="flex flex-row rounded-lg group transition duration-300 bg-transparent"
        onMouseEnter={() => handleMouseEnter(".disabledIcon", "red", "large")}
        onMouseLeave={() => handleMouseLeave(".disabledIcon", "red", "large")}
      >
        <TimelineDetails timeline={timeline} />
        <TimelineImage timeline={timeline} pathname={pathname} />
      </div>
    </div>
  );
}

export function EnabledTimelineItem({
  timeline,
  pathname,
}: {
  timeline: TimelineProps;
  pathname: string;
}) {
  useEffect(() => {
    const handleBeforeUnload = () => {
      handleMouseLeave(".eyeIcon", "blue", "large");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleMouseLeave(".eyeIcon", "blue", "large");
    };
  }, []);

  return (
    <div
      className="flex flex-col relative"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <div
        className="flex flex-row w-full rounded-lg group transition duration-300 bg-transparent"
        onMouseEnter={() => handleMouseEnter(".eyeIcon", "blue", "large")}
        onMouseLeave={() => handleMouseLeave(".eyeIcon", "blue", "large")}
      >
        <TimelineDetails timeline={timeline} />
        <TimelineImage timeline={timeline} pathname={pathname} />
      </div>
    </div>
  );
}

export function TimelineImage({
  timeline,
  pathname,
}: {
  timeline: TimelineProps;
  pathname: string;
}) {
  let src = `${pathname}/${timeline.url}/${timeline.icon}`;

  if (timeline.url.startsWith("/")) {
    src = `${timeline.url}/${timeline.icon}`;
  }

  const borderColor =
    timeline.type === "star" ? "border-[#efbf04]" : "border-gray-500";
  return (
    <div
      className="flex-col hidden md:block"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <div className="relative h-full w-40">
        {timeline.icon.includes(".") ? (
          <Image
            src={src}
            alt={timeline.icon}
            layout="fill"
            className="object-cover rounded-md"
          />
        ) : (
          <Box text={timeline.icon} />
        )}
      </div>
    </div>
  );
}

export function TimelineDetails({ timeline }: { timeline: TimelineProps }) {
  return (
    <div className="event-box group flex flex-col pt-6 pr-6 pb-6 flex-1">
      <div className="event-title text-lg font-bold text-black dark:text-white">
        {timeline.title}
      </div>
      <div className="event-description text-gray-600">
        {timeline.description}
      </div>
      <div
        onMouseEnter={() => {
          handleMouseLeave(".eyeIcon", "blue", "large");
          handleMouseLeave(".disabledIcon", "red", "large");
        }}
        onMouseLeave={() => {
          if (timeline.type === "disabled") {
            handleMouseEnter(".disabledIcon", "red", "large");
          } else {
            handleMouseEnter(".eyeIcon", "blue", "large");
          }
        }}
      >
        <Tags tags={timeline.tags} />
      </div>
    </div>
  );
}

export function Box({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [squareSize, setSquareSize] = useState<number | null>(null);
  const repeatText = [text, " ", text];

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const height = containerRef.current.getBoundingClientRect().height;
        setSquareSize(height);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const rows = [0, 1, 2, 3];

  return (
    <div
      ref={containerRef}
      style={{ width: squareSize ? `${squareSize}px` : undefined }}
      className="bg-white rounded-md overflow-hidden transition-all duration-300 text-black group" // Add 'group' class to parent
    >
      {rows.map((_, index) => {
        // Based on the parent hover (group-hover), apply different styles to children
        const shiftClass =
          index % 2 === 0
            ? "group-hover:translate-x-0 -translate-x-20"
            : "group-hover:-translate-x-10 -translate-x-0";

        return (
          <div key={index} className="overflow-hidden w-40">
            <div
              className={`whitespace-nowrap text-4xl font-bold transition-transform duration-300 ease-out transform ${shiftClass}`}
            >
              {repeatText.map((item) => item.toUpperCase())}
            </div>
          </div>
        );
      })}
    </div>
  );
}
