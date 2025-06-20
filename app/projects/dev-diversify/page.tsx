"use client";

import { usePathname } from "next/navigation";
import { github } from "@/app/components/Detail";
import {
  Banner,
  FullImage,
  FullTextHeaders,
} from "@/app/components/blocks/TextImageBlocks";
import { IconListStatic } from "@/app/components/blocks/IconBlocks";
import { CodeLinkBlock } from "@/app/components/blocks/LinkBlocks";

export default function Event() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:c", name: "C" },
    { icon: "devicon:html5", name: "HTML" },
  ];
  const pathname = usePathname();
  return (
    <>
      <title>Dev Diversify</title>
      <Banner textComponent="Dev Diversify" />
      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>
              This is a codebase that contains lots of different code, including
              code snippits, project&quot;s code etc...
            </div>
          </>
        }
      />
      <FullImage
        imageSrc={`${pathname}/dev-diversify-github.png`}
        altText="DevDiversify GitHub Page"
      />
      <FullTextHeaders
        headers="Programming Languages?"
        textComponent={
          <>
            <div>
              The codebase mainly has these languages, but could expand in the
              future
            </div>
          </>
        }
      />
      <IconListStatic icons={icons} />
      <CodeLinkBlock
        header="Code"
        links={[
          {
            name: "DevDiversify",
            url: `${github}/DevDiversify/`,
          },
        ]}
      />
    </>
  );
}
