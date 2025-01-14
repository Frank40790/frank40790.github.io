import { PostProps } from "./blog_interface";

export const posts: PostProps[] = [
  {
    title: "The first version of my website!",
    description: "Took some time to build...",
    date: "2024-09-20",
    url: "first-version",
    icon: "icon.png",
    type: "enabled",
    tags: ["website", "nextjs"],
    searchtag: "next.js, react.js, framer motion, tailwind, typescript",
  },
  {
    title: "Tags Update",
    description: "Now you can search up articles by tags!",
    date: "2024-12-13",
    url: "tags-update",
    icon: "icon.png",
    type: "enabled",
    tags: ["website", "update", "tags"],
    searchtag:
      "tags system, search, improvements, not found page, responsive, parallax, cursor",
  },
  {
    title: "Style Update",
    description: "Timeline, Projects and Blog page has a new look!",
    date: "2025-01-16",
    url: "style-update",
    icon: "icon.png",
    type: "enabled",
    tags: ["website", "update", "style"],
    searchtag: "style, color, modern, dark mode, light mode",
  },
];
