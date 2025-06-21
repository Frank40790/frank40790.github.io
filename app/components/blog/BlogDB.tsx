import { PostProps } from "@/app/components/blog/BlogInterface";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function GetPosts() {
  const t = useTranslation(translations);
  const posts: PostProps[] = [
    {
      title: t("post1_title"),
      description: t("post1_desc"),
      date: "2024-09-20",
      url: "first-version",
      icon: "icon.png",
      type: "enabled",
      tags: [t("website"), "nextjs"],
      searchtag: t("post1_searchtag"),
    },
    {
      title: t("post2_title"),
      description: t("post2_desc"),
      date: "2024-12-13",
      url: "tags-update",
      icon: "icon.png",
      type: "enabled",
      tags: [t("website"), t("update"), t("tags")],
      searchtag: t("post2_searchtag"),
    },
    {
      title: t("post3_title"),
      description: t("post3_desc"),
      date: "2025-01-16",
      url: "style-update",
      icon: "icon.png",
      type: "enabled",
      tags: [t("website"), t("update"), t("style")],
      searchtag: t("post3_searchtag"),
    },
  ];
  return posts;
}
