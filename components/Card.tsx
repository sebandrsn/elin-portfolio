import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
}

function Card({ image }: Readonly<CardProps>) {
  return (
    <div>
      <div className="flex cursor-pointer flex-col rounded-lg border border-gray-700 bg-slate-800 transition-all duration-300 hover:bg-slate-600 hover:shadow-xl">
        <div className="relative flex-grow overflow-hidden rounded-t-lg">
          <Image
            width={image.width}
            height={image.height}
            src={image.src}
            alt="Card image" // TODO: Add alt text
            className="h-48 w-full object-cover transition-all duration-300 hover:brightness-110"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-400">asd</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
