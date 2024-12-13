"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { timelines } from "./timeline_db";
import { TimelineProps } from "./timeline_interface";
import { DisabledTimelineItem, EnabledTimelineItem } from "./timeline_block";

export default function Page() {
  return (
    <>
      <title>Timeline</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Timeline</h1>
        {timelines
          .slice()
          .reverse()
          .map((timeline, index) => (
            <Node timeline={timeline} key={index} />
          ))}
      </div>
    </>
  );
}

function Node({ timeline }: { timeline: TimelineProps }) {
  const pathname = usePathname();

  if (timeline.type === "hidden") {
    return null;
  }

  const isDisabled = timeline.type === "disabled";
  const nodeStyles = isDisabled ? "opacity-50 pointer-events-none" : "";

  return (
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
        <Link
          href={`${pathname}/${timeline.url}`}
          className="flex flex-col relative"
        >
          <EnabledTimelineItem timeline={timeline} pathname={pathname} />
        </Link>
      )}
    </motion.div>
  );
}
