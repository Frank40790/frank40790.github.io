"use client";
import { usePathname } from "next/navigation";
import {
  FullTextHeaders,
  Banner,
  LeftRightImage,
  IconListStatic,
} from "../../components/page_block";

export default function Event() {
  const icons = [{ icon: "devicon:figma", name: "Figma" }];
  const pathname = usePathname();
  return (
    <>
      <title>Interaction Design Project</title>
      <Banner textComponent="Interaction Design Project" />
      <FullTextHeaders
        headers="Overview"
        textComponent={
          <div>
            This project aims at developing a digital prototype for the tabletop
            game companion app with the aim of helping players navigate
            complicated game rules. First, we did the user research, which was
            developing personas, user scenarios, and interview the users. A
            low-fidelity prototype is created accordingly, followed by the
            development of a high-fidelity prototype.
          </div>
        }
      />
      <FullTextHeaders
        headers="User Research"
        textComponent={
          <>
            <div>
              For the user research, we conducted semi-structured interviews
              with board game players to gather insights into their experiences
              with learning and playing games. The interviews were designed to
              explore participants&apos; preferences, challenges, and
              frustrations with rulebooks and gameplay. We used a mix of open
              and closed questions to understand their backgrounds, gaming
              habits, and specific pain points. The interviews were transcribed
              and analyzed through thematic analysis to identify common themes.
              This research informed the creation of personas and helped shape
              the design direction for the companion app.
            </div>
            <div>
              Next, we developed personas based on the interview insights. These
              personas represented different player types, such as casual gamers
              and more experienced board game enthusiasts, and helped us better
              understand the diverse needs and pain points of our intended
              users.
            </div>
            <div>
              Finally, we transcribed and coded the interview data to identify
              recurring themes and patterns. This process involved categorizing
              responses to pinpoint common issues related to rulebooks, gameplay
              challenges, and preferences for digital tools. The coded data was
              then analyzed through thematic analysis, which provided the
              foundation for refining the app&apos;s features and design
              direction.
            </div>
          </>
        }
      />
      <FullTextHeaders
        headers="Prototype"
        textComponent={
          <>
            <div>
              The design process began with low-fidelity prototypes, which were
              basic sketches and wireframes used to map out the app&apos;s
              layout and user flow. These early prototypes helped us visualize
              key functions, such as the community chat, rulebook visual
              enhancer, and tutorial features. They allowed us to explore
              different design concepts and identify potential user flow issues
              before investing time into more detailed designs. Once the
              low-fidelity prototypes were tested and refined, we transitioned
              to high-fidelity prototypes created in Figma. The high-fidelity
              version allowed us to present a more accurate representation of
              the final product, providing a better sense of how the app would
              look and function in real use. User feedback from the
              high-fidelity prototype helped further fine-tune the design and
              improve the overall user experience.
            </div>
          </>
        }
      />
      <LeftRightImage
        leftImageSrc={`${pathname}/community-tab.png`}
        leftAltText="Community tab"
        rightImageSrc={`${pathname}/community-tab-phone-view.png`}
        rightAltText="Community tab phone view"
      />
      <FullTextHeaders headers="What is used?" textComponent={<></>} />
      <IconListStatic icons={icons} />
    </>
  );
}
