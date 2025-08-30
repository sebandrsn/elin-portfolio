"use client";

import { storyblokInit } from "@storyblok/react";
import GalleryItem from "@/components/gallery/GalleryItem";
import { PropsWithChildren } from "react";
import { getStoryblokApi } from "@/service/storyblok";

storyblokInit({
  components: {
    gallery_item: GalleryItem,
  },
  enableFallbackComponent: true,
});

export default function StoryblokProvider({
  children,
}: Readonly<PropsWithChildren>) {
  getStoryblokApi();
  return <>{children}</>;
}
