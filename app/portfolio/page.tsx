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
import Link from "next/link";
import { useEffect, useState } from "react";
import Contact from "./components/contact";
import { name, skills } from "./components/detail";

export default function Home() {
  const pathname = usePathname();

  // set to make the link page show
  const [showLink, setShowLink] = useState(false);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("p") === "link") {
      setShowLink(true);
    }
  }, []);
  // close link page
  const handleClosePopup = () => {
    setShowLink(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("p");
    window.history.pushState({}, "", url.toString());
  };
  // back button for link page
  const back = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(77, 85, 93, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(77, 85, 93, 1)",
    },
  };

  return (
    <>
      <title>Home</title>

      {showLink && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: showLink ? 1 : 0, y: showLink ? 0 : -50 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
              showLink ? "block" : "hidden"
            }`}
            onClick={handleClosePopup}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: showLink ? 1 : 0.8 }}
              exit={{ scale: 0.8 }}
              className="p-8 rounded-lg shadow-lg w-96 h-96 flex flex-col items-center justify-center bg-white dark:bg-slate-400"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-bold text-center mb-4 text-black dark:text-white">
                Contact Me
              </h2>
              <Contact />

              <Link href="/portfolio" onClick={handleClosePopup}>
                <div className="svg-container mt-4">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="svg-item"
                  >
                    <motion.path
                      d="m6 22l1.414-1.414L3.828 17H12v-2H3.828l3.586-3.586L6 10l-6 6z"
                      variants={back}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                    <motion.path
                      d="M16 10a5.98 5.98 0 0 0-4.243 1.757L16 16l-4.243 4.243A6 6 0 1 0 16 10"
                      variants={back}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                    <motion.path
                      d="M16 2a13.96 13.96 0 0 0-9.895 4.105l1.414 1.414a12 12 0 1 1 0 16.962l-1.414 1.414A13.997 13.997 0 1 0 16 2"
                      variants={back}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </motion.svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}

      <Banner textComponent={`I'm ${name}, A Enthusiastic Programmer!`} />

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
            Random, but I also enjoy casually walking around the campus,
            exploring around. Oftentimes, finding some native Australian
            wildlife that fascinates me ~~
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
      <IconList icons={skills} reverse={false} />

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

      <FullTextHeaders headers="Contact Me" textComponent={<Contact />} />

      <div className="p-10" />
    </>
  );
}
