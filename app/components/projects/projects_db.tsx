import { ProjectsProps } from "@/app/components/projects/projects_interface";

export const projects: ProjectsProps[] = [
  {
    title: "External Brain",
    description: "A app that transforms note taking",
    url: "external-brain",
    icon: "external-brain.png",
    type: "enabled",
    tags: ["llm", "python", "tts"],
    searchtag:
      "projects, notetaking, note taking, llm, large language model, text to speech",
  },
  {
    title: "Dev Diversify",
    description: "A toolbox for programmers",
    url: "dev-diversify",
    icon: "dev-diversify.png",
    type: "enabled",
    tags: ["C", "python"],
    searchtag: "projects, tools, toolbox, toolkit, development tools",
  },
  {
    title: "Semantic Spotlight",
    description: "Scemantic search",
    url: "semantic-spotlight",
    icon: "semantic-spotlight.png",
    type: "hidden",
    tags: ["python", "semantic search"],
    searchtag: "projects, semantic search, automatic highlighting",
  },
  {
    title: "Text Generation",
    description: "Writing a small decoder only transformer language model",
    date: "21 May 2024 ~",
    url: "text-generation",
    icon: "icon.png",
    type: "enabled",
    tags: ["ai/ml", "llm", "python", "PyTorch"],
    searchtag:
      "genai, generative, artificial intelligence, machine learning, attention, large language model, nlp, natural language processing, neural network, qkv, query key value",
  },
];
