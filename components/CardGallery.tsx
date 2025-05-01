import Card from "./Card";
import forestMobile from "@/public/images/forest-mobile.jpg";
import mountainMobile from "@/public/images/mountains-mobile.jpg";
import lakeMobile from "@/public/images/lake-mobile.jpg";
import fallMobile from "@/public/images/fall-mobile.jpg";
import sheltieMobile from "@/public/images/sheltie-mobile.jpg";
import catMobile from "@/public/images/cat-mobile.jpg";
import seaMobile from "@/public/images/sea-mobile.jpg";
import sea2Mobile from "@/public/images/sea2-mobile.jpg";
import { motion } from "motion/react";

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

  return (
    <div className="m-16 flex items-center justify-center">
      <div className="grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
          >
            <Card key={index} image={image} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CardGallery;
