"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GalleryItem as GalleryItemType } from "@/.storyblok/types/337287/storyblok-components";

export default function GalleryItem({
  blok,
}: {
  readonly blok: GalleryItemType;
}) {
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
      initial="hidden"
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
      />
    </motion.div>
  );
}
