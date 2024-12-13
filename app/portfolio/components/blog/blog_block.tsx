import Tags from "../tags";
import { PostProps } from "./blog_interface";

export const DisabledPost = ({ post }: { post: PostProps }) => (
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

export const EnabledPost = ({ post }: { post: PostProps }) => (
  <div className="mb-8 rounded-lg p-6 hover:scale-110 transition duration-300 border-l border-r border-black dark:border-white">
    <div className="text-lg font-bold text-gray-600 dark:text-gray-200">
      {post.title}
    </div>
    <div className="text-gray-600 dark:text-gray-400">{post.description}</div>
    <div className="text-gray-500 dark:text-gray-400">
      Posted on {post.date}
    </div>
  </div>
);
