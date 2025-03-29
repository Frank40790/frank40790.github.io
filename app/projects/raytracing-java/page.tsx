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
  CodeBlock,
  FetchCode,
} from "../../components/blocks/PageBlock";
import { usePathname } from "next/navigation";

export default function Event() {
  const pathname = usePathname();
  const icons = [
    { icon: "devicon:java", name: "Java" },
    { icon: "devicon:gradle", name: "Gradle" },
  ];

  return (
    <>
      <title>Raytracing</title>
      <Banner textComponent="Raytracing" />
      <FullTextHeaders
        headers="Journey"
        textComponent={
          <>
            <strong>Starting point</strong>
            <div>
              Ray tracing is a fascinating topic to explore. Of course, I did
              not start to experience ray tracing from coding a ray tracer. The
              first time using the ray tracer is when making a glass sphere in
              Blender. The way that the light reflects makes it looks super
              realistic.
            </div>
            <strong>Follow the steps</strong>
            <div>
              By following the <em>Ray Tracing in One Weekend</em> tutorial, I
              implemented the ray tracing code. First, the gradle enviroment is
              set up, and then making sure the environment is working. Then it
              is time to start coding!
            </div>
          </>
        }
      />
      <FullTextHeaders
        headers="Coding"
        textComponent={
          <>
            <strong>Vector and Color</strong>
            <div>
              First thing to do for making a ray tracer is to create the really
              basic vector and color calculation code. Unlike C, you cannot
              overwrite the arithmetic operator in Java, and I do not want to
              use external libraries. Implementing the color and vector class
              did take a while, but I implemented most of the operation with
              some utilitiy functions.
            </div>
            <FetchCode url={`${pathname}/vector.java`} />
            <div>
              The vector class extendes coordinates class. I was going to extend
              color class from coordinate class, but it doesn&apos;t really make
              sense. So the entire class Color was written entirely from scratch
              with the basic vector calculation functions.
            </div>
          </>
        }
      />
      <FullTextHeaders headers="Tech Stack?" textComponent="" />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers="References"
        textComponent={
          <>
            <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
              Ray Tracing in One Weekend.
              raytracing.github.io/books/RayTracingInOneWeekend.html Accessed 09
              Nov. 2024.
            </div>
          </>
        }
      />
    </>
  );
}
