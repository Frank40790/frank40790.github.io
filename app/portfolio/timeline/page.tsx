"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { basePath } from "@/app/base_path";

export default function Timeline() {
  return (
    <>
      <title>Timeline</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Timeline</h1>
        {events
          .sort((a, b) => b.id - a.id)
          .map((event) => (
            <Node event={event} key={event.id} />
          ))}
      </div>
    </>
  );
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
  icon: string;
  type: string; // hidden disabled prod
}

const events: Event[] = [
  {
    id: 1,
    title: "CISSA Codebrew Hackathon 2024",
    description: "A Hackathon event hosted by CISSA at UniMelb",
    date: "04 Apr 2024 ~ 07 Apr 2024",
    url: "cissa-codebrew-hackathon-2024",
    icon: "codebrew-icon.svg",
    type: "disabled",
  },
  {
    id: 2,
    title: "Foundation of Computing Project 1",
    description: "Vaccumator: Exploring about path-finding algorithm",
    date: "16 Apr 2024 ~ 26 Apr 2024",
    url: "foc-project-1",
    icon: "unimelb-icon.jpg",
    type: "hidden",
  },
  {
    id: 3,
    title: "Foundation of Computing Project 2",
    description: "Zoomerbinies: Grouping objects by different constraints",
    date: "1 May 2024 ~ 17 May 2024",
    url: "foc-project-2",
    icon: "unimelb-icon.jpg",
    type: "hidden",
  },
  {
    id: 4,
    title: "VICHACK 2024",
    description: "Hackathon",
    date: "09 Aug 2024 ~ 18 Aug 2024",
    url: "vichack-2024",
    icon: "vichack.png",
    type: "disabled",
  },
  {
    id: 5,
    title: "Foundation of Algorithm Project 1",
    description: "Forging the basics of C",
    date: "28 Aug 2024 ~ 13 Sep 2024",
    url: "foa-project-1",
    icon: "unimelb-icon.jpg",
    type: "hidden",
  },
  {
    id: 6,
    title: "Foundation of Algorithm Project 2",
    description: "Game of Life",
    date: "18 Sep 2024 ~ 11 Oct 2024",
    url: "foa-project-1",
    icon: "unimelb-icon.jpg",
    type: "hidden",
  },
];

function Node({ event }: { event: Event }) {
  const pathname = usePathname();

  if (event.type === "hidden") {
    return null;
  }

  const isDisabled = event.type === "disabled";
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
        // Disabled
        <div className="flex flex-col relative">
          <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
            <div className="flex flex-col p-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-500 group-hover:scale-110 transition duration-200">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={`${basePath}/${pathname}/${event.url}/${event.icon}`}
                    alt={`${event.icon}`}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="event-box group flex flex-col p-6">
              <div className="event-title text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-black">
                {event.title}
              </div>
              <div className="event-description text-gray-600">
                {event.description}
              </div>
              <div className="event-date text-gray-500">{event.date}</div>
            </div>
          </div>
        </div>
      ) : (
        // Not disabled
        <Link
          href={`${pathname}/${event.url}`}
          className="flex flex-col relative"
        >
          <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
            <div className="flex flex-col p-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-500 group-hover:scale-110 transition duration-200">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={`${basePath}/${pathname}/${event.url}/${event.icon}`}
                    alt={`${event.icon}`}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="event-box group flex flex-col p-6">
              <div className="event-title text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-black">
                {event.title}
              </div>
              <div className="event-description text-gray-600">
                {event.description}
              </div>
              <div className="event-date text-gray-500">{event.date}</div>
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
