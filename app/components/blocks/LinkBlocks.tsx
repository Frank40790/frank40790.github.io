"use client";

import { motion } from "framer-motion";
import { FullTextHeaders } from "@/app/components/blocks/TextImageBlocks";
import { Icon } from "@iconify/react";
import {
  handleMouseEnter,
  handleMouseLeave,
} from "@/app/components/cursor/HoverCursor";
import { useEffect } from "react";

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
      handleMouseLeave(".linkIcon", "blue", "large");
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center m-4"
      onMouseEnter={() => handleMouseEnter(".linkIcon", "blue", "large")}
      onMouseLeave={() => handleMouseLeave(".linkIcon", "blue", "large")}
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
