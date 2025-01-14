import Image from "next/image";
import { TimelineProps } from "./timeline_interface";
import Tags from "../tags";
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { handleMouseEnter, handleMouseLeave } from "../cursor/hover_cursor";

export function DisabledTimelineItem({
  timeline,
  pathname,
}: {
  timeline: TimelineProps;
  pathname: string;
}) {
  return (
    <div className="flex flex-col relative">
      <div
        className="flex flex-row rounded-lg group transition duration-300 bg-transparent"
        onMouseEnter={() => handleMouseEnter(".disabledIcon", "disabled")}
        onMouseLeave={() => handleMouseLeave(".disabledIcon", "disabled")}
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
      handleMouseLeave(".eyeIcon", "blue");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleMouseLeave(".eyeIcon", "blue");
    };
  }, []);

  return (
    <div className="flex flex-col relative">
      <div
        className="flex flex-row rounded-lg group transition duration-300 bg-transparent"
        onMouseEnter={() => handleMouseEnter(".eyeIcon", "blue")}
        onMouseLeave={() => handleMouseLeave(".eyeIcon", "blue")}
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
  const borderColor =
    timeline.type === "star" ? "border-[#efbf04]" : "border-gray-500";
  return (
    <div className="flex-col hidden md:block">
      <div className="relative h-full w-40">
        <Image
          src={`${pathname}/${timeline.url}/${timeline.icon}`}
          alt={timeline.icon}
          layout="fill"
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
}

export function TimelineDetails({ timeline }: { timeline: TimelineProps }) {
  return (
    <div className="event-box group flex flex-col pt-6 pr-6 pb-6">
      <div className="event-title text-lg font-bold text-black dark:text-white">
        {timeline.title}
      </div>
      <div className="event-description text-gray-600">
        {timeline.description}
      </div>
      <Tags tags={timeline.tags} />
    </div>
  );
}
