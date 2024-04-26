import Link from "next/link";
export default function Navbar () {
    return (
        <>
        <div className="centered flex flex-row">
            <Link href="/portfolio/" className="flex justify-center p-3">HFH</Link>
            <Link href="/portfolio" className="flex justify-center p-3">Home</Link>
            <Link href="/portfolio/timeline" className="flex justify-center p-3">Timeline</Link>
            <Link href="/portfolio/blog" className="flex justify-center p-3">Blog</Link>
        </div>
        </>
    );
}