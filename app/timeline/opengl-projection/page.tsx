"use client";

import { IconListStatic } from "@/app/components/blocks/IconBlocks";
import { CodeLinkBlock } from "@/app/components/blocks/LinkBlocks";
import {
  Banner,
  FullText,
  FullTextHeaders,
  LeftRightImage,
} from "@/app/components/blocks/TextImageBlocks";
import { VideoLoopBlock } from "@/app/components/blocks/VideoBlocks";
import { github } from "@/app/components/Detail";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/components/language/LocalisationHooks";

import lang from "./lang.json";

const translations = lang;

export default function Event() {
  const t = useTranslation(translations);
  const icons = [
    { icon: "devicon:c", name: "C" },
    { icon: "devicon:opengl", name: "OpenGL" },
  ];
  const pathname = usePathname();

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />

      <FullTextHeaders
        headers={t("what_does_this_do")}
        textComponent={<div>{t("intro_description")}</div>}
      />

      <VideoLoopBlock videoSrc={`${pathname}/animation.mp4`} />

      <FullTextHeaders headers={t("journey")} textComponent="" />
      <FullText
        textComponent={
          <>
            <div>{t("journey_intro")}</div>
            <strong>{t("version1_title")}</strong>
            <div>{t("version1_text1")}</div>
            <div>{t("version1_text2")}</div>
            <div>{t("version1_text3")}</div>
            <strong>{t("version2_title")}</strong>
            <div>{t("version2_text1")}</div>
          </>
        }
      />

      <LeftRightImage
        leftImageSrc={`${pathname}/draw_v1.png`}
        leftAltText={t("version1_image_alt")}
        rightImageSrc={`${pathname}/draw_v2.png`}
        rightAltText={t("version2_image_alt")}
      />

      <FullTextHeaders headers={t("language_used")} textComponent={<></>} />
      <IconListStatic icons={icons} />

      <FullTextHeaders headers={t("what_ive_learned")} textComponent={
        <>
          <div>{t("learn_intro")}</div>
          <ul className="list-none pl-4">
            <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
              {t("learn_point1")}
            </li>
            <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
              {t("learn_point2")}
            </li>
          </ul>
        </>
      } />

      <CodeLinkBlock
        header={t("code")}
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
