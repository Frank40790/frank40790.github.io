import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header className="bg-gray-200 h-16 flex items-center justify-center border-t border-gray-300">
        <div className="centered flex flex-row">
          <Link href="/portfolio" className="flex justify-center p-3">
            Home
          </Link>
          <Link href="/portfolio/timeline" className="flex justify-center p-3">
            Timeline
          </Link>
          <Link href="/portfolio/blog" className="flex justify-center p-3">
            Blog
          </Link>
        </div>
      </header>
    </>
  );
}
