import Image from "next/image";
import { FullscreenImage as FullscreenImageType } from "@/.storyblok/types/337287/storyblok-components";
import { getImageDimensions } from "@/util/getImageDimensions";

export default function FullscreenImage({
  blok,
}: {
  readonly blok: FullscreenImageType;
}) {
  if (!blok.image.filename) {
    return null;
  }

  const dimensions = getImageDimensions(blok.image.filename);
  if (!dimensions) {
    return null;
  }
  const { width, height } = dimensions;

  return (
    <Image
      src={blok.image.filename}
      alt={blok.image.alt ?? "Fullscreen image"}
      width={width}
      height={height}
      className="h-auto w-full"
      loading="lazy"
      sizes="(max-width: 1023px) 100vw, 2100px"
    />
  );
}
