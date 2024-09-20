"use client";
import {
  FullTextHeaders,
  Banner,
  IconListStatic,
  FullImage,
} from "../../components/page_block";
import { usePathname } from "next/navigation";
import { basePath } from "@/app/base_path";

export default function Blog() {
  const pathname = usePathname();
  const icons = [
    { icon: "devicon:nextjs", name: "Next.js" },
    { icon: "devicon:react", name: "React.js" },
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "devicon:typescript", name: "TypeScript" },
    { icon: "simple-icons:framer", name: "Framer" },
  ];

  return (
    <>
      <title>First Website</title>
      <Banner textComponent={"First Website"} />
      <FullImage
        imageSrc={`${basePath}${pathname}/homepage.png`}
        altText="Website Home Page"
      />
      <FullTextHeaders
        headers="How do we get here?"
        textComponent={
          <>
            <div>
              This is the first version of my website containing some of the
              projects I am working on. The website at this stage is still
              pretty barebone. I would like to add some new pages and projects
              onto this page in the future.
            </div>
            <div>
              You might see some of the projects and pages are not clickable
              yet. I am still working on those, and expecting to finish it in
              the near future.
            </div>
            <br />
          </>
        }
      />
      <FullTextHeaders headers="Tech Stack" textComponent="" />
      <IconListStatic icons={icons} />
    </>
  );
}
