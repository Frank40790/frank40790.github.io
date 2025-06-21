"use client";

import {
  handleMouseEnter,
  handleMouseLeave,
  typingEnter,
  typingLeave,
} from "@/app/components/cursor/HoverCursor";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css"; // latex style
import "highlight.js/styles/atom-one-dark.css"; // code style
import "@/app/components/styles/CodeBlock.css"; // additional code style
import { fetchContent } from "@/app/components/utils";
import { useEffect, useState } from "react";

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
  const [cPress, setCPress] = useState<boolean>(false);
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === "c" || event.key === "C") && !keyPressed) {
        setCPress((prev) => !prev);
        setKeyPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "c" || event.key === "C") {
        setKeyPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keyPressed]);

  useEffect(() => {
    return () => {
      handleMouseLeave(".clipboardIcon", "blue", "large");
      typingLeave();
    };
  }, []);

  const codeLines = code.split("\n");
  const isCollapsible = codeLines.length > 10;
  const displayedCode = expanded ? code : codeLines.slice(0, 10).join("\n");

  return (
    <div
      className="pl-0 pr-0 md:pl-5 md:pr-5 py-2"
      about="12fc27143b8a43136895b1319059be713ecbe0217248b5ad4f1087942a798fdf"
    >
      <div className="relative p-4 border rounded-md border-gray-300">
        <div className="select-none pb-4">
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
        </div>

        <div
          className={`scrollbar-hide transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? "max-h-[1000px]" : "max-h-[320px]"
          }`}
          onMouseEnter={() => {
            typingLeave();
            if (cPress) {
              handleMouseEnter(".clipboardIcon", "blue", "large");
            } else {
              typingEnter();
            }
          }}
          onMouseLeave={() => {
            handleMouseLeave(".clipboardIcon", "blue", "large");
            if (!cPress) {
              typingLeave();
            }
          }}
          onMouseDown={() => {
            if (cPress) {
              handleMouseLeave(".clipboardIcon", "blue", "large");
              handleMouseEnter(".checkIcon", "green", "large");
              copyToClipboard();
              setTimeout(function () {
                handleMouseLeave(".checkIcon", "green", "large");
              }, 500);
            }
          }}
        >
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {displayedCode}
          </ReactMarkdown>

          {isCollapsible && !expanded && (
            <div className="absolute bottom-12 left-0 w-full h-12 pointer-events-none bg-gradient-to-b from-transparent to-white/80 dark:to-black/40 backdrop-blur-sm rounded-b-md" />
          )}

          {isCollapsible && (
            <div className="pt-4 text-center backdrop-blur-sm">
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-black dark:text-white hover:font-bold"
              >
                {expanded ? "Collapse" : "Expand"}
              </button>
            </div>
          )}
        </div>
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
