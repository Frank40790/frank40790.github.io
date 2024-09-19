"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <title>Blog</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
}

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  url: string;
  type: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "The first version of my website!",
    description: "Took some time to build...",
    date: "2024-09-",
    url: "first-version",
    type: "prod",
  },
];

export function Post({ post }: { post: Post }) {
  const pathname = usePathname();

  if (post.type === "hidden") {
    return null;
  }

  const isDisabled = post.type === "disabled";
  const postStyles = isDisabled ? "opacity-50 pointer-events-none" : "";

  return (
    <motion.div
      initial={{ scale: isDisabled ? 1 : 0 }}
      animate={{ rotate: 0, scale: isDisabled ? 1 : 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={postStyles}
    >
      {isDisabled ? (
        // Disabled
        <div className="mb-8 rounded-lg p-6 bg-gray-200 dark:bg-gray-500">
          <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
            {post.title}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {post.description}
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            Posted on {post.date}
          </div>
        </div>
      ) : (
        // Not disabled
        <Link href={`${pathname}/${post.url}`}>
          <div className="mb-8 rounded-lg p-6 hover:scale-110 transition duration-300 bg-gray-200 dark:bg-gray-500">
            <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
              {post.title}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {post.description}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Posted on {post.date}
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
}
