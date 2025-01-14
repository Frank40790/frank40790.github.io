"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; // latex style
import "highlight.js/styles/atom-one-dark.css"; // code style
import "./styles/code_block.css"; // additional code style
import { fetchContent } from "./utils";
import { handleMouseEnter, handleMouseLeave } from "./cursor/hover_cursor";

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
          className="w-full md:w-3/5 p-4 text-lg"
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
    <div className="relative overflow-hidden mx-auto md:pt-10 md:pb-10">
      <div className="absolute inset-0 z-20 before:absolute before:left-0"></div>

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
            <div className="flex items-center justify-center">
              <div
                className="p-4 flex flex-col items-center"
                style={{
                  width: "calc(10vw + 100px)",
                  minWidth: "150px",
                }}
              >
                <Icon icon={item.icon} width="60px" height="60px" />
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
  useEffect(() => {
    return () => {
      handleMouseLeave(".linkIcon", "blue");
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center m-4"
      onMouseEnter={() => handleMouseEnter(".linkIcon", "blue")}
      onMouseLeave={() => handleMouseLeave(".linkIcon", "blue")}
    >
      <motion.a
        href={url}
        download
        className="text-center"
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
          <motion.div
            key="code-icon"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon icon="mingcute:code-fill" width="50px" height="50px" />
          </motion.div>
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
    <div className="flex justify-center items-center mx-auto my-4 px-4 md:px-10">
      <video
        className="rounded-lg shadow-lg w-full max-w-3xl h-auto"
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

interface URLLinkBlockProps {
  header: string;
  links: { name: string; url: string }[];
}

export function URLLinkBlock({ header, links }: URLLinkBlockProps) {
  return (
    <>
      <FullTextHeaders headers={header} textComponent={""} />
      <div className="flex flex-wrap justify-center items-center">
        {links.map((links, index) => (
          <URLLink key={index} name={links.name} url={links.url} />
        ))}
      </div>
    </>
  );
}

interface URLLinkProps {
  name: string;
  url: string;
}

function URLLink({ name, url }: URLLinkProps) {
  return (
    <div className="flex flex-col items-center m-4">
      <motion.a
        href={url}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Icon icon="material-symbols:link" width="8vw" height="8vw" />
      </motion.a>
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}

interface MarkdownBlockProps {
  content: string;
}

export function MarkdownBlock({ content }: MarkdownBlockProps) {
  return (
    <div className="pl-16 pr-16">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

interface CodeBlockProps {
  filename: string;
  code: string;
}

export function CodeBlock({ filename, code }: CodeBlockProps) {
  const [codeType, setCodeType] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const codeBlockMatch = code.match(/```(\w+)/);
    setCodeType(codeBlockMatch ? codeBlockMatch[1] : "plaintext");
  }, [code]);

  const cleanCode = code
    .replace(/```.*?\n/g, "")
    .replace(/\n```/g, "")
    .trim();

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(cleanCode).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = cleanCode;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {}
      document.body.removeChild(textArea);
    }
  };

  useEffect(() => {
    return () => {
      handleMouseLeave(".clipboardIcon", "blue");
    };
  }, []);

  return (
    <div
      className="pl-0 pr-0 md:pl-5 md:pr-5"
      onMouseEnter={() => handleMouseEnter(".clipboardIcon", "blue")}
      onMouseLeave={() => handleMouseLeave(".clipboardIcon", "blue")}
      onMouseDown={() => {
        handleMouseLeave(".clipboardIcon", "blue");
        handleMouseEnter(".checkIcon", "green");
        copyToClipboard();
        setTimeout(function () {
          handleMouseLeave(".checkIcon", "green");
        }, 500);
      }}
    >
      <div className="relative p-4 border rounded-md border-gray-300">
        <span className="absolute top-2 left-5 text-sm font-bold text-gray-600">
          {codeType}
        </span>
        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
          {filename}
        </span>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 px-3 py-1 text-sm rounded focus:outline-none text-black dark:text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <br />
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{code}</ReactMarkdown>
      </div>
    </div>
  );
}

interface FetchCodeProps {
  url: string;
}

export function FetchCode({ url }: FetchCodeProps) {
  const [content, setContent] = useState<string>("");

  const filename = url.split("/").pop() || "";
  const extension = filename.split(".").pop() || "";
  const extensionMapping = {
    py: "python",
    java: "java",
    c: "c",
    cpp: "cpp",
    html: "html",
    css: "css",
    js: "javascript",
    txt: "text",
  };
  const codeType =
    extensionMapping[extension as keyof typeof extensionMapping] || "code";

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent(url);
      setContent(data);
    };
    fetchData();
  }, [url]);

  return (
    <CodeBlock
      filename={filename}
      code={`\`\`\`${codeType}\n${content}\n\`\`\``}
    />
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
    <div className="">
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

interface ImageSplitProps {
  beforeImage: string;
  afterImage: string;
  lineColor: string;
}

export function ImageSplit({
  beforeImage,
  afterImage,
  lineColor,
}: ImageSplitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragPosition, setDragPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const getXPosition = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      return e.touches[0].clientX;
    } else {
      return e.clientX;
    }
  };

  const handleDrag = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const xPos = getXPosition(e);
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (!containerRect) return;

      let newPos = xPos - containerRect.left;
      newPos = Math.max(0, Math.min(newPos, containerRect.width));
      setDragPosition((newPos / containerRect.width) * 100);
    },
    [isDragging]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (isDragging) {
      // Mouse events
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", handleDragEnd);

      // Touch events
      window.addEventListener("touchmove", handleDrag, { passive: false });
      window.addEventListener("touchend", handleDragEnd);
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDrag);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      handleMouseLeave(".arrowIcon", "blue");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    return () => {
      handleMouseLeave(".arrowIcon", "blue");
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center max-w-[90%] mx-auto"
      onMouseEnter={() => handleMouseEnter(".arrowIcon", "blue")}
      onMouseLeave={() => handleMouseLeave(".arrowIcon", "blue")}
    >
      <div className="w-full max-w-4xl h-[500px]">
        <div
          ref={containerRef}
          className="relative w-full h-full overflow-hidden rounded-lg"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          style={{ touchAction: "none" }}
        >
          {/* Before Image */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${beforeImage})`,
                clipPath: `inset(0 ${100 - dragPosition}% 0 0)`,
                transition: isDragging ? "none" : "clip-path 0.3s ease",
              }}
            />
          </div>

          {/* After Image */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${afterImage})`,
                clipPath: `inset(0 0 0 ${dragPosition}%)`,
                transition: isDragging ? "none" : "clip-path 0.3s ease",
              }}
            />
          </div>

          {/* Draggable Bar */}
          <div
            className={`absolute top-0 bottom-0 ${lineColor} z-10`}
            style={{
              left: `${dragPosition}%`,
              width: "5px",
              marginLeft: "-2.5px",
              cursor: "ew-resize",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="w-full h-full bg-white opacity-50"
              style={{ width: "2px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
