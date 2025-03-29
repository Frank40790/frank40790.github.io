import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { linkedin, github } from "@/app/components/Detail";

export default function Contact({ iconColor }: { iconColor?: string }) {
  return (
    <>
      <div className="flex space-x-4 justify-center mt-8">
        <Link href={linkedin} aria-label="LinkedIn Profile">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="transition-transform transform hover:scale-110 flex items-center justify-center"
          >
            <Icon
              icon="brandico:linkedin-rect"
              width={80}
              height={80}
              className={`${iconColor} text-black dark:text-white`}
            />
          </motion.div>
        </Link>
        <Link href={github} aria-label="GitHub Profile">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="transition-transform transform hover:scale-110 flex items-center justify-center"
          >
            <Icon
              icon="mdi:github"
              width={80}
              height={80}
              className={`${iconColor} text-black dark:text-white`}
            />
          </motion.div>
        </Link>
      </div>
    </>
  );
}
