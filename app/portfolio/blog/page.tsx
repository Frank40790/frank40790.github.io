"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <title>Blog</title>
      <div className="max-w-2xl mx-auto p-4 pt-6">
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
}

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    description: "This is the first post",
    date: "2022-01-01",
    url: "blog_1",
  },
  {
    id: 2,
    title: "Post 2",
    description: "This is the second post",
    date: "2022-01-15",
    url: "blog_2",
  },
  {
    id: 3,
    title: "Post 3",
    description: "This is the third post",
    date: "2022-02-01",
    url: "blog_3",
  },
  {
    id: 4,
    title: "Post 4",
    description: "This is the third post",
    date: "2022-03-01",
    url: "blog_4",
  },
];

function Post({ post }: { post: Post }) {
  const pathname = usePathname();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Link href={`${pathname}/${post.url}`}>
        <div className="mb-8 rounded-lg p-6 hover:scale-110 transition duration-300 bg-gray-200 dark:bg-gray-500">
          <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
            {post.title}
          </div>
          <div className="text-gray-600 dark:text-gray-200">
            {post.description}
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            Posted on {post.date}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
