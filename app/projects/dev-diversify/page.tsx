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

import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function Event() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:c", name: "C" },
    { icon: "devicon:html5", name: "HTML" },
  ];
  const pathname = usePathname();
  const t = useTranslation(translations);

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <FullTextHeaders
        headers={t("header_1")}
        textComponent={<div>{t("paragraph_1")}</div>}
      />
      <FullImage
        imageSrc={`${pathname}/dev-diversify-github.png`}
        altText={t("image_alt")}
      />
      <FullTextHeaders
        headers={t("header_2")}
        textComponent={<div>{t("paragraph_2")}</div>}
      />
      <IconListStatic icons={icons} />
      <CodeLinkBlock
        header={t("code_header")}
        links={[
          {
            name: t("link_name"),
            url: `${github}/DevDiversify/`,
          },
        ]}
      />
    </>
  );
}
