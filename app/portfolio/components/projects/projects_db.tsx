import { ProjectsProps } from "./projects_interface";

export const projects: ProjectsProps[] = [
  {
    title: "External Brain",
    description: "A app that transforms note taking",
    url: "external-brain",
    icon: "external-brain.png",
    type: "enabled",
    tags: ["llm", "python", "tts"],
  },
  {
    title: "Dev Diversify",
    description: "A toolbox for programmers",
    url: "dev-diversify",
    icon: "dev-diversify.png",
    type: "enabled",
    tags: ["c", "python"],
  },
  {
    title: "Semantic Spotlight",
    description: "Scemantic search",
    url: "semantic-spotlight",
    icon: "semantic-spotlight.png",
    type: "hidden",
    tags: ["python", "semantic search"],
  },
];
