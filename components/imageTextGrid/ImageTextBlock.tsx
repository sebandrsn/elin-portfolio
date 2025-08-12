"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ImageTextBlock({ blok, index }: any) {
  const desktopSection = (
    <div className="hidden bg-slate-200 lg:flex lg:w-1/2 lg:items-center">
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
    <div className="flex flex-col lg:h-[60vh] lg:flex-row lg:overflow-hidden">
      {index === 1 && desktopSection}
      <div className="hidden flex-none lg:block lg:w-1/2">
        <Image
          width={2100}
          height={1400}
          src={blok.image_desktop.filename}
          alt={blok.image_desktop.alt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-none lg:hidden lg:w-1/2">
        <Image
          width={360}
          height={640}
          src={blok.image_mobile.filename}
          alt={blok.image_mobile.alt}
          className="h-full w-full object-cover"
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
        className="flex-col gap-3 lg:hidden lg:w-1/2"
      >
        <h1 className="text-4xl">{blok.title}</h1>
        <p>{blok.description}</p>
      </motion.section>
    </div>
  );
}
