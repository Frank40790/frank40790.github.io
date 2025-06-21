"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { DisabledPost, EnabledPost } from "@/app/components/blog/BlogBlock";
import GetPosts from "@/app/components/blog/BlogDB";
import { PostProps } from "@/app/components/blog/BlogInterface";

export default function Page() {
  const posts = GetPosts();
  return (
    <>
      <title>Blog</title>
      <div
        className="max-w-7xl mx-auto p-4 pt-20 min-h-screen"
        about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
      >
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
        <DisabledPost post={post} pathname={pathname} />
      ) : (
        // Enabled
        <Link href={`${pathname}/${post.url}`}>
          <EnabledPost post={post} pathname={pathname} />
        </Link>
      )}
    </motion.div>
  );
}
