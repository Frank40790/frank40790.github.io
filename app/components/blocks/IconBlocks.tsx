"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
