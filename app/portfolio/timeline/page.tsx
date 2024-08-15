"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Timeline() {
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
  date: string;
  url: string;
  icon: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "CISSA Codebrew Hackathon 2024",
    description: "A Hackathon event hosted by CISSA at UniMelb",
    date: "04 Apr 2024 ~ 07 Apr 2024",
    url: "event_1",
    icon: "codebrew-icon.svg",
  },
  {
    id: 2,
    title: "Foundation of Computing Project 1",
    description: "University of Melbourne Foundation of Computing Project 1",
    date: "?",
    url: "event_2",
    icon: "unimelb-icon.jpg",
  },
  {
    id: 3,
    title: "Foundation of Computing Project 2",
    description: "University of Melbourne Foundation of Computing Project 2",
    date: "?",
    url: "event_3",
    icon: "unimelb-icon.jpg",
  },
  {
    id: 4,
    title: "VIKHACK 2024",
    description: "Hackathon",
    date: "09 Aug 2024 ~ 18 Aug 2024",
    url: "event_4",
    icon: "vichack.png",
  },
];

function Node({ event }: { event: Event }) {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={`${pathname}/${event.url}`}
        className="flex flex-col relative"
      >
        <div className="flex flex-row rounded-lg group hover:bg-gray-100 transition duration-300">
          <div className="flex flex-col p-6">
            <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-500 group-hover:scale-110 transition duration-200">
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
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
          <div className="flex flex-col p-6">
            <div className="text-lg font-bold">{event.title}</div>
            <div className="text-gray-600">{event.description}</div>
            <div className="text-gray-500">{event.date}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
