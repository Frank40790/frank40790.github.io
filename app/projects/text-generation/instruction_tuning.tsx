"use client";
import { FetchCode } from "@/app/components/blocks/CodeBlocks";
import {
  FullImage,
  FullTextHeaders,
  LeftRightImage,
} from "@/app/components/blocks/TextImageBlocks";
import { usePathname } from "next/navigation";

export default function InstructionTuning() {
  const pathname = usePathname();
  return (
    <>
      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>
              This is the stage after pretraining the language model, mainly to
              make multi turn conversation possible, rather than being an
              &quot;autocompletion&quot; bot.
            </div>
          </>
        }
      />
      <FullTextHeaders
        headers="Training"
        textComponent={
          <>
            <div>
              For instruction tuning, I only swapped out the dataset and embed
              the prompt template into the training tokens, which is relatively
              simple. However, this is not without any challenges. First of all,
              the prompt template is hard to manage, especially for the new
              line. Second, I have to manually adjust the padding for the
              instruction tuning dataset so the batch fits into the context
              window.
            </div>
            <div>
              I decided to use the instruction template below, simply because
              triple hashtag is 1 token in GPT-2 tokenizer, which makes
              terminating the generation easier.
            </div>
            <br />
            <FetchCode url={`${pathname}/instruction_template.txt`} />
          </>
        }
      />

      <FullTextHeaders
        headers="By the way..."
        textComponent={
          <>
            <div>
              When I am writing code to do instruction tuning, I want a easier
              way to run, train and test the model. Command line argument is
              getting pretty long at this point. So I decided to use curses for
              selecting the function I want to run, while also adding some tqdm
              progress bar to visualise the progress.
            </div>
            <LeftRightImage
              leftImageSrc={`${pathname}/curses_run_type.png`}
              leftAltText="Curses run type"
              rightImageSrc={`${pathname}/curses_model_type.png`}
              rightAltText="Curses model type"
            />
          </>
        }
      />

      <FullTextHeaders
        headers="OpenAI compatiable API"
        textComponent={
          <>
            <div>
              Just for fun, I coded up a API endpoint that process the request
              sent by OpenAI library so that I can connect a webui to my model.
              It can explain something to an extent, but my model still says
              1+1=1
            </div>
            <FullImage
              imageSrc={`${pathname}/webui.png`}
              altText="Running on WebUI"
            />
          </>
        }
      />
    </>
  );
}
