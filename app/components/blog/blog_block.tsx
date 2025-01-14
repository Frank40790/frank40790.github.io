import Tags from "../tags";
import { PostProps } from "./blog_interface";
import Image from "next/image";

export function DisabledPost({
  post,
  pathname,
}: {
  post: PostProps;
  pathname: string;
}) {
  return (
    <div
      className="mb-4 rounded-xl overflow-hidden relative group"
      style={{
        backgroundImage: `url(${pathname}/${post.url}/${post.icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/60 transition-opacity"></div>

      <div className="relative z-10 p-6 space-y-4 opacity-90">
        <div className="text-xl font-semibold text-white">{post.title}</div>
        <div className="text-gray-200">Post disabled</div>
      </div>
    </div>
  );
}

export function EnabledPost({
  post,
  pathname,
}: {
  post: PostProps;
  pathname: string;
}) {
  return (
    <div className="mb-6 sm:mb-8 lg:mb-12 rounded-xl overflow-hidden relative group">
      <div className="relative w-full h-20 sm:h-28 md:h-36 lg:h-40">
        <Image
          src={`${pathname}/${post.url}/${post.icon}`}
          alt={post.title}
          width={500}
          height={100}
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-black/80 via-transparent to-transparent backdrop-blur-md"></div>
      </div>

      <div className="relative z-10 p-3 space-y-4 bg-gradient-to-t bg-gray-100 dark:bg-black">
        <div className="text-base sm:text-lg md:text-lg font-semibold text-black dark:text-white">
          {post.title}
        </div>
        <div className="text-xs sm:text-sm md:text-sm text-black dark:text-gray-200">
          {post.description}
        </div>
        <div className="text-xs sm:text-sm md:text-sm text-black dark:text-gray-400">
          Posted on {post.date}
        </div>
        <div className="mt-4">
          <Tags tags={post.tags} />
        </div>
      </div>
    </div>
  );
}
