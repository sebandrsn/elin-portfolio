import FullscreenImage from "@/components/FullscreenImage";
import GalleryItem from "@/components/GalleryItem";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    gallery_section: GallerySection,
    gallery_item: GalleryItem,
    fullscreen_image: FullscreenImage,
  },
  enableFallbackComponent: true,
});
