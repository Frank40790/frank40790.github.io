"use client";
import {
  LeftPicRightText,
  RightPicLeftText,
  FullText,
  FullTextHeaders,
  Banner,
  IconList,
} from "../../components/page_block";
import { usePathname } from "next/navigation";

export default function Event() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:poetry", name: "Poetry" },
    { icon: "simple-icons:openai", name: "Whisper" },
    { icon: "logos:meta-icon", name: "LLaMa" },
    { icon: "carbon:gui", name: "Tk / Custom Tk" },
  ];
  const pathname = usePathname();
  return (
    <>
      <Banner textComponent="Dev Diversify" />
    </>
  );
}
