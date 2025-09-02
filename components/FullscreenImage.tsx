import Image from "next/image";
import { FullscreenImage as FullscreenImageType } from "@/.storyblok/types/337287/storyblok-components";

export default function FullscreenImage({
  blok,
}: {
  readonly blok: FullscreenImageType;
}) {
  if (!blok.image.filename) {
    return null;
  }

  return (
    <Image
      src={blok.image.filename}
      alt={blok.image.alt ?? "Fullscreen image"}
      width={2100}
      height={1400}
      className="h-auto w-full"
      loading="lazy"
      sizes="(max-width: 1023px) 100vw, 2100px"
    />
  );
}
