import FullscreenImage from "@/components/FullscreenImage";
import GalleryItem from "@/components/gallery/GalleryItem";
import GallerySection from "@/components/gallery/GallerySection";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import InfoSection from "@/components/info-section/InfoSection";
import InfoItem from "@/components/info-section/InfoItem";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import HeroSlider from "@/components/HeroSlider";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero_slider: HeroSlider,
    hero: Hero,
    gallery_section: GallerySection,
    gallery_item: GalleryItem,
    fullscreen_image: FullscreenImage,
    info_section: InfoSection,
    info_item: InfoItem,
  },
  enableFallbackComponent: true,
});
