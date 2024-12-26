"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DisabledPost, EnabledPost } from "./blog_block";
import { posts } from "./blog_db";
import { PostProps } from "./blog_interface";

export default function Page() {
  return (
    <>
      <title>Blog</title>
      <div className="max-w-2xl mx-auto p-4 pt-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        {posts
          .sort((a, b) => {
            if (a.type === "star" && b.type !== "star") {
              return -1;
            }
            if (b.type === "star" && a.type !== "star") {
              return 1;
            }

            const [startDateA] = a.date.split("~");
            const [startDateB] = b.date.split("~");

            const dateA = new Date(startDateA);
            const dateB = new Date(startDateB);

            return dateB.getTime() - dateA.getTime();
          })
          .map((post, index) => (
            <Post key={index} post={post} />
          ))}
      </div>
    </>
  );
}

function Post({ post }: { post: PostProps }) {
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
        <DisabledPost post={post} />
      ) : (
        // Enabled
        <Link href={`${pathname}/${post.url}`}>
          <EnabledPost post={post} />
        </Link>
      )}
    </motion.div>
  );
}
