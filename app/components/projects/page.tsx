"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ProjectsProps } from "./projects_interface";
import { projects } from "./projects_db";
import { DisabledProject, EnabledProject } from "./projects_block";

export default function Page() {
  return (
    <>
      <title>Projects</title>
      <div className="max-w-7xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects
            .slice()
            .sort((a, b) => {
              if (a.type === "star" && b.type !== "star") {
                return -1;
              }
              if (b.type === "star" && a.type !== "star") {
                return 1;
              }
              return 0;
            })
            .map((event, index) => (
              <Node projects={event} key={index} />
            ))}
        </div>
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
