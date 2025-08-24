import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="cursor-pointer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/Headshot4.png"
            alt="Fahad's Photo"
            width={298}
            height={298}
            priority
            quality={100}
            className="object-contain rounded-full opacity-70 hover:opacity-90 transition-opacity duration-500"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
