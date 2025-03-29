"use client";
import {
  LeftPicRightText,
  RightPicLeftText,
  FullText,
  FullTextHeaders,
  Banner,
  IconList,
  IconListStatic,
  VideoLoopBlock,
} from "../../components/blocks/PageBlock";
import { usePathname } from "next/navigation";

export default function Event() {
  const pathname = usePathname();
  const icons = [{ icon: "devicon:nextjs", name: "Next.js" }];

  return (
    <>
      <title>Simple Chat App</title>
      <Banner textComponent="Simple Chat App" />
      <FullTextHeaders
        headers="Journey"
        textComponent={
          <>
            <strong>Starting Point</strong>
            <div>
              This time, I am trying to implement a simplistic chat app that has
              no bloat and can be easily used. From the start, nothing really
              special, just building up the basic web structure and calling the
              APIs to make sure it works. It really takes a lot of time aligning
              the buttons around the UI.
            </div>
            <strong>Rendering</strong>
            <div>
              It is important that markdown and mathamatical equation rendered
              properly ensuring user experience. So that is added into this UI
              as well.
            </div>
            <VideoLoopBlock
              videoSrc={`${pathname}/demo_latex.mp4`}
              controls={true}
            />
            <strong>The &quot;Thinking Mode&quot;</strong>
            <div>
              While building the webapp, I&apos;m wondering if it is to use a
              non-reasoning llm to simulate reasoning through prompting, so that
              was added into the interface as well. It uses structured output to
              gives a answer followed by the next action to iteratively run
              through the question. Also added some animations to make it look
              cool.
            </div>
            <VideoLoopBlock
              videoSrc={`${pathname}/demo_thinking.mp4`}
              controls={true}
            />
            <strong>Streaming</strong>
            <div>
              Waiting for API to respond, especially for long query is really
              annoying. Therefore streaming is implemented. It is really a pain
              to implement this across the frontend and backend. This did took
              quite a while to get right.
            </div>
            <VideoLoopBlock
              videoSrc={`${pathname}/demo_stream.mp4`}
              controls={true}
            />
          </>
        }
      />
      <FullTextHeaders headers="Tech Stack?" textComponent="" />
      <IconListStatic icons={icons} />
    </>
  );
}
