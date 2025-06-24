"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { EffectFade, Pagination, Navigation } from "swiper/modules";

function AutoAdvance() {
  const swiper = useSwiper();
  useEffect(() => {
    const timer = setInterval(() => {
      swiper.slideNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [swiper]);
  return null;
}

export default function HeroSlider({ blok }: any) {
  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 5rem)" }}>
      <Swiper
        navigation={false}
        loop={true}
        effect={"fade"}
        modules={[EffectFade, Pagination, Navigation]}
        className="h-full w-full"
      >
        <AutoAdvance />
        {blok.heroes.map((hero: any) => (
          <SwiperSlide key={hero._uid} className="relative h-full w-full">
            <Image
              src={hero.image.filename}
              alt={hero.image.alt}
              fill
              className="object-cover"
              loading="eager"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
