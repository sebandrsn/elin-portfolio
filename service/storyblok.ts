import FullscreenImage from "@/components/FullscreenImage";
import ImageTextBlock from "@/components/imageTextGrid/ImageTextBlock";
import ImageTextGrid from "@/components/imageTextGrid/ImageTextGrid";
import Hero from "@/components/Hero";
import Page from "@/components/Page";
import InfoSection from "@/components/info-section/InfoSection";
import InfoItem from "@/components/info-section/InfoItem";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import HeroSlider from "@/components/HeroSlider";
import GallerySection from "@/components/gallery/GallerySection";
import GalleryItem from "@/components/gallery/GalleryItem";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero_slider: HeroSlider,
    hero: Hero,
    image_text_grid: ImageTextGrid,
    image_text_block: ImageTextBlock,
    fullscreen_image: FullscreenImage,
    info_section: InfoSection,
    info_item: InfoItem,
    gallery_section: GallerySection,
    gallery_item: GalleryItem,
  },
  enableFallbackComponent: true,
});
