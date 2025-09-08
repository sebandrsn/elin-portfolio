"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ImageTextBlock as ImageTextBlockType } from "@/.storyblok/types/337287/storyblok-components";
import { getImageDimensions } from "@/util/getImageDimensions";

export default function ImageTextBlock({
  blok,
  index,
}: {
  readonly blok: ImageTextBlockType;
  readonly index: number;
}) {
  if (!blok.image.filename) {
    return null;
  }

  const dimensions = getImageDimensions(blok.image.filename);
  if (!dimensions) {
    return null;
  }
  const { width, height } = dimensions;

  const desktopSection = (
    <div className="hidden lg:flex lg:w-1/2 lg:items-center">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 },
        }}
        className="divide mx-64 flex flex-col items-center gap-3 divide-y-2 divide-solid divide-slate-500"
      >
        <h1 className="text-4xl">{blok.title}</h1>
        <p className="pt-3">{blok.description}</p>
      </motion.section>
    </div>
  );

  return (
    <div className="flex flex-col bg-slate-200 lg:h-[60vh] lg:flex-row lg:overflow-hidden">
      {index === 1 && desktopSection}
      <div className="h-full w-full flex-none lg:w-1/2">
        <Image
          src={blok.image.filename}
          alt={blok.image.alt ?? "Image text block"}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          sizes="(max-width: 1023px) 100vw, 1050px"
        />
      </div>
      {(index === 0 || index === 2) && desktopSection}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 },
        }}
        className="m-7 flex-col gap-3 lg:hidden"
      >
        <h1 className="text-4xl">{blok.title}</h1>
        <p>{blok.description}</p>
      </motion.section>
    </div>
  );
}
