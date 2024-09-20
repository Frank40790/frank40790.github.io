"use client";
import {
  RightPicLeftText,
  FullTextHeaders,
  Banner,
  IconListStatic,
  LeftRightImage,
} from "../../components/page_block";
import { usePathname } from "next/navigation";
import { basePath } from "@/app/base_path";

export default function Project() {
  const icons = [
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:poetry", name: "Poetry" },
    { icon: "simple-icons:openai", name: "Whisper" },
    { icon: "logos:meta-icon", name: "LLaMa" },
    { icon: "carbon:gui", name: "Tk / Custom Tk" },
  ];

  const pathname = usePathname();
  return (
    <>
      <title>External Brain</title>
      <Banner textComponent="External Brain" />
      <FullTextHeaders
        headers="What does this do?"
        textComponent={
          <>
            <div>
              The goal of this app is to simplify the process of noting down a
              long piece of audio recording, providing a useful summary of the
              audio. This app leverages the power of Text-to-speech technology
              to first record and transcribe the audio into a text file, then a
              language model is used to condense down the long text into a short
              bullet point summary of the main points.
            </div>
            <div className="font-bold">
              Here are some screenshoots of the app
            </div>
          </>
        }
      />
      <LeftRightImage
        leftImageSrc={`${basePath}${pathname}/model-selection.png`}
        leftAltText="Model Selection Window"
        rightImageSrc={`${basePath}${pathname}/record-transcribe-summarize.png`}
        rightAltText="GUI Window"
      />
      <FullTextHeaders headers="Journey" textComponent="" />
      <RightPicLeftText
        image_src={`${basePath}${pathname}/external-brain.png`}
        alt_text="External Brain Picture"
        textComponent={
          <>
            <div>
              External brain is a project that I started in 2023 as a fun
              project to practice practical python skill, also including some
              artificial intelligence tool that gain lots of popularity around
              this time.
            </div>
            <br />
            <div className="font-bold">CLI</div>
            <div>
              Throughout the development, I started by developing the command
              line interface for this project. This includes building the
              recording systems and saving the recorded files. Also building the
              backend of doing transcription of the audio data, and calling the
              model for summary of the recording.
            </div>
            <br />
            <div className="font-bold">GUI</div>
            <div>
              Later in the development, I added a Tkinter GUI (Custom Tkinter)
              for the app, so it makes the app more useable rather than just
              using command line arguments.
            </div>
          </>
        }
      />

      <FullTextHeaders
        headers="Tech Stack?"
        textComponent={
          <>
            <div>
              This project is based on python, using various libraries. The main
              libraries used are
            </div>
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
            <div>
              Additionaly in this project, poetry are used to manage the
              dependencies.
            </div>
          </>
        }
      />
      <IconListStatic icons={icons} />
      <FullTextHeaders
        headers="What I've learnt?"
        textComponent={
          <div>
            Doing this project, I consolidate my understanding of python,
            successfully building a application out of it. Durring this project,
            because this is the first time using GitHub, I&apos;ve also learnt
            how to do version management, pull request, branches and forks using
            the GitHub Desktop app. This project provides me some valueable
            experience of developing a software.
          </div>
        }
      />
    </>
  );
}
