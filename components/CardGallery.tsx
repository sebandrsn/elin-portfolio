import Card from "./Card";
import forestMobile from "@/public/images/forest-mobile.jpg";
import mountainMobile from "@/public/images/mountains-mobile.jpg";
import lakeMobile from "@/public/images/lake-mobile.jpg";
import fallMobile from "@/public/images/fall-mobile.jpg";
import sheltieMobile from "@/public/images/sheltie-mobile.jpg";
import catMobile from "@/public/images/cat-mobile.jpg";
import seaMobile from "@/public/images/sea-mobile.jpg";
import sea2Mobile from "@/public/images/sea2-mobile.jpg";

function CardGallery() {
  const images = [
    forestMobile,
    mountainMobile,
    lakeMobile,
    fallMobile,
    sheltieMobile,
    catMobile,
    seaMobile,
    sea2Mobile,
  ];
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                magna nec justo finibus consectetur.`;

  return (
    <div className="flex justify-center items-center m-16">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl">
        {images.map((image, index) => (
          <Card key={index} text={text} image={image} />
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
