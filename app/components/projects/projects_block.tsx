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
    <div className="flex flex-col relative">
      <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
        <ProjectImage project={project} pathname={pathname} />
        <ProjectDetails project={project} />
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
    <div className="flex flex-col relative">
      <div className="flex flex-row rounded-lg group transition duration-300 bg-transparent hover:bg-gray-200">
        <ProjectImage project={project} pathname={pathname} />
        <ProjectDetails project={project} />
      </div>
    </div>
  );
}

export function ProjectImage({
  project,
  pathname,
}: {
  project: ProjectsProps;
  pathname: string;
}) {
  return (
    <div className="flex flex-col p-6">
      <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-gray-500 group-hover:scale-110 transition duration-200">
        <Image
          src={`${pathname}/${project.url}/${project.icon}`}
          alt={project.icon}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export function ProjectDetails({ project }: { project: ProjectsProps }) {
  return (
    <div className="event-box group flex flex-col p-6">
      <div className="event-title text-lg font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-black">
        {project.title}
      </div>
      <div className="event-description text-gray-600">
        {project.description}
      </div>
      <Tags tags={project.tags} />
    </div>
  );
}
