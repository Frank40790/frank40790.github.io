"use client";
import {
  FullText,
  FullTextHeaders,
  Banner,
  CodeLinkBlock,
  IconListStatic,
  LeftRightImage,
  VideoLoopBlock,
  CodeBlock,
} from "../../components/page_block";
import { github } from "../../components/detail";
import { usePathname } from "next/navigation";

export default function Event() {
  const icons = [
    { icon: "devicon:c", name: "C" },
    { icon: "devicon:opengl", name: "OpenGL" },
  ];
  const pathname = usePathname();

  return (
    <>
      <title>OpenGL Projection</title>
      <Banner textComponent="OpenGL Projection" />

      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>
              This is just a small experiment that I&apos;ve done in a bit of
              time. Using the projection in linear algebra on computer graphics
              (OpenGL)
            </div>
          </>
        }
      />
      <VideoLoopBlock videoSrc={`${pathname}/animation.mp4`} />

      <FullTextHeaders headers="Journey" textComponent="" />
      <FullText
        textComponent={
          <>
            <div>
              Starting from the very beginning, I was looking at a question in
              the linear algebra question booklet. Suddenly comming across a
              question about projection from 3D to 2D. And I decided to give it
              a try on OpenGL. From the start, OpenGL is not working correctly,
              and soon I figure out that I need GLFW installed to get the code
              working correctly. Once the basic frame is running properly, I
              started to think about those algebratic things such as
              transformation matrix, rotation matrix etc...
            </div>
            <strong>This is where I begin version 1.</strong>
            <div>
              When developing version 1, I am just using some basic C to make it
              work. I start by building the array in Stack memory and transfer
              it into Heap memory by a function.
            </div>
            <div>
              Then I construct the transformation matrix where I can alter the
              original 3D shape. I also construct the rotation matrix for the
              rotating animation. Finally I added a projection matrix so that
              the 3D shape can be project onto the 2D coordinate system on
              OpenGL.
            </div>
            <div>
              I also coded up a matrix multiplication function so that the
              matrix can be applied onto the vector
            </div>
            <strong>Starting version 2.</strong>
            <div>
              In version 1, it is mainly used for doing a &quot;proof of
              concept&quot;, so the I did not consider anything about dynamic
              memory management. Therefore, in version 2, I refined some code to
              use structs and dynamic memory, where the memory used are freed.
              This time, function pointers are also used for selecting between
              different matrix multiplication method.
            </div>
          </>
        }
      />
      <LeftRightImage
        leftImageSrc={`${pathname}/draw_v1.png`}
        leftAltText="code version 1"
        rightImageSrc={`${pathname}/draw_v2.png`}
        rightAltText="code version 2"
      />

      <FullTextHeaders
        headers="Programming language used?"
        textComponent={<></>}
      />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers="What I've learnt?"
        textComponent={
          <>
            <div>
              I&apos;ve applied some of my knowledge in linear algebra and C and
              build a rotating shape in OpenGL. On the way, I&apos;ve learnt how
              to
            </div>
            <ul className="list-none pl-4">
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Build transformation matrix, rotation matrix and projection
                matrix
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Using dynamic memory allocation to do matrix operation
              </li>
            </ul>
          </>
        }
      />

      <CodeLinkBlock
        header="Code"
        links={[
          {
            name: "draw_v1.c",
            url: `${github}/DevDiversify/blob/main/openglexperiment/draw_v1.c`,
          },
          {
            name: "draw_v2.c",
            url: `${github}/DevDiversify/blob/main/openglexperiment/draw_v2.c`,
          },
        ]}
      />
    </>
  );
}
