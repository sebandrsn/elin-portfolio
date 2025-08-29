"use client";

import { storyblokInit } from "@storyblok/react";
import GalleryItem from "@/components/gallery/GalleryItem";
import { PropsWithChildren } from "react";

storyblokInit({
  components: {
    gallery_item: GalleryItem,
  },
  enableFallbackComponent: true,
});

export default function StoryblokProvider({
  children,
}: Readonly<PropsWithChildren>) {
  return <>{children}</>;
}
