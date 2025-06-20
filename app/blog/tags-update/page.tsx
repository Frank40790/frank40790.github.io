"use client";

import {
  Banner,
  FullImage,
  FullTextHeaders,
  LeftRightImage,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";

export default function Blog() {
  const pathname = usePathname();

  return (
    <>
      <title>Tags Update</title>
      <Banner textComponent={"Tags Update"} />
      <FullImage imageSrc={`${pathname}/homepage.png`} altText="homepage" />
      <FullTextHeaders
        headers="What's new?"
        textComponent={
          <>
            <div>
              As the pages on this website increase, it is important to
              implement a search system and a tag system for a easier way to
              find pages. In this update, a tag system is added, where hashtag
              can be added to search for specific tags. (Don&apos;t try to
              search for the pages that are hidden tho...)
            </div>
            <LeftRightImage
              leftImageSrc={`${pathname}/tags.png`}
              leftAltText="tags system on timeline page"
              rightImageSrc={`${pathname}/search_tags.png`}
              rightAltText="search system for tags"
            />
            <div>
              You can also just search up things by pressing the icon in the
              navbar or press the hotkey Ctrl+K or Ctrl+S
            </div>
            <FullImage imageSrc={`${pathname}/search.png`} altText="search" />
            <div>
              The 404 page also have a new look, if you somehow got there
            </div>
            <FullImage
              imageSrc={`${pathname}/not_found.png`}
              altText="search"
            />
            <div>
              This update also includes some minor responsive design fixes, that
              prevents my website from breaking apart :)
            </div>
          </>
        }
      />
    </>
  );
}
