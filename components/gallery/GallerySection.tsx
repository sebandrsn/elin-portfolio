"use client";

import { StoryblokComponent } from "@storyblok/react";
import Masonry from "react-masonry-css";
import {
  GallerySection as GallerySectionType,
  GalleryItem as GalleryItemType,
} from "@/.storyblok/types/337287/storyblok-components";

export default function GallerySection({
  blok,
}: {
  readonly blok: GallerySectionType;
}) {
  if (!blok.items || blok.items.length === 0) {
    return null;
  }

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };
  return (
    <div className="flex lg:justify-center">
      <div className="my-10 flex w-3/4 justify-center px-0">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {blok.items.map((item: GalleryItemType, idx: number) => (
            <StoryblokComponent blok={item} index={idx} key={item._uid} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}
