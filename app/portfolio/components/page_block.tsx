"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface LeftPicRightTextProps {
  image_src: string;
  alt_text: string;
  textComponent: React.ReactNode;
}

export function LeftPicRightText({
  image_src,
  alt_text,
  textComponent,
}: LeftPicRightTextProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center pl-10 pr-10">
      <motion.div
        className="flex-shrink-0 w-full md:w-2/5 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image_src}
          alt={alt_text}
          width={700}
          height={400}
          className="object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-3/5 p-4 text-lg"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        {textComponent}
      </motion.div>
    </div>
  );
}
interface RightPicLeftTextProps {
  image_src: string;
  alt_text: string;
  textComponent: React.ReactNode;
}

export function RightPicLeftText({
  image_src,
  alt_text,
  textComponent,
}: RightPicLeftTextProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center pl-10 pr-10">
      <motion.div
        className="w-full md:w-3/5 p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        {textComponent}
      </motion.div>
      <motion.div
        className="flex-shrink-0 w-full md:w-2/5 p-4 md:p-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image_src}
          alt={alt_text}
          width={700}
          height={400}
          className="object-cover rounded-lg"
        />
      </motion.div>
    </div>
  );
}

interface FullTextHeadersProps {
  headers: React.ReactNode;
  textComponent: React.ReactNode;
}

export function FullTextHeaders({
  headers,
  textComponent,
}: FullTextHeadersProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center pl-10 pr-10">
      <motion.div
        className="w-full p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold mb-4">{headers}</h1>
        {textComponent}
      </motion.div>
    </div>
  );
}

interface FullTextProps {
  textComponent: React.ReactNode;
}

export function FullText({ textComponent }: FullTextProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center pl-10 pr-10">
      <motion.div
        className="w-full p-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        {textComponent}
      </motion.div>
    </div>
  );
}

interface LeftRightImageProps {
  leftImageSrc: string;
  leftAltText: string;
  rightImageSrc: string;
  rightAltText: string;
}
export function LeftRightImage({
  leftImageSrc,
  leftAltText,
  rightImageSrc,
  rightAltText,
}: LeftRightImageProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center pl-10 pr-10">
      <motion.div
        className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={leftImageSrc}
          alt={leftAltText}
          width={700}
          height={400}
          className="object-cover rounded-lg max-w-full"
        />
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={rightImageSrc}
          alt={rightAltText}
          width={700}
          height={400}
          className="object-cover rounded-lg max-w-full"
        />
      </motion.div>
    </div>
  );
}

interface FullImageProps {
  imageSrc: string;
  altText: string;
}
export function FullImage({ imageSrc, altText }: FullImageProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-[90%] mx-auto">
      <motion.div
        className="flex-shrink-0 w-full p-4 md:p-10 flex justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={700}
          height={400}
          className="object-cover rounded-lg max-w-full"
        />
      </motion.div>
    </div>
  );
}

interface BannerProps {
  textComponent: string;
}

export function Banner({ textComponent }: BannerProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.h1
      className="text-center text-5xl font-bold p-4 pt-60 pb-60 pl-10 pr-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.3 }}
    >
      {textComponent}
    </motion.h1>
  );
}

interface BannerTypewriterProps {
  textComponent: string;
}

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.0001 } },
};

export function BannerTypewriter({ textComponent }: BannerTypewriterProps) {
  return (
    <motion.h1
      className="text-center text-5xl font-bold p-4 pt-60 pb-60 pl-10 pr-10"
      initial="hidden"
      animate="visible"
      variants={sentenceVariants}
    >
      {textComponent.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export interface IconFlowItem {
  icon: string;
  name: string;
}

interface IconFlowProps {
  icons: IconFlowItem[];
  reverse: boolean;
}

export function IconList({ icons, reverse }: IconFlowProps) {
  const duplicated = [...icons, ...icons];
  const x_dir = reverse === false ? ["0%", "-100%"] : ["-100%", "0%"];
  return (
    <div className="relative h-full overflow-hidden py-12 mx-auto">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 "></div>

      <motion.div
        className="flex"
        animate={{
          x: x_dir,
          transition: {
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          },
        }}
        style={{ width: "500%" }}
      >
        {duplicated.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${100 / icons.length}%`,
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="p-4 flex flex-col items-center"
                style={{
                  width: "calc(10vw + 100px)",
                  height: "calc(10vh + 100px)",
                  minWidth: "150px",
                  minHeight: "150px",
                }}
              >
                <Icon icon={item.icon} width="10vw" height="10vw" />
                <span className="mt-2 text-lg font-semibold hidden sm:block">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

interface IconStaticProps {
  icons: IconFlowItem[];
}

export function IconListStatic({ icons }: IconStaticProps) {
  return (
    <div className="relative h-full overflow-hidden py-12 mx-auto">
      <div className="absolute inset-0 z-20 before:absolute before:left-0"></div>

      <div className="flex justify-center items-center space-x-4 flex-wrap">
        {icons.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="flex items-center justify-center h-full">
              <div className="p-4 flex flex-col items-center">
                <Icon icon={item.icon} className="w-24 h-24 sm:w-32 sm:h-32" />
                <span className="mt-2 text-lg font-semibold text-center max-w-[10rem]">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CodeLinkBlockProps {
  header: string;
  links: { name: string; url: string }[];
}

export function CodeLinkBlock({ header, links }: CodeLinkBlockProps) {
  return (
    <>
      <FullTextHeaders headers={header} textComponent={""} />
      <div className="flex flex-wrap justify-center items-center">
        {links.map((links, index) => (
          <CodeLink key={index} name={links.name} url={links.url} />
        ))}
      </div>
    </>
  );
}

interface CodeLinkProps {
  name: string;
  url: string;
}

function CodeLink({ name, url }: CodeLinkProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="flex flex-col items-center m-4">
      <motion.a
        href={url}
        download
        className="text-center"
        onClick={handleClick}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {/* Code icon */}
          {!isClicked && (
            <motion.div
              key="code-icon"
              initial={{ opacity: 1 }}
              animate={{ opacity: isClicked ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon icon="mingcute:code-fill" width="8vw" height="8vw" />
            </motion.div>
          )}

          {/* Download icon */}
          {isClicked && (
            <motion.div
              key="download-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: isClicked ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon icon="line-md:download-loop" width="8vw" height="8vw" />
            </motion.div>
          )}
        </motion.div>
      </motion.a>
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}

interface VideoLoopBlockProps {
  videoSrc: string;
  poster?: string;
}
export function VideoLoopBlock({ videoSrc, poster }: VideoLoopBlockProps) {
  return (
    <div className="flex justify-center items-center my-4">
      <video
        className="rounded-lg shadow-lg w-1/2 h-auto"
        src={videoSrc}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
