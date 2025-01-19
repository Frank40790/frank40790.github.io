"use client";

import { Banner, TimelineTab } from "@/app/components/page_block";
import Pretraining from "./pretraining";
import InstructionTuning from "./instruction_tuning";

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
