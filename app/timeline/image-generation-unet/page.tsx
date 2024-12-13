"use client";
import { usePathname } from "next/navigation";
import {
  RightPicLeftText,
  FullTextHeaders,
  Banner,
  IconListStatic,
} from "../../components/page_block";

export default function Event() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:pytorch", name: "PyTorch" },
  ];
  const pathname = usePathname();
  return (
    <>
      <title>Image Generation UNet</title>
      <Banner textComponent="Image Generation UNet" />

      <FullTextHeaders
        headers="Software"
        textComponent={
          <>
            <div>Generative AI has , DDPM, VAE, VQVAE</div>
          </>
        }
      />

      <FullTextHeaders headers="What is used?" textComponent={<></>} />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers="References"
        textComponent={
          <>
            <div className="relative before:content-['>'] before:absolute before:left-[-1em]">
              Ho, J., Jain, A., & Abbeel, P. (2020). Denoising diffusion
              probabilistic models. Advances in neural information processing
              systems, 33, 6840-6851.
            </div>
          </>
        }
      />
    </>
  );
}
