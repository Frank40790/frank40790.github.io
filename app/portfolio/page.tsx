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
import Link from "next/link";

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

    { icon: "devicon:html5", name: "HTML" },
    { icon: "devicon:css3", name: "CSS" },
    { icon: "devicon:javascript", name: "Javascript" },
    { icon: "skill-icons:nodejs-dark", name: "Node.js" },
    { icon: "devicon:nextjs", name: "Next.js" },

    { icon: "devicon:pandas", name: "Pandas" },
    { icon: "devicon:numpy", name: "NumPy" },
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
  ];
  return (
    <>
      <title>Home</title>

      <Banner textComponent={"I'm Frank, A Enthusiastic Programmer!"} />

      <FullTextHeaders headers="About me" textComponent="" />
      <LeftPicRightText
        image_src="/portfolio/unimelb-front.png"
        alt_text="icon"
        textComponent={
          <div className="text-xl">
            I am currently a undergraduate student studying at University of
            Melbourne, planning to major in Computer Science. It is always
            enjoyable to learn and explore different areas of computing.
          </div>
        }
      />
      <RightPicLeftText
        image_src="/portfolio/unimelb-building.png"
        alt_text="icon"
        textComponent={
          <div className="text-xl">
            I also enjoy casually walking around the campus, exploring around.
            Oftentimes, finding some native Australian wildlife that fascinates
            me ~~
          </div>
        }
      />
      <FullTextHeaders
        headers="Skill Set"
        textComponent={
          <>
            <div className="text-xl">
              I enjoy trying out different technologies! In my free time, I
              explore around different fields of computing. My skill set spans
              across different field, including web design, AI / ML, graphics
              and much more!
            </div>
          </>
        }
      />
      <IconList icons={icons} reverse={false} />

      <FullTextHeaders
        headers="Future Vision"
        textComponent={
          <>
            <div className="text-xl">
              As artificial intelligence integrates to our life bit by bit, it
              is important to understand the inner workings of those new
              technologies. I would like to improve myself so that in the
              future, I can build a technology that benifits humanity.
            </div>
            <div className="text-xl">
              Another part of computer science that interest me is
              cybersecurity. Thousands of cyberthreats are circulating the
              internet. I am passionate about cybersecurity and want to learn
              more about it in the future, hopefully developing technology that
              can prevent cyberthreats effectively.
            </div>
          </>
        }
      />

      <FullTextHeaders
        headers="Contact Me"
        textComponent={
          <>
            <div className="flex space-x-4 justify-center mt-8">
              <Link
                href="https://www.linkedin.com/in/frank40790"
                aria-label="LinkedIn Profile"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-transform transform hover:scale-110"
                >
                  <Icon icon="brandico:linkedin-rect" width={80} height={80} />
                </motion.div>
              </Link>
              <Link
                href="https://github.com/Frank40790"
                aria-label="GitHub Profile"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-transform transform hover:scale-110"
                >
                  <Icon
                    icon="skill-icons:github-light"
                    width={80}
                    height={80}
                  />
                </motion.div>
              </Link>
            </div>
          </>
        }
      />

      <div className="p-10" />
    </>
  );
}
