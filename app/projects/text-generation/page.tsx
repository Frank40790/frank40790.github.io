"use client";
import Pretraining from "./pretraining";
import InstructionTuning from "./instruction_tuning";
import { Banner } from "@/app/components/blocks/TextImageBlocks";
import { TimelineTab } from "@/app/components/blocks/TimelineBlock";

export default function Event() {
  const items = [
    {
      name: "Pretrain",
      date: "Dec 16 2024",
      page: Pretraining,
    },
    {
      name: "Instruct",
      date: "Dec 25 2024",
      page: InstructionTuning,
    },
  ];
  return (
    <>
      <title>Text Generation</title>
      <Banner textComponent="Text Generation" />
      <TimelineTab items={items} />
    </>
  );
}
