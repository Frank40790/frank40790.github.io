"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { timelines } from "@/app/components/timeline/timeline_db";
import { TimelineProps } from "@/app/components/timeline/timeline_interface";
import {
  DisabledTimelineItem,
  EnabledTimelineItem,
} from "@/app/components/timeline/timeline_block";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <>
      <title>Timeline</title>
      <div className="max-w-2xl mx-auto min-h-screen pt-20">
        <h1 className="text-3xl font-bold mb-4">Timeline</h1>
        <VerticalTimeline
          lineColor={resolvedTheme === "light" ? "black" : "white"}
          layout={"1-column-left"}
          animate={false}
        >
          {timelines
            .slice()
            .sort((a, b) => {
              if (a.type === "star" && b.type !== "star") {
                return -1;
              }
              if (b.type === "star" && a.type !== "star") {
                return 1;
              }

              const [startDateA] = a.date.split("~");
              const [startDateB] = b.date.split("~");

              const dateA = new Date(startDateA);
              const dateB = new Date(startDateB);

              return dateB.getTime() - dateA.getTime();
            })
            .map((timeline, index) => (
              <Node timeline={timeline} key={index} />
            ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

function Node({ timeline }: { timeline: TimelineProps }) {
  let pathname = usePathname();
  const { theme, resolvedTheme, setTheme } = useTheme();

  if (timeline.type === "hidden") {
    return null;
  }
  let href = `${pathname}/${timeline.url}`;

  if (timeline.url.startsWith("/")) {
    href = timeline.url;
  }

  const isDisabled = timeline.type === "disabled";
  const nodeStyles = isDisabled ? "opacity-50" : "";

  return (
    <VerticalTimelineElement
      style={{ outline: "none", border: "none" }}
      iconStyle={{
        background: resolvedTheme === "light" ? "white" : "black",
        boxShadow: "none",
        borderRadius: 0,
      }}
      contentArrowStyle={{ display: "none" }}
      contentStyle={{
        background: "none",
        color: "none",
        boxShadow: "none",
        padding: 0,
      }}
      icon={
        <Icon
          icon="mynaui:diamond-solid"
          className={
            timeline.type === "star"
              ? "text-yellow-500"
              : resolvedTheme === "light"
              ? "text-black"
              : "text-white"
          }
        />
      }
      visible={true}
    >
      <div
        className={`inline-block ${
          timeline.type === "star"
            ? "bg-yellow-500 text-white"
            : resolvedTheme === "light"
            ? "bg-black text-white"
            : "bg-white text-black"
        }  py-2 px-4 font-semibold rounded-lg`}
        about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
      >
        {timeline.date}
      </div>
      <motion.div
        initial={{ scale: isDisabled ? 1 : 0 }}
        animate={{ rotate: isDisabled ? 0 : 0, scale: isDisabled ? 1 : 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={nodeStyles}
      >
        {isDisabled ? (
          <DisabledTimelineItem timeline={timeline} pathname={pathname} />
        ) : (
          <Link href={href} className="flex flex-col relative">
            <EnabledTimelineItem timeline={timeline} pathname={pathname} />
          </Link>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
}
