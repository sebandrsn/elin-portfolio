import Image from "next/image";

export default function FullscreenImage({ blok }: any) {
  return (
    <Image
      src={blok.image.filename}
      alt={blok.image.alt}
      width={2100}
      height={1400}
      className="h-auto w-full"
      loading="lazy"
      sizes="(max-width: 1023px) 100vw, 2100px"
    />
  );
}
