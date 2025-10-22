"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GalleryItem as GalleryItemType } from "@/.storyblok/types/337287/storyblok-components";
import { useRef } from "react";

export default function GalleryItem({
  blok,
  handleOpenModal,
}: {
  readonly blok: GalleryItemType;
  readonly handleOpenModal: (blok: GalleryItemType) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
    amount: 0.2,
    once: true,
  });

  if (!blok.image?.filename) {
    return null;
  }

  const assetUrl = blok.image.filename;
  const [widthStr, heightStr] = assetUrl.split("/")[5].split("x");
  const dimensions = {
    width: parseInt(widthStr, 10),
    height: parseInt(heightStr, 10),
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      initial={{ opacity: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="m-1 my-2 cursor-pointer overflow-hidden"
    >
      <Image
        src={blok.image.filename}
        alt={blok.image.alt || "Gallery image"}
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-full object-cover transition duration-200 hover:scale-105"
        style={{ display: "block" }}
        sizes="(max-width: 1023px) 100vw, 2100px"
        onClick={() => handleOpenModal(blok)}
      />
    </motion.div>
  );
}
