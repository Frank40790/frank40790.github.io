"use client";
import { usePathname } from "next/navigation";
import {
  RightPicLeftText,
  FullTextHeaders,
  IconListStatic,
  FullImage,
  MarkdownBlock,
  LeftRightImage,
  FetchCode,
} from "../../components/page_block";

export default function InstructionTuning() {
  const pathname = usePathname();
  return (
    <>
      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>Under construction 🚀</div>
          </>
        }
      />
    </>
  );
}
