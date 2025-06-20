"use client";

import { IconListStatic } from "@/app/components/blocks/IconBlocks";
import {
  Banner,
  FullImage,
  FullTextHeaders,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function Blog() {
  const pathname = usePathname();
  const icons = [
    { icon: "devicon:nextjs", name: "Next.js" },
    { icon: "devicon:react", name: "React.js" },
    { icon: "devicon:tailwindcss", name: "Tailwind" },
    { icon: "devicon:typescript", name: "TypeScript" },
    { icon: "simple-icons:framer", name: "Framer" },
  ];
  const t = useTranslation(translations);

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <FullImage
        imageSrc={`${pathname}/homepage.png`}
        altText={t("image_alt_home")}
      />
      <FullTextHeaders
        headers={t("heading_1")}
        textComponent={
          <>
            <div>{t("heading_1_paragraph_1")}</div>
            <div>{t("heading_1_paragraph_2")}</div>
            <br />
          </>
        }
      />
      <FullTextHeaders headers={t("heading_2")} textComponent="" />
      <IconListStatic icons={icons} />
    </>
  );
}
