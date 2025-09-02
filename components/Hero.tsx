import Image from "next/image";
import { Hero as HeroType } from "@/.storyblok/types/337287/storyblok-components";

export default function Hero({ blok }: { readonly blok: HeroType }) {
  if (!blok.image.filename) {
    return null;
  }

  return (
    <Image
      width={2100}
      height={1400}
      src={blok.image.filename}
      alt={blok.image.alt ?? "Hero image"}
      className="h-auto w-full"
      priority={true}
      loading="eager"
    />
  );
}
