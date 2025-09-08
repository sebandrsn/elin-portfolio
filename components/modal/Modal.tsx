import { GalleryItem } from "@/.storyblok/types/337287/storyblok-components";
import Image from "next/image";

export default function Modal({
  galleryItem,
}: Readonly<{ galleryItem: GalleryItem }>) {
  if (!galleryItem.image || !galleryItem.image.filename) return null;

  const assetUrl = galleryItem.image.filename;
  const [widthStr, heightStr] = assetUrl.split("/")[5].split("x");
  const dimensions = {
    width: parseInt(widthStr, 10),
    height: parseInt(heightStr, 10),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <Image
        src={galleryItem.image.filename}
        alt={galleryItem.image.alt || "Gallery image"}
        width={dimensions.width}
        height={dimensions.height}
        style={{ display: "block" }}
        className="max-h-screen max-w-1/2 object-contain"
        sizes="(max-width: 1023px) 100vw, 2100px"
      />
    </div>
  );
}
