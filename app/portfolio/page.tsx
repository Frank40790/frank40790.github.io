"use client";
import { motion } from "framer-motion";
import {
  LeftPicRightText,
  RightPicLeftText,
  FullTextHeaders,
  IconList,
  BannerTypewriter,
} from "./components/page_block";
import { useEffect, useState } from "react";
import Contact from "./components/contact";
import { name, skills } from "./components/detail";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  // set link show
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
  useEffect(() => {
    if (showLink) {
      document.body.classList.add("lock-scroll");
    } else {
      document.body.classList.remove("lock-scroll");
    }
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, [showLink]);
  return (
    <>
      <title>Home</title>
      {/* Popup link */}
      {showLink && (
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
            <div className="text-3xl font-bold text-center mb-5 text-black dark:text-white">
              Contact Me
            </div>
            <Contact />
          </motion.div>
        </motion.div>
      )}

      <BannerTypewriter
        textComponent={`I'm ${name}, A Enthusiastic Programmer!`}
      />

      <FullTextHeaders headers="About me" textComponent="" />
      <LeftPicRightText
        image_src={`${pathname}/unimelb-front.png`}
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
        image_src={`${pathname}/unimelb-building.png`}
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
