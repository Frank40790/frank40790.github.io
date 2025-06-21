"use client";

import { IconListStatic } from "@/app/components/blocks/IconBlocks";
import {
  Banner,
  FullTextHeaders,
  LeftRightImage,
  RightPicLeftText,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;

export default function Project() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:poetry", name: "Poetry" },
    { icon: "simple-icons:openai", name: "Whisper" },
    { icon: "logos:meta-icon", name: "LLaMa" },
    { icon: "carbon:gui", name: "Tk / Custom Tk" },
  ];

  const pathname = usePathname();
  const t = useTranslation(translations);

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <FullTextHeaders
        headers={t("what_does_this_do_title")}
        textComponent={
          <>
            <div>{t("what_does_this_do_p1")}</div>
            <div className="font-bold">{t("what_does_this_do_p2")}</div>
          </>
        }
      />
      <LeftRightImage
        leftImageSrc={`${pathname}/model-selection.png`}
        leftAltText={t("model_selection_alt")}
        rightImageSrc={`${pathname}/record-transcribe-summarize.png`}
        rightAltText={t("gui_window_alt")}
      />
      <FullTextHeaders headers={t("journey")} textComponent="" />
      <RightPicLeftText
        imageSrc={`${pathname}/external-brain.png`}
        altText={t("external_brain_image_alt")}
        textComponent={
          <>
            <div>{t("journey_p1")}</div>
            <br />
            <div className="font-bold">{t("cli_title")}</div>
            <div>{t("cli_text")}</div>
            <br />
            <div className="font-bold">{t("gui_title")}</div>
            <div>{t("gui_text")}</div>
          </>
        }
      />
      <FullTextHeaders
        headers={t("tech_stack_title")}
        textComponent={
          <>
            <div>{t("tech_stack_p1")}</div>
            <ul className="list-none pl-4">
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                lama-cpp-python
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                OpenAI Whisper
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Flask
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Tkinter / Custom Tkinter
              </li>
            </ul>
            <div>{t("tech_stack_p2")}</div>
          </>
        }
      />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers={t("learning_title")}
        textComponent={<div>{t("learning_text")}</div>}
      />
    </>
  );
}
