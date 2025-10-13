import { GalleryItem } from "@/.storyblok/types/337287/storyblok-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade, Pagination, Navigation } from "swiper/modules";

export default function Modal({
  galleryItemId,
  galleryItems,
  handleCloseModal,
}: Readonly<{
  galleryItemId: string;
  galleryItems: GalleryItem[];
  handleCloseModal: () => void;
}>) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  if (!galleryItems || galleryItems.length === 0) return null;

  const initialSlide = galleryItems.findIndex(
    (item) => item._uid === galleryItemId,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div ref={modalRef}>
        <Swiper
          className="h-[80vh] w-[min(1100px,90vw)] rounded-2xl bg-white p-4 shadow-lg"
          loop
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation
          modules={[EffectFade, Pagination, Navigation]}
          initialSlide={initialSlide >= 0 ? initialSlide : 0}
        >
          {galleryItems
            .filter((item: GalleryItem) => item.image?.filename)
            .map((item: GalleryItem) => (
              <SwiperSlide key={item._uid}>
                <div className="relative h-full w-full">
                  <Image
                    src={item.image?.filename!}
                    alt={item.image?.alt ?? "Gallery image"}
                    fill
                    className="object-contain"
                    loading="eager"
                    priority
                    sizes="(max-width: 1023px) 100vw, 2100px"
                  />
                  <div className="absolute inset-0 flex items-start justify-end">
                    <button
                      className="cursor-pointer rounded p-2"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
