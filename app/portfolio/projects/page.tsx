"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ProjectsProps } from "../components/projects/projects_interface";
import { projects } from "../components/projects/projects_db";
import {
  DisabledProject,
  EnabledProject,
} from "../components/projects/projects_block";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        {projects
          .slice()
          .reverse()
          .map((event, index) => (
            <Node projects={event} key={index} />
          ))}
      </div>
    </>
  );
}

function Node({ projects }: { projects: ProjectsProps }) {
  const pathname = usePathname();

  if (projects.type === "hidden") {
    return null;
  }

  const isDisabled = projects.type === "disabled";
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
        <DisabledProject project={projects} pathname={pathname} />
      ) : (
        <Link
          href={`${pathname}/${projects.url}`}
          className="flex flex-col relative"
        >
          <EnabledProject project={projects} pathname={pathname} />
        </Link>
      )}
    </motion.div>
  );
}
