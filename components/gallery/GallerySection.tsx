"use client";

import { StoryblokComponent } from "@storyblok/react";
import Masonry from "react-masonry-css";
import {
  GallerySection as GallerySectionType,
  GalleryItem as GalleryItemType,
} from "@/.storyblok/types/337287/storyblok-components";
import Modal from "../modal/Modal";
import { useEffect, useState } from "react";

export default function GallerySection({
  blok,
}: {
  readonly blok: GallerySectionType;
}) {
  const [selectedGalleryItem, setSelectedGalleryItem] =
    useState<GalleryItemType | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGalleryItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!blok.items || blok.items.length === 0) {
    return null;
  }

  const handleOpenModal = (blok: GalleryItemType) => {
    setSelectedGalleryItem(blok);
  };

  const breakpointColumnsObj = {
    default: 3,
    1024: 2,
    640: 1,
  };
  return (
    <>
      <div className="flex lg:justify-center">
        <div className="my-10 flex w-3/4 justify-center px-0">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {blok.items.map((item: GalleryItemType, idx: number) => (
              <StoryblokComponent
                blok={item}
                index={idx}
                key={item._uid}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </Masonry>
        </div>
      </div>
      {selectedGalleryItem && <Modal galleryItem={selectedGalleryItem} />}
    </>
  );
}
