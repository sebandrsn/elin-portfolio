import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
}

function Card({ image }: Readonly<CardProps>) {
  return (
    <div className="flex-shrink-0 px-2">
      <Image
        width={image.width}
        height={image.height}
        src={image.src}
        alt="Card image" // TODO: Add alt text
      />
    </div>
  );
}

export default Card;
