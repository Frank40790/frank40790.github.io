"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

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
                <Icon icon={item.icon} width="10vw" height="10vw" />
                <span className="mt-2 text-lg font-semibold text-center max-w-[10vw] hidden sm:block">
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
