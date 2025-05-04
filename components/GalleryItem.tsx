"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function GalleryItem({ blok, index }: any) {
  const section = (
    <section className="flex w-1/2 flex-col gap-3">
      <h1 className="text-4xl">{blok.title}</h1>
      <p>{blok.description}</p>
    </section>
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className={`flex flex-row items-center gap-4 ${index === 1 ? "justify-end" : "justify-start"}`}
    >
      {index === 1 && section}
      <div className="flex-none">
        <Image
          width={blok.thumbnail_width ?? 0}
          height={blok.thumbnail_height ?? 0}
          src={blok.thumbnail.filename}
          alt={blok.thumbnail.alt}
          className="h-auto w-auto"
        />
      </div>
      {(index === 0 || index === 2) && section}
    </motion.div>
  );
}
