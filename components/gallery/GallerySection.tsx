"use client";

import { StoryblokComponent } from "@storyblok/react";
import Masonry from "react-masonry-css";

export default function GallerySection({ blok, index }: any) {
  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };
  return (
    <div className="my-10 px-2">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {blok.items.map((item: any, idx: number) => (
          <StoryblokComponent blok={item} index={idx} key={item._uid} />
        ))}
      </Masonry>
    </div>
  );
}
