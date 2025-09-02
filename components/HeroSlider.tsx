"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import {
  HeroSlider as HeroSliderType,
  Hero as HeroType,
} from "@/.storyblok/types/337287/storyblok-components";

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

export default function HeroSlider({
  blok,
}: {
  readonly blok: HeroSliderType;
}) {
  if (!blok.heroes || blok.heroes.length === 0) {
    return null;
  }

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
        {blok.heroes
          .filter((hero: HeroType) => hero.image?.filename)
          .map((hero: HeroType) => (
            <SwiperSlide key={hero._uid} className="w/full relative h-full">
              <Image
                src={hero.image.filename!}
                alt={hero.image.alt ?? "Hero image"}
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
