import Image from "next/image";

export default function Hero({ blok }: any) {
  return (
    <Image
      width={2100}
      height={1400}
      src={blok.image.filename}
      alt={blok.image.alt}
      className="h-auto w-full"
      priority={true}
      loading="eager"
    />
  );
}
