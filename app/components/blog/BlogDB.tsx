import { PostProps } from "@/app/components/blog/BlogInterface";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;

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
