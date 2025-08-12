import Image from "next/image";

export default function GalleryItem({ blok }: any) {
  return (
    <div className="flex cursor-pointer flex-col items-center transition-transform duration-300 hover:scale-105">
      <Image
        width={200}
        height={300}
        src={blok.thumbnail.filename}
        alt={blok.thumbnail.alt || blok.alt || "Gallery image"}
      />
    </div>
  );
}
