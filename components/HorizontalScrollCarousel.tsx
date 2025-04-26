import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Card from "./Card";
import mountains from "@/public/images/mountains.jpg";

export function HorizontalScrollCarousel() {
  const images = [mountains, mountains, mountains, mountains, mountains];

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-4" style={{ x }}>
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
