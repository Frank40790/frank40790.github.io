import Link from "next/link";

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
  content: string;
  date: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the first post',
    date: '2022-01-01',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the second post',
    date: '2022-01-15',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'This is the third post',
    date: '2022-02-01',
  },
];

function Post({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="mb-8 bg-gray-200 rounded-lg p-6 hover:scale-110 transition duration-300">
        <div className="text-lg font-bold">{post.title}</div>
        <div className="text-gray-600">{post.content}</div>
        <div className="text-gray-500">Posted on {post.date}</div>
      </div>
    </Link>
  );
}