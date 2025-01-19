"use client";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "@/app/components/cursor/hover_cursor";
import {
  FullTextHeaders,
  Banner,
  ImageSplit,
  ConfettiButton,
} from "../../components/page_block";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Blog() {
  const pathname = usePathname();

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (event: any) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <>
      <title>Style Update</title>
      <Banner textComponent={"Style Update"} />

      <ImageSplit
        beforeImage={`${pathname}/home-dark.png`}
        afterImage={`${pathname}/home-light.png`}
        lineColor="bg-gray-800"
      />

      <FullTextHeaders
        headers="Whats new?"
        textComponent={
          <>
            <strong>Color Theme</strong>
            <div>
              Now the website has dark and light mode! You can switch them on
              the top of this page. The sun icon is for light mode, giving a
              bright and clean interface. The moon icon is for dark mode. And
              the earth icon syncs the website theme with the system&apos;s
              theme.
            </div>
            <strong>Website Styling</strong>
            <div>
              The website is updated to have a different look. The timeline page
              has an Actual timeline instead of just a list of things I&apos;ve
              done in the past. Image on the project page has a increased size
              to make it feel more modern.
            </div>
            <div>
              This update also gives a better mobile experience through
              responsive design.
            </div>
            <strong>Timeline</strong>
            <div>
              A horizontal timeline is great for managing versions, so i just
              decided to add this in
            </div>
            <strong>Cursor</strong>
            <br />

            <div
              onMouseEnter={() =>
                handleMouseEnter(".eyeIcon", "green", "large")
              }
              onMouseLeave={() =>
                handleMouseLeave(".eyeIcon", "green", "large")
              }
              className=""
            >
              <ConfettiButton
                x={cursorPosition.x / screenSize.width}
                y={cursorPosition.y / screenSize.height}
                content={
                  "You can see sometimes the cursor will change, that indicates you can interact with the item you are hovering on. Just a fun feature to add :)"
                }
              />
            </div>
          </>
        }
      />

      <FullTextHeaders
        headers="Website Styling"
        textComponent={
          <>
            <div>
              Here are some of the comparison between the old and new styling on
              these different pages.
            </div>
            <strong>Timeline Page</strong>
            <ImageSplit
              beforeImage={`${pathname}/timeline.png`}
              afterImage={`${pathname}/timeline-dark.png`}
              lineColor="bg-white"
            />
            <strong>Projects Page</strong>
            <ImageSplit
              beforeImage={`${pathname}/projects.png`}
              afterImage={`${pathname}/projects-dark.png`}
              lineColor="bg-white"
            />
            <strong>Blog Page</strong>
            <ImageSplit
              beforeImage={`${pathname}/blog.png`}
              afterImage={`${pathname}/blog-dark.png`}
              lineColor="bg-white"
            />
          </>
        }
      />
    </>
  );
}
