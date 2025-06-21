"use client";
import { FetchCode } from "@/app/components/blocks/CodeBlocks";
import {
  FullImage,
  FullTextHeaders,
  LeftRightImage,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;

export default function InstructionTuning() {
  const pathname = usePathname();
  const t = useTranslation(translations);

  return (
    <>
      <FullTextHeaders
        headers={t("section_what_header")}
        textComponent={
          <>
            <div>{t("section_what_text_1")}</div>
          </>
        }
      />
      <FullTextHeaders
        headers={t("section_training_header")}
        textComponent={
          <>
            <div>{t("section_training_text_1")}</div>
            <div>{t("section_training_text_2")}</div>
            <br />
            <FetchCode url={`${pathname}/instruction_template.txt`} />
          </>
        }
      />
      <FullTextHeaders
        headers={t("section_bytheway_header")}
        textComponent={
          <>
            <div>{t("section_bytheway_text")}</div>
            <LeftRightImage
              leftImageSrc={`${pathname}/curses_run_type.png`}
              leftAltText={t("curses_left_alt")}
              rightImageSrc={`${pathname}/curses_model_type.png`}
              rightAltText={t("curses_right_alt")}
            />
          </>
        }
      />
      <FullTextHeaders
        headers={t("section_api_header")}
        textComponent={
          <>
            <div>{t("section_api_text")}</div>
            <FullImage
              imageSrc={`${pathname}/webui.png`}
              altText={t("webui_alt")}
            />
          </>
        }
      />
    </>
  );
}
