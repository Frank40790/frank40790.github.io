import { TimelineProps } from "@/app/components/timeline/TimelineInterface";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;

export default function GetTimelines() {
  const t = useTranslation(translations);

  const timelines: TimelineProps[] = [
    {
      title: t("codebrew_title"),
      description: t("codebrew_desc"),
      date: "04 Apr 2024 ~ 07 Apr 2024",
      url: "cissa-codebrew-hackathon-2024",
      icon: "codebrew-icon.svg",
      type: "hidden",
      tags: [t("tag_hackathon")],
      searchtag: t("codebrew_searchtag"),
    },
    {
      title: t("foc1_title"),
      description: t("foc1_desc"),
      date: "16 Apr 2024 ~ 26 Apr 2024",
      url: "foc-project-1",
      icon: "unimelb",
      type: "hidden",
      tags: [t("tag_uniproject")],
      searchtag: t("foc1_searchtag"),
    },
    {
      title: t("foc2_title"),
      description: t("foc2_desc"),
      date: "1 May 2024 ~ 17 May 2024",
      url: "foc-project-2",
      icon: "unimelb",
      type: "hidden",
      tags: [t("tag_uniproject")],
      searchtag: t("foc2_searchtag"),
    },
    {
      title: t("vichack_title"),
      description: t("vichack_desc"),
      date: "09 Aug 2024 ~ 18 Aug 2024",
      url: "vichack-2024",
      icon: "vichack.png",
      type: "hidden",
      tags: [t("tag_hackathon")],
      searchtag: t("vichack_searchtag"),
    },
    {
      title: t("foa1_title"),
      description: t("foa1_desc"),
      date: "28 Aug 2024 ~ 13 Sep 2024",
      url: "foa-project-1",
      icon: "unimelb",
      type: "hidden",
      tags: [t("tag_uniproject"), "C"],
      searchtag: t("foa1_searchtag"),
    },
    {
      title: t("foa2_title"),
      description: t("foa2_desc"),
      date: "18 Sep 2024 ~ 11 Oct 2024",
      url: "foa-project-1",
      icon: "unimelb",
      type: "hidden",
      tags: [t("tag_uniproject"), "C"],
      searchtag: t("foa2_searchtag"),
    },
    {
      title: t("emd_title"),
      description: t("emd_desc"),
      date: "26 Jul 2024 ~ 18 Oct 2024",
      url: "emd-project",
      icon: "unimelb",
      type: "disabled",
      tags: [t("tag_uniproject")],
      searchtag: t("emd_searchtag"),
    },
    {
      title: t("idx_title"),
      description: t("idx_desc"),
      date: "23 Jul 2024 ~ 28 Oct 2024",
      url: "interaction-design-project",
      icon: "unimelb",
      type: "disabled",
      tags: [t("tag_uniproject"), "figma"],
      searchtag: t("idx_searchtag"),
    },
    {
      title: t("opengl_title"),
      description: t("opengl_desc"),
      date: "14 Oct 2024",
      url: "opengl-projection",
      icon: "shape_2.png",
      type: "enabled",
      tags: [t("tag_linear_algebra"), "opengl", "C"],
      searchtag: t("opengl_searchtag"),
    },
    {
      title: t("textgen_title"),
      description: t("textgen_desc"),
      date: "21 May 2024 ~",
      url: "/projects/text-generation",
      icon: "transformer.png",
      type: "star",
      tags: [t("tag_ai_ml"), t("tag_llm"), "python", "PyTorch"],
      searchtag: t("textgen_searchtag"),
    },
    {
      title: t("imggen_title"),
      description: t("imggen_desc"),
      date: "7 Jun 2024 ~",
      url: "image-generation-unet",
      icon: "diffusion.png",
      type: "hidden",
      tags: [t("tag_ai_ml"), t("tag_image_generation")],
      searchtag: t("imggen_searchtag"),
    },
  ];
  return timelines;
}
