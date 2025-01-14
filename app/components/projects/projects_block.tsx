import Image from "next/image";
import { ProjectsProps } from "./projects_interface";
import Tags from "../tags";

export function DisabledProject({
  project,
  pathname,
}: {
  project: ProjectsProps;
  pathname: string;
}) {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden group transition duration-300 bg-transparent">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={`${pathname}/${project.url}/${project.icon}`}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
              style={{
                filter: "blur(8px)",
                opacity: 0.6,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <ProjectDetails project={project} />
        </div>
      </div>
    </div>
  );
}

export function EnabledProject({
  project,
  pathname,
}: {
  project: ProjectsProps;
  pathname: string;
}) {
  return (
    <div className="relative flex flex-col rounded-lg overflow-hidden group transition duration-300 bg-transparent">
      <div className="relative w-full h-96 overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={`${pathname}/${project.url}/${project.icon}`}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-10">
          <ProjectDetails project={project} />
        </div>
      </div>
    </div>
  );
}

export function ProjectDetails({ project }: { project: ProjectsProps }) {
  return (
    <div className="event-box flex flex-col text-white">
      <div className="event-title text-xl font-bold mb-2">{project.title}</div>
      <div className="event-description text-gray-300 mb-4">
        {project.description}
      </div>
      <Tags tags={project.tags} />
    </div>
  );
}
