import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="cursor-pointer relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/Headshot5.png"
            alt="Fahad's Photo"
            width={298}
            height={298}
            priority
            quality={100}
            className="object-contain rounded-full opacity-60 hover:opacity-80 transition-opacity duration-500"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[307px] h-[307px] text-white-100 dark:text-purple"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              opacity: 0,
              strokeDasharray: "24 10 0 0",
            }}
            whileInView={{
              opacity: 1,
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              strokeDasharray: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              },
              rotate: { duration: 20, repeat: Infinity, repeatType: "reverse" },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
