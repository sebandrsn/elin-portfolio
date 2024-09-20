import { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  text: string;
}

function Card({ text, image }: CardProps) {
  return (
    <div>
      <div className="h-full border border-gray-700 bg-slate-800 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-slate-600 cursor-pointer flex flex-col">
        <div className="relative flex-grow overflow-hidden rounded-t-lg">
          <img
            className="object-cover w-full h-40 transition-all duration-300 hover:brightness-110"
            src={image.src}
            alt="Card image"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
