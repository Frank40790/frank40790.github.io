import { ProjectsProps } from "@/app/components/projects/ProjectsInterface";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;

export default function GetProjects() {
  const t = useTranslation(translations);
  const projects: ProjectsProps[] = [
    {
      title: t("external_brain_title"),
      description: t("external_brain_desc"),
      url: "external-brain",
      icon: "external-brain.png",
      type: "enabled",
      tags: [t("tag_llm"), "python", t("tag_tts")],
      searchtag: t("external_brain_searchtag"),
    },
    {
      title: t("dev_diversify_title"),
      description: t("dev_diversify_desc"),
      url: "dev-diversify",
      icon: "dev-diversify.png",
      type: "enabled",
      tags: ["C", "python"],
      searchtag: t("dev_diversify_searchtag"),
    },
    {
      title: t("semantic_spotlight_title"),
      description: t("semantic_spotlight_desc"),
      url: "semantic-spotlight",
      icon: "semantic-spotlight.png",
      type: "hidden",
      tags: ["python", t("tag_semantic_search")],
      searchtag: t("semantic_spotlight_searchtag"),
    },
    {
      title: t("text_generation_title"),
      description: t("text_generation_desc"),
      date: "21 May 2024 ~",
      url: "text-generation",
      icon: "icon.png",
      type: "enabled",
      tags: [t("tag_ai_ml"), t("tag_llm"), "python", "PyTorch"],
      searchtag: t("text_generation_searchtag"),
    },
    {
      title: t("simple_chat_app_title"),
      description: t("simple_chat_app_desc"),
      date: "4 Jan 2025 ~ 15 Jan 2025",
      url: "simple-chat-app",
      icon: "icon.png",
      type: "hidden",
      tags: [t("tag_web"), t("tag_ai")],
      searchtag: t("simple_chat_app_searchtag"),
    },
    {
      title: t("raytracing_title"),
      description: t("raytracing_desc"),
      date: "9 Nov 2024 ~ 15 Nov 2024",
      url: "raytracing-java",
      icon: "icon.png",
      type: "hidden",
      tags: [t("tag_graphics"), t("tag_ray_tracing"), "java"],
      searchtag: t("raytracing_searchtag"),
    },
  ];
  return projects;
}
