import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
}

function Card({ image }: Readonly<CardProps>) {
  return (
    <div>
      <Image width={1000} height={1000} src={image.src} alt="Card image" />
    </div>
  );
}

export default Card;
