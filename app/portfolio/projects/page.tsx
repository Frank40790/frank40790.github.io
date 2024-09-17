"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <title>Timeline</title>
      <div className="max-w-2xl mx-auto p-4 pt-6">
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
}

const events: Event[] = [
  {
    id: 1,
    title: "Project Placeholder",
    description: "A project",
    url: "project_1",
    icon: "",
  },
];

function Node({ event }: { event: Event }) {
  const pathname = usePathname();
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
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
                    src={`${pathname}/${event.url}/${event.icon}`}
                    alt={`${event.icon}`}
                    fill
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="event-box group flex flex-col p-6 ">
              <div className="event-title text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-black">
                {event.title}
              </div>
              <div className="event-description text-gray-600">
                {event.description}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
