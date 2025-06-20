"use client";

import Pretraining from "./pretraining";
import InstructionTuning from "./instruction_tuning";
import { Banner } from "@/app/components/blocks/TextImageBlocks";
import { TimelineTab } from "@/app/components/blocks/TimelineBlock";

import { useTranslation } from "@/app/components/language/LocalisationHooks";
import en from "./lang/en.json";
import de from "./lang/de.json";
import zh from "./lang/zh.json";
const translations = { en, de, zh };

export default function Event() {
  const t = useTranslation(translations);

  const items = [
    {
      name: t("pretrain_title"),
      date: "Dec 16 2024",
      page: Pretraining,
    },
    {
      name: t("instruct_title"),
      date: "Dec 25 2024",
      page: InstructionTuning,
    },
  ];

  return (
    <>
      <title>{t("title")}</title>
      <Banner textComponent={t("title")} />
      <TimelineTab items={items} />
    </>
  );
}
