import Image from "next/image";
import { motion } from "motion/react";

export default function GalleryItem({ blok }: any) {
  const assetUrl = blok.thumbnail.filename;
  const dimensions = {
    width: assetUrl.split("/")[5].split("x")[0],
    height: assetUrl.split("/")[5].split("x")[1],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className="cursor-pointer overflow-hidden"
    >
      <Image
        src={blok.thumbnail.filename}
        alt={blok.thumbnail.alt || blok.alt || "Gallery image"}
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-full object-cover transition duration-200 hover:scale-105"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}
