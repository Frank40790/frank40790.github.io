"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBanner } from "react-scroll-parallax";

interface LeftPicRightTextProps {
  imageSrc: string;
  altText: string;
  textComponent: React.ReactNode;
}

export function LeftPicRightText({
  imageSrc,
  altText,
  textComponent,
}: LeftPicRightTextProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex justify-center px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl">
        <motion.div
          className="flex-shrink-0 w-full md:w-2/5 p-4 flex justify-center items-center"
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
            className="object-cover rounded-lg"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-3/5 p-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.3 }}
        >
          {textComponent}
        </motion.div>
      </div>
    </div>
  );
}

interface RightPicLeftTextProps {
  imageSrc: string;
  altText: string;
  textComponent: React.ReactNode;
}

export function RightPicLeftText({
  imageSrc,
  altText,
  textComponent,
}: RightPicLeftTextProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex justify-center px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl">
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
          className="flex-shrink-0 w-full md:w-2/5 p-4 md:p-10 flex justify-center items-center"
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
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
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
    <div className="flex justify-center px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start w-full max-w-screen-xl">
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
    <div className="flex justify-center px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl">
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
    <div className="flex justify-center items-center mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl">
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-10 flex justify-center items-center"
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
          className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-10 flex justify-center items-center"
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
  fontSize: string;
  fontColor: string;
}

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.0001 } },
};

export function BannerTypewriter({
  textComponent,
  fontSize,
  fontColor,
}: BannerTypewriterProps) {
  if (fontColor === "auto") {
    fontColor = "text-black dark:text-white";
  }
  return (
    <motion.h1
      className={`text-center ${fontSize} ${fontColor} p-4 pt-60 pb-60 pl-10 pr-10`}
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

interface ParallaxBlockProps {
  textComponent: React.ReactNode;
  foreground: string;
  background: string;
}

export function ParallaxBlock({
  textComponent,
  foreground,
  background,
}: ParallaxBlockProps) {
  return (
    <div about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf">
      <ParallaxBanner
        layers={[
          {
            image: background,
            speed: -30,
          },
          {
            speed: -30,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                {textComponent}
              </div>
            ),
          },
          {
            image: foreground,
            speed: -10,
          },
        ]}
        className="w-full aspect-[16/9] min-h-[600px]"
      />
    </div>
  );
}
