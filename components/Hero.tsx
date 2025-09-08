import Image from "next/image";
import { Hero as HeroType } from "@/.storyblok/types/337287/storyblok-components";
import { getImageDimensions } from "@/util/getImageDimensions";

export default function Hero({ blok }: { readonly blok: HeroType }) {
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
      width={width}
      height={height}
      src={blok.image.filename}
      alt={blok.image.alt ?? "Hero image"}
      className="h-auto w-full"
      priority={true}
      loading="eager"
      sizes="(max-width: 1023px) 100vw, 2100px"
    />
  );
}
