"use client";
import { FetchCode, MarkdownBlock } from "@/app/components/blocks/CodeBlocks";
import { IconListStatic } from "@/app/components/blocks/IconBlocks";
import {
  FullImage,
  FullTextHeaders,
  LeftRightImage,
  RightPicLeftText,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/components/language/LocalisationHooks";
import lang from "./lang.json";

const translations = lang;
export default function Pretraining() {
  const pathname = usePathname();
  const t = useTranslation(translations);

  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:pytorch", name: "PyTorch" },
  ];

  return (
    <>
      <FullTextHeaders
        headers={t("pre_what_header")}
        textComponent={<div>{t("pre_what_text")}</div>}
      />

      <FullTextHeaders headers={t("pre_arch_header")} textComponent="" />
      <RightPicLeftText
        imageSrc={`${pathname}/transformer.png`}
        altText=""
        textComponent={
          <>
            <div>{t("pre_arch_text_1")}</div>
            <div>{t("pre_arch_citation")}</div>
          </>
        }
      />

      <FullTextHeaders headers={t("pre_learn_header")} textComponent={
        <>
          <div>{t("pre_learn_summary")}</div>
          <br />
          <strong>{t("pre_encoding_title")}</strong>
          <div>{t("pre_encoding_text")}</div>
          <br />
          <strong>{t("pre_embedding_title")}</strong>
          <div>{t("pre_embedding_text")}</div>
          <br />
          <MarkdownBlock content="$$\text{Odd:  } PE_{\text{(position, 2i)}} = \sin{\frac{\text{position}}{10000^{\frac{2i}{\text{model dimension}}}}} $$" />
          <MarkdownBlock content="$$\text{Even: } PE_{\text{(position, 2i)}} = \cos{\frac{\text{position}}{10000^{\frac{2i}{\text{model dimension}}}}} $$" />
          <br />
          <div>{t("pre_embedding_add_text")}</div>
          <FullImage imageSrc={`${pathname}/encoding.png`} altText="Encoder" />
          <strong>{t("pre_qkv_title")}</strong>
          <div>{t("pre_qkv_text")}</div>
          <FullImage imageSrc={`${pathname}/attention.png`} altText="QKV" />
          <strong>{t("pre_mha_title")}</strong>
          <div>{t("pre_mha_text")}</div>
          <MarkdownBlock content="$$ \text{softmax}(\frac{QK^T}{\sqrt{d_k}}) V $$" />
          <div>{t("pre_masking_text")}</div>
          <LeftRightImage
            leftImageSrc={`${pathname}/masked.png`}
            leftAltText={t("pre_masked_alt")}
            rightImageSrc={`${pathname}/qkv_operation.png`}
            rightAltText={t("pre_qkv_alt")}
          />
        </>
      } />

      <FullTextHeaders headers={t("pre_code_header")} textComponent={
        <>
          <strong>{t("pre_code_encoding")}</strong>
          <div>{t("pre_code_encoding_text")}</div>
          <FetchCode url={`${pathname}/encoding.py`} />
          <br />
          <strong>{t("pre_code_data")}</strong>
          <div>{t("pre_code_data_text")}</div>
          <FetchCode url={`${pathname}/data_processing.py`} />
          <br />
          <strong>{t("pre_code_attention")}</strong>
          <div>{t("pre_code_attention_text")}</div>
          <FetchCode url={`${pathname}/multihead_attention.py`} />
          <br />
          <strong>{t("pre_code_dataset")}</strong>
          <div>{t("pre_code_dataset_text")}</div>
          <FetchCode url={`${pathname}/load_dataset.py`} />
          <br />
          <strong>{t("pre_code_training")}</strong>
          <FetchCode url={`${pathname}/hyperparameter.py`} />
          <FetchCode url={`${pathname}/training.py`} />
        </>
      } />

      <FullTextHeaders headers={t("pre_train_header")} textComponent={
        <>
          <div>{t("pre_train_text_1")}</div>
          <div>{t("pre_train_text_2")}</div>
          <FetchCode url={`${pathname}/output.txt`} />
          <div>{t("pre_train_text_3")}</div>
        </>
      } />

      <FullTextHeaders headers={t("pre_tech_header")} textComponent={<></>} />
      <IconListStatic icons={icons} />

      <FullTextHeaders headers={t("pre_ref_header")} textComponent={
        <>
          <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
            Vaswani, Ashish. Figure 1: The Transformer - model architecture. 2 Aug. 2023. Attention Is All You Need, https://arxiv.org/pdf/1706.03762. Accessed 5 Dec 2024.
          </div>
          <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
            Karpathy, Andrej. “Let&apos;s Build GPT: From Scratch, in Code, Spelled Out.” YouTube, 17 Jan. 2023, www.youtube.com/watch?v=kCc8FmEb1nY.
          </div>
          <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
            Karpathy, Andrej. nanoGPT, 2023, https://github.com/karpathy/nanoGPT.git. Accessed 2024.
          </div>
        </>
      } />
    </>
  );
}
