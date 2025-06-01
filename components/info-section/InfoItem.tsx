"use client";

import { motion } from "motion/react";

export default function InfoSection({ blok }: any) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className="flex w-1/2 flex-col"
    >
      <h1 className="flex justify-center text-2xl">{blok.title}</h1>
      <p>{blok.description}</p>
    </motion.section>
  );
}
