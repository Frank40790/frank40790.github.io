"use client";
import {
  LeftPicRightText,
  RightPicLeftText,
  FullText,
  FullTextHeaders,
  Banner,
  IconList,
} from "../../components/blocks/PageBlock";
import { usePathname } from "next/navigation";

export default function Event() {
  const icons = [{ icon: "devicon:python", name: "Python" }];
  const pathname = usePathname();
  return (
    <>
      <title>Semantic Spotlight</title>
      <Banner textComponent="Semantic Spotlight" />
      <FullTextHeaders
        headers="Journey"
        textComponent={
          <>
            <div></div>
          </>
        }
      />
    </>
  );
}
