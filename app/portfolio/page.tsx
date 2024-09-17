"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  LeftPicRightText,
  RightPicLeftText,
  FullText,
  FullTextHeaders,
  Banner,
  IconList,
} from "./components/page_block";
import { Icon } from "@iconify/react";

export default function Home() {
  const pathname = usePathname();
  const icons = [
    { icon: "devicon:blender", name: "Blender" },

    { icon: "devicon:c", name: "C" },
    { icon: "vscode-icons:file-type-cpp3", name: "C++" },
    { icon: "devicon:java", name: "Java" },
    { icon: "devicon:python", name: "Python" },
    { icon: "devicon:php", name: "PHP" },
    { icon: "devicon:bash", name: "Bash" },

    { icon: "devicon:pandas", name: "Pandas" },
    { icon: "devicon:selenium", name: "Selenium" },
    { icon: "skill-icons:flask-dark", name: "Flask" },
    { icon: "devicon-plain:django", name: "Django" },
    { icon: "devicon:tensorflow", name: "TensorFlow" },
    { icon: "devicon:pytorch", name: "PyTorch" },

    { icon: "devicon:linux", name: "Linux" },
    { icon: "devicon:nginx", name: "Nginx" },
    { icon: "devicon:mysql", name: "MySQL" },
    { icon: "devicon:sqlite", name: "SQLite" },

    { icon: "skill-icons:docker", name: "Docker" },
    { icon: "simple-icons:proxmox", name: "Proxmox" },
    { icon: "simple-icons:virtualbox", name: "VirtualBox" },

    { icon: "devicon:matlab", name: "Matlab" },
    { icon: "skill-icons:autocad-dark", name: "AutoCAD" },
    { icon: "skill-icons:arduino", name: "Arduino" },

    { icon: "devicon:html5", name: "HTML" },
    { icon: "devicon:css3", name: "CSS" },
    { icon: "devicon:javascript", name: "Javascript" },
    { icon: "devicon:nextjs", name: "Next.js" },
  ];
  return (
    <>
      <title>Home</title>

      <Banner textComponent={"I'm Frank, A Enthusiastic Programmer!"} />

      <FullTextHeaders
        headers="A little about me"
        textComponent={<p>This is a test paragraph</p>}
      />
      <LeftPicRightText
        image_src="/portfolio/timeline/event_2/unimelb-icon.jpg"
        alt_text="icon"
        textComponent={<p>This is a test paragraph</p>}
      />
      <RightPicLeftText
        image_src="/portfolio/timeline/event_2/unimelb-icon.jpg"
        alt_text="icon"
        textComponent={<p>This is a test paragraph</p>}
      />
      <FullTextHeaders
        headers="Skill Set"
        textComponent={
          <div>
            I enjoy trying out different technologies! In my free time, I
            explore around different fields of computing.
          </div>
        }
      />
      <IconList icons={icons} />

      <FullTextHeaders
        headers="Future Vision"
        textComponent={<p>This is a test paragraph</p>}
      />
    </>
  );
}
