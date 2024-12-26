import { PostProps } from "./blog_interface";

export const posts: PostProps[] = [
  {
    title: "The first version of my website!",
    description: "Took some time to build...",
    date: "2024-09-20",
    url: "first-version",
    type: "enabled",
    tags: ["website", "nextjs"],
    searchtag: "next.js, react.js, framer motion, tailwind, typescript",
  },
  {
    title: "Tags Update",
    description: "Now you can search up articles by tags!",
    date: "2024-12-13",
    url: "tags-update",
    type: "enabled",
    tags: ["website", "update"],
    searchtag:
      "tags system, search, improvements, not found page, responsive, parallax, cursor",
  },
];
