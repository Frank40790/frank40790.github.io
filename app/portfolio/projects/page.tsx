"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { basePath } from "@/app/base_path";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
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
  url: string;
  icon: string;
  type: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "External Brain",
    description: "A app that transforms note taking",
    url: "external-brain",
    icon: "external-brain.png",
    type: "prod",
  },
  {
    id: 2,
    title: "Dev Diversify",
    description: "A toolbox for programmers",
    url: "dev-diversify",
    icon: "dev-diversify.png",
    type: "disabled",
  },
  {
    id: 3,
    title: "Semantic Spotlight",
    description: "Scemantic search",
    url: "semantic-spotlight",
    icon: "semantic-spotlight.png",
    type: "disabled",
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
                    src={`${basePath}${pathname}/${event.url}/${event.icon}`}
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
            </div>
          </div>
        </div>
      ) : (
        // Use a Link when the node is not disabled
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
                    src={`${basePath}${pathname}/${event.url}/${event.icon}`}
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
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
