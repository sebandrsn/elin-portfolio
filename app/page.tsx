"use client";

import mountainMobile from "@/public/images/mountains-mobile.jpg";
import mountain from "@/public/images/mountains.jpg";
import forestMobile from "@/public/images/forest-mobile.jpg";
import forest from "@/public/images/forest.jpg";
import ResponsiveBackgroundImage from "@/components/ResponsiveBackgroundImage";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";

export default function Home() {
  return (
    <>
      <ResponsiveBackgroundImage
        mobileImage={mountainMobile.src}
        desktopImage={mountain.src}
        className="top-0 h-screen bg-fixed"
      />
      <HorizontalScrollCarousel />
      <ResponsiveBackgroundImage
        mobileImage={forestMobile.src}
        desktopImage={forest.src}
        className="h-screen bg-fixed"
      />
    </>
  );
}
