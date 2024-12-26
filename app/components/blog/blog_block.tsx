import Tags from "../tags";
import { PostProps } from "./blog_interface";

export function DisabledPost({ post }: { post: PostProps }) {
  return (
    <div className="mb-8 rounded-lg p-6">
      <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
        {post.title}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{post.description}</div>
      <div className="text-gray-500 dark:text-gray-400">
        Posted on {post.date}
      </div>
    </div>
  );
}

export function EnabledPost({ post }: { post: PostProps }) {
  const borderColor =
    post.type === "star"
      ? "border-[#efbf04]"
      : "border-black dark:border-white";
  return (
    <div
      className={`mb-8 rounded-lg p-6 hover:scale-110 transition duration-300 border-l-2 border-r-2 ${borderColor} `}
    >
      <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
        {post.title}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{post.description}</div>
      <div className="text-gray-500 dark:text-gray-400">
        Posted on {post.date}
      </div>
    </div>
  );
}
