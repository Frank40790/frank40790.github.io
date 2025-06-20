"use client";

import {
  Banner,
  FullImage,
  FullTextHeaders,
  LeftRightImage,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";

import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function Blog() {
  const pathname = usePathname();
  const t = useTranslation(translations);

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <FullImage imageSrc={`${pathname}/homepage.png`} altText={t("alt_homepage")} />
      <FullTextHeaders
        headers={t("heading_1")}
        textComponent={
          <>
            <div>{t("paragraph_1")}</div>
            <LeftRightImage
              leftImageSrc={`${pathname}/tags.png`}
              leftAltText={t("alt_tags")}
              rightImageSrc={`${pathname}/search_tags.png`}
              rightAltText={t("alt_search_tags")}
            />
            <div>{t("paragraph_2")}</div>
            <FullImage imageSrc={`${pathname}/search.png`} altText={t("alt_search")} />
            <div>{t("paragraph_3")}</div>
            <FullImage imageSrc={`${pathname}/not_found.png`} altText={t("alt_404")} />
            <div>{t("paragraph_4")}</div>
          </>
        }
      />
    </>
  );
}
