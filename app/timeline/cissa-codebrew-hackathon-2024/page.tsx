import { URLLinkBlock } from "@/app/components/blocks/LinkBlocks";
import {
  Banner,
  FullTextHeaders,
} from "@/app/components/blocks/TextImageBlocks";

export default function Event() {
  return (
    <>
      <title>CISSA Codebrew Hackathon 2024</title>
      <Banner textComponent="CISSA Codebrew Hackathon 2024" />
      <FullTextHeaders
        headers="The starting point"
        textComponent={
          <>
            <div>
              This Hackathon held by CISSA, are seperated on 3 main category
            </div>
            <ul className="list-none pl-4">
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Emerging Technologies: Focuses on cutting edge technology such
                as AI, Blockchain, IoT
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                Humanitarian Solutions: Addressing global issues and build a
                project to solve the problem
              </li>
              <li className="relative before:content-['>'] before:absolute before:left-[-1em]">
                TechLife Convenience: Makes life better by building new
                technology
              </li>
            </ul>
            <div>
              Each focuses on very different aspect of building a project. Our
              group choose to go with emerging technology, since around this
              time period, artificial intelligence is blowing up in popularity.
            </div>
          </>
        }
      />

      <FullTextHeaders headers="Planning" textComponent={<></>} />
      <FullTextHeaders
        headers="Building the Backend - My Task"
        textComponent={<></>}
      />
      <FullTextHeaders headers="Building the Frontend" textComponent={<></>} />
      <FullTextHeaders headers="Visual / Video" textComponent={<></>} />
      <FullTextHeaders
        headers="Dockerize the application"
        textComponent={<></>}
      />
      <FullTextHeaders
        headers="Project Showcase: Ramble"
        textComponent={<></>}
      />
      <FullTextHeaders headers="Result" textComponent={<></>} />
      <URLLinkBlock
        header="Devpost"
        links={[
          {
            name: "Devpost",
            url: "https://devpost.com/software/ramble-zhqjpk",
          },
        ]}
      />
    </>
  );
}
