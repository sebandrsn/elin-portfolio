import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import Card from "./Card";
import cat from "@/public/images/cat-mobile.jpg";

export function HorizontalScrollCarousel() {
  const images = [cat, cat, cat, cat];

  const targetRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    // Update viewport width on mount and resize
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const carouselWidth = images.reduce((acc, image) => {
    return acc + image.width;
  }, 0);

  // Adjust the scroll range to stop when the last image is fully in view
  const adjustedScrollWidth = carouselWidth - viewportWidth;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${adjustedScrollWidth}px`],
  );

  return (
    <section
      ref={targetRef}
      style={{ height: `${carouselWidth}px` }}
      className="relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex" style={{ x }}>
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
