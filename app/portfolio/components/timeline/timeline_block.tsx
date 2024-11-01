import Image from "next/image";
import { TimelineProps } from "./timeline_interface";

export function DisabledTimelineItem({
  timeline,
  pathname,
}: {
  timeline: TimelineProps;
  pathname: string;
}) {
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
        <TimelineImage timeline={timeline} pathname={pathname} />
        <TimelineDetails timeline={timeline} />
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
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
        <TimelineImage timeline={timeline} pathname={pathname} />
        <TimelineDetails timeline={timeline} />
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
  return (
    <div className="flex flex-col p-6">
      <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-500 group-hover:scale-110 transition duration-200">
        <Image
          src={`${pathname}/${timeline.url}/${timeline.icon}`}
          alt={timeline.icon}
          layout="fill"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export function TimelineDetails({ timeline }: { timeline: TimelineProps }) {
  return (
    <div className="event-box group flex flex-col p-6">
      <div className="event-title text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-black">
        {timeline.title}
      </div>
      <div className="event-description text-gray-600">
        {timeline.description}
      </div>
      <div className="event-date text-gray-500">{timeline.date}</div>
    </div>
  );
}
